const fs = require('fs');

const generateProducts = () => {
  const products = [];
  let idCounter = 1001;
  
  const cats = {
    Electronics: [
      { n: "Wireless Noise Cancelling Headphones", b: "Sony", p: [5000, 15000], img: "1618366712010-f4ae9c647dcb" },
      { n: "Galaxy Watch Pro", b: "Samsung", p: [12000, 29000], img: "1579586337278-3befd40fd17a" },
      { n: "MacBook Air M2", b: "Apple", p: [85000, 114900], img: "1517336714731-489689fd1ca8" },
      { n: "PlayStation 5 Console", b: "Sony", p: [45000, 49990], img: "1606813907291-d86efa9b94db" },
      { n: "iPhone 15 Pro", b: "Apple", p: [110000, 134900], img: "1695048133142-1a20484d2569" },
      { n: "XPS 15 OLED", b: "Dell", p: [150000, 185000], img: "1593642632823-8f785ba67e45" },
      { n: "QuietComfort 45", b: "Bose", p: [22000, 29900], img: "1546435770-a3e426bf472b" },
      { n: "MX Master 3S Mouse", b: "Logitech", p: [8000, 10995], img: "1527864550417-7fd91fc51a46" },
      { n: "AirPods Pro (2nd Gen)", b: "Apple", p: [20000, 24900], img: "1600294037681-c80b4cb5b434" },
      { n: "Galaxy S24 Ultra", b: "Samsung", p: [115000, 129999], img: "1610945265064-0e34e5519bbf" },
      { n: "Bravia XR OLED 65\"", b: "Sony", p: [200000, 249990], img: "1593359677879-a4bb92f829d1" },
      { n: "Keychron K2 Keyboard", b: "Generic", p: [6000, 8500], img: "1595225476474-87563907a212" },
      { n: "Apple Watch Series 9", b: "Apple", p: [35000, 41900], img: "1434493789847-2f02dc6ca35d" },
      { n: "Pixel 8 Pro", b: "Google", p: [90000, 106999], img: "1598327105666-5b89351aff97" },
      { n: "Smart Monitor M8", b: "Samsung", p: [50000, 59900], img: "1542751371-adc38448a05e" },
      { n: "G Pro X Superlight", b: "Logitech", p: [10000, 12995], img: "1615663245857-ac9310d5b463" },
      { n: "SoundLink Flex", b: "Bose", p: [12000, 15900], img: "1608043152269-423dbba4e7e1" },
      { n: "AirTag (4 Pack)", b: "Apple", p: [9000, 11900], img: "1623910398030-a8897519106d" },
      { n: "Galaxy Buds2 Pro", b: "Samsung", p: [14000, 17999], img: "1606220588913-b3aacb4d2f46" },
      { n: "Zenbook 14 OLED", b: "Asus", p: [85000, 99990], img: "1603302576837-37561b2e2302" },
      { n: "Steam Deck OLED", b: "Valve", p: [55000, 64900], img: "1659779354432-60142b82e2c5" },
      { n: "ROG Zephyrus G14", b: "Asus", p: [120000, 145000], img: "1603302576837-37561b2e2302" },
      { n: "DeathAdder V3 Pro", b: "Razer", p: [12000, 14999], img: "1615663245857-ac9310d5b463" },
      { n: "Wireless Charging Pad", b: "Spigen", p: [1500, 2500], img: "1623910398030-a8897519106d" },
      { n: "Power Bank 20000mAh", b: "Xiaomi", p: [1500, 2500], img: "1606220588913-b3aacb4d2f46" }
    ],
    "Home Essentials": [
      { n: "Cotton Double Bedsheet", b: "Spaces", p: [800, 1500], img: "1513694203232-719a280e022f" },
      { n: "Microfiber Pillow Set", b: "Wakefit", p: [400, 900], img: "1522708323590-d24dbb6b0267" },
      { n: "Fleece Winter Blanket", b: "Home Centre", p: [1200, 2500], img: "1522708323590-d24dbb6b0267" },
      { n: "100% Cotton Bath Towel", b: "Bombay Dyeing", p: [350, 800], img: "1583847268964-b185b1c11f9b" },
      { n: "Blackout Curtains Set", b: "IKEA", p: [1000, 2500], img: "1513694203232-719a280e022f" },
      { n: "Plastic Storage Box 50L", b: "Nilkamal", p: [500, 1200], img: "1583847268964-b185b1c11f9b" },
      { n: "Foldable Laundry Basket", b: "Generic", p: [300, 700], img: "1513694203232-719a280e022f" },
      { n: "Wooden Coat Hangers (Pack of 10)", b: "IKEA", p: [400, 900], img: "1583847268964-b185b1c11f9b" },
      { n: "Microfiber Floor Cleaning Mop", b: "Milton", p: [500, 1200], img: "1540932239986-30128078f362" },
      { n: "Anti-Slip Welcome Door Mat", b: "Generic", p: [150, 500], img: "1540932239986-30128078f362" },
      { n: "Water Absorbent Bathroom Mat", b: "Home Centre", p: [200, 600], img: "1540932239986-30128078f362" },
      { n: "Cushioned Kitchen Floor Mat", b: "Generic", p: [300, 800], img: "1540932239986-30128078f362" },
      { n: "Geometric Pattern Living Room Rug", b: "IKEA", p: [1500, 4500], img: "1540932239986-30128078f362" },
      { n: "Digital Weighing Scale", b: "HealthSense", p: [700, 1500], img: "1513694203232-719a280e022f" },
      { n: "Shoe Rack Organizer", b: "Nilkamal", p: [800, 2000], img: "1513694203232-719a280e022f" }
    ],
    Kitchen: [
      { n: "Non-Stick Frying Pan", b: "Prestige", p: [500, 1200], img: "1585933646706-7b4d1b8277eb" },
      { n: "Stainless Steel Cookware Set", b: "Pigeon", p: [1500, 3500], img: "1585933646706-7b4d1b8277eb" },
      { n: "Pressure Cooker 3L", b: "Hawkins", p: [1000, 2000], img: "1556910103-1c02745a872f" },
      { n: "Copper Water Bottle 1L", b: "Milton", p: [400, 900], img: "1610725516999-5f2122d64f0b" },
      { n: "Glass Lunch Box Set", b: "Borosil", p: [600, 1200], img: "1610725516999-5f2122d64f0b" },
      { n: "Airtight Storage Containers (Set of 6)", b: "Cello", p: [500, 1000], img: "1556910103-1c02745a872f" },
      { n: "Revolving Spice Rack", b: "Generic", p: [400, 900], img: "1590757234854-3e91bd511e64" },
      { n: "Ceramic Dinner Plates (Set of 4)", b: "Home Centre", p: [800, 1500], img: "1590757234854-3e91bd511e64" },
      { n: "Glass Mixing Bowls (Set of 3)", b: "Borosil", p: [500, 1200], img: "1590757234854-3e91bd511e64" },
      { n: "Coffee Mug Set", b: "Generic", p: [300, 700], img: "1590757234854-3e91bd511e64" },
      { n: "Crystal Glass Tumblers", b: "Ocean", p: [400, 1000], img: "1590757234854-3e91bd511e64" },
      { n: "Stainless Steel Cutlery Set", b: "Amazon Basics", p: [600, 1500], img: "1556910103-1c02745a872f" },
      { n: "Bamboo Chopping Board", b: "Generic", p: [250, 700], img: "1556910103-1c02745a872f" },
      { n: "Chef's Knife Set", b: "Victorinox", p: [1200, 3000], img: "1585933646706-7b4d1b8277eb" },
      { n: "Kitchen Sink Dish Rack", b: "Generic", p: [800, 1800], img: "1556910103-1c02745a872f" }
    ],
    "Home Decor": [
      { n: "Minimalist Wall Clock", b: "Ajanta", p: [300, 900], img: "1515238152791-381dd2e620d5" },
      { n: "Bedside Table Lamp", b: "Philips", p: [600, 1500], img: "1540574163026-643ea20abc46" },
      { n: "LED Fairy String Lights", b: "Generic", p: [150, 500], img: "1540574163026-643ea20abc46" },
      { n: "Wooden Photo Frame Set", b: "IKEA", p: [500, 1200], img: "1513506003901-1e6a200e6756" },
      { n: "Artificial Potted Plant", b: "Home Centre", p: [300, 800], img: "1505691938895-171fc3d9c563" },
      { n: "Ceramic Flower Vase", b: "Generic", p: [400, 1200], img: "1505691938895-171fc3d9c563" },
      { n: "Abstract Canvas Wall Art", b: "Generic", p: [700, 2500], img: "1513506003901-1e6a200e6756" },
      { n: "Scented Soy Candles", b: "Bath & Body Works", p: [500, 1500], img: "1540574163026-643ea20abc46" },
      { n: "Round Decorative Wall Mirror", b: "Generic", p: [900, 2500], img: "1513506003901-1e6a200e6756" },
      { n: "Embroidered Cushion Covers", b: "Spaces", p: [400, 1000], img: "1513506003901-1e6a200e6756" },
      { n: "Handcrafted Elephant Showpiece", b: "Generic", p: [300, 900], img: "1513506003901-1e6a200e6756" },
      { n: "Desk Organizer Wood", b: "IKEA", p: [400, 1000], img: "1513506003901-1e6a200e6756" }
    ],
    Clothing: [
      { n: "Men's Cotton Solid T-Shirt", b: "H&M", p: [399, 999], img: "1521572163474-6864f9cf17ab" },
      { n: "Graphic Print Casual T-Shirt", b: "Roadster", p: [349, 799], img: "1521572163474-6864f9cf17ab" },
      { n: "Classic Polo Shirt", b: "U.S. Polo Assn.", p: [799, 1599], img: "1521572163474-6864f9cf17ab" },
      { n: "Men's Slim Fit Jeans", b: "Levi's", p: [1299, 2999], img: "1515886657613-9f3515b0c78f" },
      { n: "Straight-Fit Trousers", b: "Allen Solly", p: [999, 2299], img: "1585487000160-6ebcfceb0d03" },
      { n: "Baggy Cargo Pants", b: "Roadster", p: [899, 1899], img: "1585487000160-6ebcfceb0d03" },
      { n: "Cotton Chinos", b: "Van Heusen", p: [1099, 2499], img: "1585487000160-6ebcfceb0d03" },
      { n: "Summer Casual Shorts", b: "Puma", p: [499, 1299], img: "1515886657613-9f3515b0c78f" },
      { n: "Fleece Winter Hoodie", b: "H&M", p: [999, 2499], img: "1617137968427-85924c800a22" },
      { n: "Crew Neck Sweatshirt", b: "Adidas", p: [1199, 2699], img: "1617137968427-85924c800a22" },
      { n: "Checked Casual Shirt", b: "Roadster", p: [599, 1499], img: "1596755095609-ed51654a169b" },
      { n: "Formal White Shirt", b: "Arrow", p: [899, 1999], img: "1596755095609-ed51654a169b" },
      { n: "Men's Cotton Kurta", b: "FabIndia", p: [799, 1899], img: "1596755095609-ed51654a169b" },
      { n: "Women's Floral Top", b: "H&M", p: [499, 1299], img: "1521572163474-6864f9cf17ab" },
      { n: "Women's Denim Jacket", b: "Levi's", p: [1499, 3499], img: "1617137968427-85924c800a22" },
      { n: "Athletic Track Pants", b: "Puma", p: [799, 1799], img: "1585487000160-6ebcfceb0d03" },
      { n: "Yoga Leggings", b: "Nike", p: [999, 2299], img: "1585487000160-6ebcfceb0d03" },
      { n: "Winter Puffer Jacket", b: "Columbia", p: [2500, 5000], img: "1617137968427-85924c800a22" },
      { n: "Silk Saree", b: "Generic", p: [1500, 4500], img: "1596755095609-ed51654a169b" },
      { n: "Printed Kurti", b: "Biba", p: [699, 1599], img: "1596755095609-ed51654a169b" }
    ],
    Footwear: [
      { n: "White Casual Sneakers", b: "Puma", p: [1299, 2999], img: "1595950653106-6c9ebd61f561" },
      { n: "Lightweight Running Shoes", b: "Adidas", p: [1599, 4500], img: "1542291026-7eec264c27ff" },
      { n: "Men's Leather Sandals", b: "Bata", p: [699, 1599], img: "1560769679-f084224b7cb6" },
      { n: "Comfortable House Slippers", b: "Crocs", p: [499, 1299], img: "1560769679-f084224b7cb6" },
      { n: "Formal Leather Loafers", b: "Hush Puppies", p: [1899, 3999], img: "1608231387042-66d1773070a5" },
      { n: "Beach Flip-Flops", b: "Puma", p: [299, 799], img: "1560769679-f084224b7cb6" },
      { n: "Women's Ankle Boots", b: "H&M", p: [1599, 3599], img: "1608231387042-66d1773070a5" },
      { n: "Basketball Shoes", b: "Nike", p: [3599, 7999], img: "1542291026-7eec264c27ff" },
      { n: "Canvas High Tops", b: "Converse", p: [1999, 3499], img: "1595950653106-6c9ebd61f561" },
      { n: "Women's Block Heels", b: "Bata", p: [899, 1999], img: "1608231387042-66d1773070a5" }
    ],
    Accessories: [
      { n: "Genuine Leather Wallet", b: "Tommy Hilfiger", p: [799, 1999], img: "1627384113743-696320526a1b" },
      { n: "Reversible Leather Belt", b: "Levis", p: [599, 1499], img: "1627384113743-696320526a1b" },
      { n: "Aviator Sunglasses", b: "Ray-Ban", p: [2500, 5500], img: "1511499767150-a48a237f0083" },
      { n: "Analog Wrist Watch", b: "Titan", p: [1499, 3599], img: "1523275335684-37898b6baf30" },
      { n: "Baseball Cap", b: "Puma", p: [399, 899], img: "1511499767150-a48a237f0083" },
      { n: "Laptop Backpack 20L", b: "American Tourister", p: [899, 2199], img: "1627384113743-696320526a1b" },
      { n: "Women's Tote Handbag", b: "Caprese", p: [1199, 2999], img: "1627384113743-696320526a1b" },
      { n: "Weekend Duffle Bag", b: "Wildcraft", p: [999, 2499], img: "1627384113743-696320526a1b" }
    ],
    "Beauty & Personal Care": [
      { n: "Salicylic Acid Face Wash", b: "Minimalist", p: [249, 499], img: "1596462502278-27bf8521d52d" },
      { n: "Refreshing Body Wash", b: "Nivea", p: [199, 449], img: "1611077544390-3ce703dbcf0a" },
      { n: "Anti-Dandruff Shampoo", b: "Head & Shoulders", p: [250, 550], img: "1596462502278-27bf8521d52d" },
      { n: "Ayurvedic Hair Oil", b: "Indulekha", p: [300, 600], img: "1611077544390-3ce703dbcf0a" },
      { n: "Daily Moisturizing Lotion", b: "Cetaphil", p: [399, 899], img: "1611077544390-3ce703dbcf0a" },
      { n: "Men's Grooming Kit", b: "Bombay Shaving Co", p: [799, 1599], img: "1556228578-0d85b1a4d571" },
      { n: "Beard Trimmer Pro", b: "Philips", p: [1199, 2599], img: "1556228578-0d85b1a4d571" },
      { n: "Wide Tooth Comb", b: "Generic", p: [99, 249], img: "1556228578-0d85b1a4d571" },
      { n: "Matte Lipstick Set", b: "Maybelline", p: [499, 1199], img: "1556228578-0d85b1a4d571" }
    ],
    Stationery: [
      { n: "A5 Ruled Notebook", b: "Classmate", p: [100, 250], img: "1512820790803-83ca734da794" },
      { n: "Ballpoint Pens (Pack of 10)", b: "Reynolds", p: [50, 150], img: "1586075010923-2dd4570fb338" },
      { n: "Desk Organizer Mesh", b: "Generic", p: [250, 600], img: "1456735190827-d72138eb7dc7" },
      { n: "LED Study Lamp", b: "Wipro", p: [499, 1299], img: "1456735190827-d72138eb7dc7" },
      { n: "Expanding File Folder", b: "Generic", p: [150, 400], img: "1512820790803-83ca734da794" },
      { n: "Sticky Notes Combo", b: "Post-it", p: [99, 299], img: "1512820790803-83ca734da794" }
    ],
    Travel: [
      { n: "Silicone Travel Bottles", b: "Generic", p: [299, 599], img: "1553531384-311a2f6fb3a5" },
      { n: "Memory Foam Neck Pillow", b: "Generic", p: [499, 1199], img: "1553531384-311a2f6fb3a5" },
      { n: "Luggage Packing Cubes (Set of 6)", b: "Amazon Basics", p: [599, 1499], img: "1565026057447-becf64c48972" },
      { n: "Hard Shell Cabin Suitcase", b: "Safari", p: [1999, 4599], img: "1565026057447-becf64c48972" },
      { n: "RFID Passport Holder", b: "Generic", p: [399, 899], img: "1553531384-311a2f6fb3a5" },
      { n: "Travel Universal Adapter", b: "Generic", p: [499, 1299], img: "1553531384-311a2f6fb3a5" }
    ]
  };

  Object.keys(cats).forEach(category => {
    cats[category].forEach(t => {
      const minPrice = Math.floor(t.p[0] * (0.8 + Math.random() * 0.15));
      const originalPrice = t.p[1] - (t.p[1] % 10) + 9;
      
      const imageUrl = `https://images.unsplash.com/photo-${t.img}?w=500&q=80`;
      products.push({
        productId: `P${idCounter++}`,
        name: t.n,
        description: `Premium ${t.n.toLowerCase()} offering exceptional quality and reliability. Featuring modern design for everyday use.`,
        category: category,
        brand: t.b,
        image: imageUrl,
        images: [imageUrl],
        originalPrice: originalPrice,
        stock: Math.floor(Math.random() * 100) + 10,
        rating: Number((3.8 + Math.random() * 1.1).toFixed(1)),
        reviews: Math.floor(Math.random() * 500) + 15,
        seller: `${t.b} Authorized Retailer`,
        negotiationEnabled: true,
        minimumNegotiationPrice: minPrice,
        maxRounds: Math.floor(Math.random() * 3) + 4,
        maxDiscount: Math.floor(((originalPrice - minPrice) / originalPrice) * 100),
        negotiationDuration: 30,
        specifications: {
          "Condition": "New",
          "Authenticity": "100% Genuine"
        }
      });
    });
  });
  
  return products;
};

const output = `import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Product } from './models/Product';

dotenv.config();

const generateProducts = () => {
  return ${JSON.stringify(generateProducts(), null, 2)};
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
console.log('Wrote to src/seed.ts. Total products:', generateProducts().length);
