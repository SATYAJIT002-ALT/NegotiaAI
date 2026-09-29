import { Negotiation, INegotiation } from '../models/Negotiation';
import { Product } from '../models/Product';
import { Order } from '../models/Order';

export class NegotiationService {
  
  static async startNegotiation(buyerId: string, productId: string, mode: 'MANUAL' | 'AUTO') {
    const product = await Product.findOne({ productId });
    if (!product) throw new Error("Product not found");
    if (!product.negotiationEnabled) throw new Error("Negotiation is not enabled for this product");
    
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + (product.negotiationDuration || 30));
    
    const neg = new Negotiation({
      negotiationId: 'N' + Date.now(),
      buyerId,
      productId: product._id,
      mode,
      originalPrice: product.originalPrice,
      status: 'ACTIVE',
      rounds: 0,
      maxRounds: product.maxRounds,
      expiresAt,
      lastSellerOffer: product.originalPrice,
      messages: [{
        sender: 'SYSTEM',
        text: `Negotiation started. Original Price: ₹${product.originalPrice}.`,
      }]
    });
    
    if (mode === 'AUTO') {
      // Generate initial buyer offer automatically
      const initialBuyerOffer = Math.floor(product.originalPrice * 0.8 / 10) * 10;
      neg.messages.push({
        sender: 'BUYER_AGENT',
        text: `My client offers ₹${initialBuyerOffer}.`,
        proposedPrice: initialBuyerOffer
      });
      neg.rounds += 1;
      
      const sellerResponse = this.calculateSellerResponse(neg, product, initialBuyerOffer);
      neg.messages.push({
        sender: 'SELLER',
        text: sellerResponse.text,
        proposedPrice: sellerResponse.offer
      });
      
      if (sellerResponse.accepted) {
        neg.status = 'ACCEPTED';
        neg.negotiatedPrice = sellerResponse.offer;
      } else if (sellerResponse.failed) {
        neg.status = 'FAILED';
      }
    }
    
    await neg.save();
    return neg;
  }

  static async autoStepNegotiation(negotiationId: string) {
    const neg = await Negotiation.findOne({ negotiationId }).populate('productId');
    if (!neg) throw new Error("Negotiation not found");
    if (neg.status !== 'ACTIVE') throw new Error(`Negotiation is ${neg.status}`);
    if (neg.mode !== 'AUTO') throw new Error("Negotiation is not in AUTO mode");
    if (new Date() > neg.expiresAt) {
      neg.status = 'EXPIRED';
      await neg.save();
      throw new Error("Negotiation expired");
    }

    const product = neg.productId as any;
    const maxBudget = product.originalPrice; // Buyer agent uses original price as absolute max

    // Get last seller offer
    const lastSellerMsg = [...neg.messages].reverse().find(m => m.sender === 'SELLER' && m.proposedPrice);
    const lastBuyerMsg = [...neg.messages].reverse().find(m => m.sender === 'BUYER_AGENT' && m.proposedPrice);

    if (!lastSellerMsg || !lastBuyerMsg) throw new Error("Invalid negotiation state for auto step");

    const sellerOffer = lastSellerMsg.proposedPrice!;
    let currentBuyerOffer = lastBuyerMsg.proposedPrice!;

    // Buyer Strategy:
    // If seller's offer is close to the buyer's last offer (within 2-3%), we can accept it if we're near our limit.
    // However, the rule states: "Do NOT make the Buyer Agent immediately jump to the seller's price... evaluate whether another negotiation round could reasonably improve the deal."
    // Let's concede ~40% of the difference between current buyer offer and seller offer.
    
    if (neg.rounds >= neg.maxRounds) {
      neg.status = 'FAILED';
      neg.messages.push({
        sender: 'SYSTEM',
        text: 'Maximum negotiation rounds reached without agreement.'
      });
      await neg.save();
      return neg;
    }

    const gap = sellerOffer - currentBuyerOffer;
    if (gap <= 0) {
      // Seller offered something <= buyer's offer. This shouldn't happen based on seller logic, but just in case.
      neg.status = 'ACCEPTED';
      neg.negotiatedPrice = sellerOffer;
      await neg.save();
      return neg;
    }

    // Buyer concedes ~35% of the gap
    const concession = Math.floor(gap * 0.35);
    currentBuyerOffer = currentBuyerOffer + concession;
    
    // Round to nearest 10
    currentBuyerOffer = Math.ceil(currentBuyerOffer / 10) * 10;
    
    if (currentBuyerOffer >= sellerOffer) {
       currentBuyerOffer = sellerOffer - 10;
    }

    neg.messages.push({
      sender: 'BUYER_AGENT',
      text: `My client can offer ₹${currentBuyerOffer}.`,
      proposedPrice: currentBuyerOffer
    });
    neg.rounds += 1;

    // Seller Agent Turn
    const sellerResponse = this.calculateSellerResponse(neg, product, currentBuyerOffer);
    neg.messages.push({
      sender: 'SELLER',
      text: sellerResponse.text,
      proposedPrice: sellerResponse.offer
    });
    
    if (sellerResponse.accepted) {
      neg.status = 'ACCEPTED';
      neg.negotiatedPrice = sellerResponse.offer;
    } else if (sellerResponse.failed) {
      neg.status = 'FAILED';
    }

    await neg.save();
    return neg;
  }
  
  static async processOffer(negotiationId: string, offer: number) {
    const neg = await Negotiation.findOne({ negotiationId }).populate('productId');
    if (!neg) throw new Error("Negotiation not found");
    if (neg.status !== 'ACTIVE') throw new Error(`Negotiation is ${neg.status}`);
    if (new Date() > neg.expiresAt) {
      neg.status = 'EXPIRED';
      await neg.save();
      throw new Error("Negotiation expired");
    }
    
    const product = neg.productId as any;
    
    neg.messages.push({
      sender: 'BUYER',
      text: `I offer ₹${offer}`,
      proposedPrice: offer
    });
    
    neg.rounds += 1;
    
    const sellerResponse = this.calculateSellerResponse(neg, product, offer);
    
    neg.messages.push({
      sender: 'SELLER',
      text: sellerResponse.text,
      proposedPrice: sellerResponse.offer
    });
    
    if (sellerResponse.accepted) {
      neg.status = 'ACCEPTED';
      neg.negotiatedPrice = sellerResponse.offer;
    } else if (sellerResponse.failed) {
      neg.status = 'FAILED';
    }
    
    await neg.save();
    return neg;
  }
  
  private static calculateSellerResponse(neg: INegotiation, product: any, buyerOffer: number) {
    const minPrice = product.minimumNegotiationPrice;
    let lastOffer = neg.lastSellerOffer || product.originalPrice;
    
    if (buyerOffer >= lastOffer) {
      // Accept immediately if buyer matches or exceeds seller's last offer
      neg.lastSellerOffer = buyerOffer;
      return { accepted: true, offer: buyerOffer, text: `I accept your offer of ₹${buyerOffer}.` };
    }
    
    if (buyerOffer >= product.originalPrice) {
      neg.lastSellerOffer = product.originalPrice;
      return { accepted: true, offer: product.originalPrice, text: `I accept your offer of ₹${product.originalPrice}.` };
    } 
    
    if (buyerOffer >= minPrice && buyerOffer >= lastOffer * 0.95) {
      // Very close to what seller wants
      neg.lastSellerOffer = buyerOffer;
      return { accepted: true, offer: buyerOffer, text: `I agree to ₹${buyerOffer}.` };
    }
    
    // Counter Offer Logic
    if (neg.rounds >= neg.maxRounds) {
       // Last round
       if (buyerOffer >= minPrice) {
          // Reluctantly accept
          neg.lastSellerOffer = buyerOffer;
          return { accepted: true, offer: buyerOffer, text: `Since this is our final round, I will accept your offer of ₹${buyerOffer}.` };
       } else {
          return { failed: true, offer: undefined, text: `I cannot accept ₹${buyerOffer} and we have reached the maximum number of rounds. Negotiation failed.` };
       }
    }
    
    // Calculate new counter offer
    // Monotonic concession: seller must decrease price
    const gap = lastOffer - buyerOffer;
    // Concede by 20% to 40% of the gap
    const concession = gap * 0.3;
    let counterOffer = Math.floor(lastOffer - concession);
    
    // Hard floor enforcement
    if (counterOffer <= minPrice) {
      counterOffer = minPrice;
    }
    
    // Round to nearest 10
    counterOffer = Math.ceil(counterOffer / 10) * 10;
    
    // Ensure it doesn't increase (strictly monotonic)
    if (counterOffer >= lastOffer) {
      counterOffer = lastOffer - 10;
      if (counterOffer < minPrice) counterOffer = minPrice;
    }
    
    neg.lastSellerOffer = counterOffer;
    
    if (counterOffer === minPrice) {
       return { accepted: false, offer: counterOffer, text: `₹${counterOffer} is my best and final offer.` };
    } else {
       return { accepted: false, offer: counterOffer, text: `₹${buyerOffer} is too low. I can offer ₹${counterOffer}.` };
    }
  }
  
  static async acceptOffer(negotiationId: string) {
     const neg = await Negotiation.findOne({ negotiationId });
     if (!neg) throw new Error("Negotiation not found");
     if (neg.status !== 'ACTIVE') throw new Error(`Negotiation is ${neg.status}`);
     
     const lastSellerMessage = [...neg.messages].reverse().find(m => m.sender === 'SELLER' && m.proposedPrice);
     if (!lastSellerMessage) throw new Error("No seller offer to accept");
     
     // Atomic update to prevent race conditions
     const updatedNeg = await Negotiation.findOneAndUpdate(
       { negotiationId, status: 'ACTIVE' },
       { 
         $set: { 
           status: 'ACCEPTED', 
           negotiatedPrice: lastSellerMessage.proposedPrice 
         },
         $push: { 
           messages: { sender: 'BUYER', text: `I accept your offer of ₹${lastSellerMessage.proposedPrice}.` } 
         }
       },
       { new: true }
     );
     
     if (!updatedNeg) throw new Error("Negotiation could not be accepted. It may have already been completed or expired.");
     return updatedNeg;
  }
  
  static async rejectOffer(negotiationId: string) {
     const neg = await Negotiation.findOne({ negotiationId });
     if (!neg) throw new Error("Negotiation not found");
     if (neg.status !== 'ACTIVE') throw new Error(`Negotiation is ${neg.status}`);
     
     neg.status = 'REJECTED';
     neg.messages.push({ sender: 'BUYER', text: `I reject the current offer and end the negotiation.` });
     
     await neg.save();
     return neg;
  }
}
