import { Router } from 'express';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { Negotiation } from '../models/Negotiation';
import jwt from 'jsonwebtoken';

const router = Router();

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.post('/checkout', authMiddleware, async (req: any, res) => {
  try {
    const { items } = req.body;
    const buyerId = req.user.id;
    
    const createdOrders = [];
    
    for (const item of items) {
      const product = await Product.findOne({ productId: item.productId });
      if (!product) return res.status(404).json({ error: `Product ${item.productId} not found` });
      
      // Validate negotiation if present
      if (item.negotiationId) {
        const neg = await Negotiation.findOne({ negotiationId: item.negotiationId, buyerId });
        if (!neg) return res.status(400).json({ error: "Invalid negotiation for item: " + item.name });
        if (neg.status !== 'ACCEPTED') return res.status(400).json({ error: "Negotiation is not accepted for item: " + item.name });
        if (neg.negotiatedPrice !== item.negotiatedPrice) return res.status(400).json({ error: "Price mismatch for item: " + item.name });
      }
      
      const finalPrice = item.negotiationId ? item.negotiatedPrice : product.originalPrice;
      const finalAmount = finalPrice * item.quantity;
      
      const order = new Order({
        orderId: 'ORD' + Date.now() + Math.floor(Math.random() * 1000),
        buyerId,
        productId: product._id,
        negotiationId: item.negotiationId,
        originalPrice: product.originalPrice,
        negotiatedPrice: item.negotiationId ? item.negotiatedPrice : product.originalPrice,
        quantity: item.quantity,
        finalAmount,
        paymentStatus: 'PAID',
        orderStatus: 'PROCESSING'
      });
      
      await order.save();
      createdOrders.push(order);
    }
    
    res.json({ message: 'Checkout successful', orders: createdOrders });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/history', authMiddleware, async (req: any, res) => {
  try {
    const orders = await Order.find({ buyerId: req.user.id }).populate('productId').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
