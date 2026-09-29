import { Router } from 'express';
import { Wishlist } from '../models/Wishlist';
import { Product } from '../models/Product';
import { authenticate, AuthRequest } from '../middlewares/auth';

const router = Router();

// Get user's wishlist
router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const wishlist = await Wishlist.find({ userId: req.user!.id }).populate('productId');
    
    // Filter out null products (in case a product was deleted)
    const validWishlist = wishlist.filter(item => item.productId !== null);
    
    // Map to just return the products
    res.json(validWishlist.map(item => item.productId));
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Add to wishlist
router.post('/:productId', authenticate, async (req: AuthRequest, res) => {
  try {
    const publicProductId = req.params.productId;
    const product = await Product.findOne({ productId: publicProductId });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const existing = await Wishlist.findOne({ userId: req.user!.id, productId: product._id });
    if (existing) return res.status(400).json({ error: 'Product already in wishlist' });

    const wishlistItem = new Wishlist({
      userId: req.user!.id,
      productId: product._id
    });
    
    await wishlistItem.save();
    res.status(201).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Remove from wishlist
router.delete('/:productId', authenticate, async (req: AuthRequest, res) => {
  try {
    const publicProductId = req.params.productId;
    const product = await Product.findOne({ productId: publicProductId });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    await Wishlist.deleteOne({ userId: req.user!.id, productId: product._id });
    res.json({ success: true, message: 'Removed from wishlist', removedProductId: publicProductId });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
