import { Router } from 'express';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { Negotiation } from '../models/Negotiation';
import { Order } from '../models/Order';
import jwt from 'jsonwebtoken';

const router = Router();

const authAdminMiddleware = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    const user = await User.findById(decoded.id);
    if (!user || user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.get('/dashboard', authAdminMiddleware, async (req: any, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'customer' });
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    
    const negotiations = await Negotiation.find();
    
    const totalNegotiations = negotiations.length;
    const ongoingNegotiations = negotiations.filter(n => n.status === 'ACTIVE').length;
    const successfulNegotiations = negotiations.filter(n => n.status === 'ACCEPTED').length;
    const rejectedNegotiations = negotiations.filter(n => n.status === 'REJECTED').length;
    const failedNegotiations = negotiations.filter(n => n.status === 'FAILED' || n.status === 'EXPIRED').length;
    
    // Revenue and savings
    const orders = await Order.find();
    let revenue = 0;
    
    for (const order of orders) {
      revenue += order.finalAmount;
    }
    
    // Buyer Savings & Discount from Accepted Deals Only
    let buyerSavings = 0;
    let totalDiscountPercent = 0;
    
    const acceptedNegs = negotiations.filter(n => n.status === 'ACCEPTED');
    for (const n of acceptedNegs) {
      const orig = n.originalPrice;
      const finalPrice = n.negotiatedPrice;
      if (finalPrice && finalPrice < orig) {
        buyerSavings += (orig - finalPrice);
        totalDiscountPercent += ((orig - finalPrice) / orig) * 100;
      }
    }
    
    const avgDiscount = acceptedNegs.length > 0 ? totalDiscountPercent / acceptedNegs.length : 0;
    const avgRounds = acceptedNegs.length > 0 ? acceptedNegs.reduce((acc, n) => acc + n.rounds, 0) / acceptedNegs.length : 0;
    
    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalNegotiations,
      ongoingNegotiations,
      successfulNegotiations,
      rejectedNegotiations,
      failedNegotiations,
      revenue,
      buyerSavings,
      metrics: {
        successRate: totalNegotiations > 0 ? (successfulNegotiations / totalNegotiations) * 100 : 0,
        averageDiscount: avgDiscount,
        averageRounds: avgRounds
      }
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET registered users
router.get('/users', authAdminMiddleware, async (req: any, res) => {
  try {
    const users = await User.find({ role: 'customer' }).select('-passwordHash -__v');
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET rejected deals
router.get('/negotiations/rejected', authAdminMiddleware, async (req: any, res) => {
  try {
    const rejected = await Negotiation.find({ status: 'REJECTED' })
      .populate('buyerId', 'name email')
      .populate('productId', 'name image');
    res.json(rejected);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
