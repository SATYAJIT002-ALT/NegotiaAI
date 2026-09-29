import { Router } from 'express';
import { Product } from '../models/Product';
import { authenticate, authorizeAdmin } from '../middlewares/auth';

const router = Router();

// Public: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Public: Get product by ID
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: Create product
router.post('/', authenticate, authorizeAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
