const fs = require('fs');

async function buildSeed() {
  const res = await fetch('https://dummyjson.com/products?limit=150');
  const data = await res.json();
  const dummyProducts = data.products;

  const categoryMap = {
    'beauty': 'Beauty & Personal Care',
    'fragrances': 'Beauty & Personal Care',
    'furniture': 'Home Decor',
    'groceries': 'Kitchen',
    'home-decoration': 'Home Decor',
    'kitchen-accessories': 'Kitchen',
    'laptops': 'Electronics',
    'mens-shirts': 'Clothing',
    'mens-shoes': 'Footwear',
    'mens-watches': 'Accessories',
    'mobile-accessories': 'Electronics',
    'motorcycle': 'Travel',
    'skin-care': 'Beauty & Personal Care',
    'smartphones': 'Electronics',
    'sports-accessories': 'Travel',
    'sunglasses': 'Accessories',
    'tablets': 'Electronics',
    'tops': 'Clothing',
    'vehicle': 'Travel',
    'womens-bags': 'Accessories',
    'womens-dresses': 'Clothing',
    'womens-jewellery': 'Accessories',
    'womens-shoes': 'Footwear',
    'womens-watches': 'Accessories'
  };

  let idCounter = 1001;
  const products = dummyProducts.map(p => {
    let cat = categoryMap[p.category] || 'Home Essentials';
    
    // Convert USD price to INR approx
    const originalPrice = p.price * 80;
    const minPrice = Math.floor(originalPrice * (0.7 + Math.random() * 0.2)); // 70-90% of original
    
    // Use their high-quality thumbnail or first image
    const img = p.thumbnail || p.images[0];

    return {
      productId: `P${idCounter++}`,
      name: p.title,
      description: p.description || `Premium quality ${p.title} for everyday use.`,
      category: cat,
      brand: p.brand || 'Generic',
      image: img,
      images: p.images || [img],
      originalPrice: originalPrice,
      stock: p.stock || Math.floor(Math.random() * 100) + 10,
      rating: p.rating || Number((3.8 + Math.random() * 1.1).toFixed(1)),
      reviews: p.reviews ? p.reviews.length * 15 : Math.floor(Math.random() * 500) + 15,
      seller: (p.brand || 'Generic') + ' Authorized Retailer',
      negotiationEnabled: true,
      minimumNegotiationPrice: minPrice,
      maxRounds: Math.floor(Math.random() * 3) + 4,
      maxDiscount: Math.floor(((originalPrice - minPrice) / originalPrice) * 100),
      negotiationDuration: 30,
      specifications: {
        "Condition": "New",
        "Authenticity": "100% Genuine"
      }
    };
  });

  const output = `import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Product } from './models/Product';

dotenv.config();

const generateProducts = () => {
  return ${JSON.stringify(products, null, 2)};
};

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/negotiaai');
  console.log('Connected to MongoDB');

  await User.deleteMany({});
  await Product.deleteMany({});

  const adminPass = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'adminpass2026', 10);
  const admin = new User({
    name: 'Admin',
    email: process.env.ADMIN_EMAIL || 'satyajitsasmal022@gmail.com',
    passwordHash: adminPass,
    role: 'admin'
  });
  await admin.save();

  const userPass = await bcrypt.hash('customer123', 10);
  const user = new User({
    name: 'Test Customer',
    email: 'customer@negotia.ai',
    passwordHash: userPass,
    role: 'customer'
  });
  await user.save();

  const products = generateProducts();
  await Product.insertMany(products);

  console.log(\`Seeded database with Admin, User, and \${products.length} Products\`);
  process.exit(0);
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
`;

  fs.writeFileSync('src/seed.ts', output);
  console.log('Wrote to src/seed.ts. Total products:', products.length);
}

buildSeed().catch(console.error);
