import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Product } from './models/Product';

dotenv.config();

const generateProducts = () => {
  return [
  {
    "productId": "P1001",
    "name": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "Beauty & Personal Care",
    "brand": "Essence",
    "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "originalPrice": 799.2,
    "stock": 99,
    "rating": 2.56,
    "reviews": 45,
    "seller": "Essence Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 684,
    "maxRounds": 5,
    "maxDiscount": 14,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1002",
    "name": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "category": "Beauty & Personal Care",
    "brand": "Glamour Beauty",
    "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 34,
    "rating": 2.86,
    "reviews": 45,
    "seller": "Glamour Beauty Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1418,
    "maxRounds": 5,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1003",
    "name": "Powder Canister",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "category": "Beauty & Personal Care",
    "brand": "Velvet Touch",
    "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 89,
    "rating": 4.64,
    "reviews": 45,
    "seller": "Velvet Touch Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 922,
    "maxRounds": 5,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1004",
    "name": "Red Lipstick",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "category": "Beauty & Personal Care",
    "brand": "Chic Cosmetics",
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 91,
    "rating": 4.36,
    "reviews": 45,
    "seller": "Chic Cosmetics Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 804,
    "maxRounds": 4,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1005",
    "name": "Red Nail Polish",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "category": "Beauty & Personal Care",
    "brand": "Nail Couture",
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
    ],
    "originalPrice": 719.2,
    "stock": 79,
    "rating": 4.32,
    "reviews": 45,
    "seller": "Nail Couture Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 613,
    "maxRounds": 6,
    "maxDiscount": 14,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1006",
    "name": "Calvin Klein CK One",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "category": "Beauty & Personal Care",
    "brand": "Calvin Klein",
    "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
    ],
    "originalPrice": 3999.2000000000003,
    "stock": 29,
    "rating": 4.37,
    "reviews": 45,
    "seller": "Calvin Klein Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2857,
    "maxRounds": 5,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1007",
    "name": "Chanel Coco Noir Eau De",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "category": "Beauty & Personal Care",
    "brand": "Chanel",
    "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
    ],
    "originalPrice": 10399.2,
    "stock": 58,
    "rating": 4.26,
    "reviews": 45,
    "seller": "Chanel Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 8739,
    "maxRounds": 4,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1008",
    "name": "Dior J'adore",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "category": "Beauty & Personal Care",
    "brand": "Dior",
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
    ],
    "originalPrice": 7199.2,
    "stock": 98,
    "rating": 3.8,
    "reviews": 45,
    "seller": "Dior Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 6263,
    "maxRounds": 5,
    "maxDiscount": 13,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1009",
    "name": "Dolce Shine Eau de",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "category": "Beauty & Personal Care",
    "brand": "Dolce & Gabbana",
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
    ],
    "originalPrice": 5599.2,
    "stock": 4,
    "rating": 3.96,
    "reviews": 45,
    "seller": "Dolce & Gabbana Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 3984,
    "maxRounds": 4,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1010",
    "name": "Gucci Bloom Eau de",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "category": "Beauty & Personal Care",
    "brand": "Gucci",
    "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
    ],
    "originalPrice": 6399.2,
    "stock": 91,
    "rating": 2.74,
    "reviews": 45,
    "seller": "Gucci Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5671,
    "maxRounds": 4,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1011",
    "name": "Annibale Colombo Bed",
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    "category": "Home Decor",
    "brand": "Annibale Colombo",
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
    ],
    "originalPrice": 151999.2,
    "stock": 88,
    "rating": 4.77,
    "reviews": 45,
    "seller": "Annibale Colombo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 113322,
    "maxRounds": 6,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1012",
    "name": "Annibale Colombo Sofa",
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    "category": "Home Decor",
    "brand": "Annibale Colombo",
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
    ],
    "originalPrice": 199999.19999999998,
    "stock": 60,
    "rating": 3.92,
    "reviews": 45,
    "seller": "Annibale Colombo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 165813,
    "maxRounds": 6,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1013",
    "name": "Bedside Table African Cherry",
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "category": "Home Decor",
    "brand": "Furniture Co.",
    "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 64,
    "rating": 2.87,
    "reviews": 45,
    "seller": "Furniture Co. Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 17923,
    "maxRounds": 6,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1014",
    "name": "Knoll Saarinen Executive Conference Chair",
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "category": "Home Decor",
    "brand": "Knoll",
    "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
    ],
    "originalPrice": 39999.2,
    "stock": 26,
    "rating": 4.88,
    "reviews": 45,
    "seller": "Knoll Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 29514,
    "maxRounds": 6,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1015",
    "name": "Wooden Bathroom Sink With Mirror",
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    "category": "Home Decor",
    "brand": "Bath Trends",
    "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
    ],
    "originalPrice": 63999.2,
    "stock": 7,
    "rating": 3.59,
    "reviews": 45,
    "seller": "Bath Trends Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 49837,
    "maxRounds": 5,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1016",
    "name": "Apple",
    "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
    ],
    "originalPrice": 159.2,
    "stock": 8,
    "rating": 4.19,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 116,
    "maxRounds": 5,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1017",
    "name": "Beef Steak",
    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 86,
    "rating": 4.47,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 868,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1018",
    "name": "Cat Food",
    "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
    ],
    "originalPrice": 719.2,
    "stock": 46,
    "rating": 3.13,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 633,
    "maxRounds": 6,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1019",
    "name": "Chicken Meat",
    "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
    ],
    "originalPrice": 799.2,
    "stock": 97,
    "rating": 3.19,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 603,
    "maxRounds": 6,
    "maxDiscount": 24,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1020",
    "name": "Cooking Oil",
    "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
    ],
    "originalPrice": 399.20000000000005,
    "stock": 10,
    "rating": 4.8,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 339,
    "maxRounds": 4,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1021",
    "name": "Cucumber",
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
    ],
    "originalPrice": 119.2,
    "stock": 84,
    "rating": 4.07,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 104,
    "maxRounds": 5,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1022",
    "name": "Dog Food",
    "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
    ],
    "originalPrice": 879.2,
    "stock": 71,
    "rating": 4.55,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 634,
    "maxRounds": 6,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1023",
    "name": "Eggs",
    "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
    ],
    "originalPrice": 239.20000000000002,
    "stock": 9,
    "rating": 2.53,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 193,
    "maxRounds": 4,
    "maxDiscount": 19,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1024",
    "name": "Fish Steak",
    "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 74,
    "rating": 3.78,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1066,
    "maxRounds": 5,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1025",
    "name": "Green Bell Pepper",
    "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
    ],
    "originalPrice": 103.2,
    "stock": 33,
    "rating": 3.25,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 76,
    "maxRounds": 5,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1026",
    "name": "Green Chili Pepper",
    "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
    ],
    "originalPrice": 79.2,
    "stock": 3,
    "rating": 3.66,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 59,
    "maxRounds": 6,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1027",
    "name": "Honey Jar",
    "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
    ],
    "originalPrice": 559.2,
    "stock": 34,
    "rating": 3.97,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 414,
    "maxRounds": 6,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1028",
    "name": "Ice Cream",
    "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
    ],
    "originalPrice": 439.20000000000005,
    "stock": 27,
    "rating": 3.39,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 385,
    "maxRounds": 6,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1029",
    "name": "Juice",
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
    ],
    "originalPrice": 319.20000000000005,
    "stock": 50,
    "rating": 3.94,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 260,
    "maxRounds": 6,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1030",
    "name": "Kiwi",
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
    ],
    "originalPrice": 199.20000000000002,
    "stock": 99,
    "rating": 4.93,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 148,
    "maxRounds": 5,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1031",
    "name": "Lemon",
    "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp"
    ],
    "originalPrice": 63.2,
    "stock": 31,
    "rating": 3.53,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 55,
    "maxRounds": 6,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1032",
    "name": "Milk",
    "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"
    ],
    "originalPrice": 279.20000000000005,
    "stock": 27,
    "rating": 2.61,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 216,
    "maxRounds": 4,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1033",
    "name": "Mulberry",
    "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp"
    ],
    "originalPrice": 399.20000000000005,
    "stock": 99,
    "rating": 4.95,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 308,
    "maxRounds": 6,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1034",
    "name": "Nescafe Coffee",
    "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp"
    ],
    "originalPrice": 639.2,
    "stock": 57,
    "rating": 4.82,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 453,
    "maxRounds": 5,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1035",
    "name": "Potatoes",
    "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp"
    ],
    "originalPrice": 183.2,
    "stock": 13,
    "rating": 4.81,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 134,
    "maxRounds": 5,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1036",
    "name": "Protein Powder",
    "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 80,
    "rating": 4.18,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1394,
    "maxRounds": 5,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1037",
    "name": "Red Onions",
    "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp"
    ],
    "originalPrice": 159.2,
    "stock": 82,
    "rating": 4.2,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 137,
    "maxRounds": 4,
    "maxDiscount": 13,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1038",
    "name": "Rice",
    "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/rice/1.webp"
    ],
    "originalPrice": 479.20000000000005,
    "stock": 59,
    "rating": 3.18,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 344,
    "maxRounds": 5,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1039",
    "name": "Soft Drinks",
    "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp"
    ],
    "originalPrice": 159.2,
    "stock": 53,
    "rating": 4.75,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 135,
    "maxRounds": 4,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1040",
    "name": "Strawberry",
    "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp"
    ],
    "originalPrice": 319.20000000000005,
    "stock": 46,
    "rating": 3.08,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 258,
    "maxRounds": 5,
    "maxDiscount": 19,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1041",
    "name": "Tissue Paper Box",
    "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp"
    ],
    "originalPrice": 199.20000000000002,
    "stock": 86,
    "rating": 2.69,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 142,
    "maxRounds": 6,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1042",
    "name": "Water",
    "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/groceries/water/1.webp"
    ],
    "originalPrice": 79.2,
    "stock": 53,
    "rating": 4.96,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 65,
    "maxRounds": 4,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1043",
    "name": "Decoration Swing",
    "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    "category": "Home Decor",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp"
    ],
    "originalPrice": 4799.2,
    "stock": 47,
    "rating": 3.16,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 4272,
    "maxRounds": 6,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1044",
    "name": "Family Tree Photo Frame",
    "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    "category": "Home Decor",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 77,
    "rating": 4.53,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1696,
    "maxRounds": 4,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1045",
    "name": "House Showpiece Plant",
    "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    "category": "Home Decor",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp"
    ],
    "originalPrice": 3199.2000000000003,
    "stock": 28,
    "rating": 4.67,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2490,
    "maxRounds": 5,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1046",
    "name": "Plant Pot",
    "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "category": "Home Decor",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 59,
    "rating": 3.01,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 911,
    "maxRounds": 6,
    "maxDiscount": 24,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1047",
    "name": "Table Lamp",
    "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "category": "Home Decor",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp"
    ],
    "originalPrice": 3999.2000000000003,
    "stock": 9,
    "rating": 3.55,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 3544,
    "maxRounds": 5,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1048",
    "name": "Bamboo Spatula",
    "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp"
    ],
    "originalPrice": 639.2,
    "stock": 37,
    "rating": 3.27,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 567,
    "maxRounds": 5,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1049",
    "name": "Black Aluminium Cup",
    "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp"
    ],
    "originalPrice": 479.20000000000005,
    "stock": 75,
    "rating": 4.46,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 404,
    "maxRounds": 5,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1050",
    "name": "Black Whisk",
    "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp"
    ],
    "originalPrice": 799.2,
    "stock": 73,
    "rating": 3.9,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 589,
    "maxRounds": 5,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1051",
    "name": "Boxed Blender",
    "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/4.webp"
    ],
    "originalPrice": 3199.2000000000003,
    "stock": 9,
    "rating": 4.56,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2555,
    "maxRounds": 5,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1052",
    "name": "Carbon Steel Wok",
    "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 40,
    "rating": 4.05,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1879,
    "maxRounds": 5,
    "maxDiscount": 21,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1053",
    "name": "Chopping Board",
    "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 14,
    "rating": 3.7,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 875,
    "maxRounds": 6,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1054",
    "name": "Citrus Squeezer Yellow",
    "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp"
    ],
    "originalPrice": 719.2,
    "stock": 22,
    "rating": 4.63,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 624,
    "maxRounds": 4,
    "maxDiscount": 13,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1055",
    "name": "Egg Slicer",
    "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp"
    ],
    "originalPrice": 559.2,
    "stock": 40,
    "rating": 3.09,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 461,
    "maxRounds": 5,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1056",
    "name": "Electric Stove",
    "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/4.webp"
    ],
    "originalPrice": 3999.2000000000003,
    "stock": 21,
    "rating": 4.11,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 3015,
    "maxRounds": 4,
    "maxDiscount": 24,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1057",
    "name": "Fine Mesh Strainer",
    "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp"
    ],
    "originalPrice": 799.2,
    "stock": 85,
    "rating": 3.04,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 642,
    "maxRounds": 6,
    "maxDiscount": 19,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1058",
    "name": "Fork",
    "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp"
    ],
    "originalPrice": 319.20000000000005,
    "stock": 7,
    "rating": 3.11,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 268,
    "maxRounds": 6,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1059",
    "name": "Glass",
    "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp"
    ],
    "originalPrice": 399.20000000000005,
    "stock": 46,
    "rating": 4.02,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 351,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1060",
    "name": "Grater Black",
    "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp"
    ],
    "originalPrice": 879.2,
    "stock": 84,
    "rating": 3.21,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 650,
    "maxRounds": 6,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1061",
    "name": "Hand Blender",
    "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp"
    ],
    "originalPrice": 2799.2000000000003,
    "stock": 84,
    "rating": 3.86,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2328,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1062",
    "name": "Ice Cube Tray",
    "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp"
    ],
    "originalPrice": 479.20000000000005,
    "stock": 13,
    "rating": 4.71,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 403,
    "maxRounds": 5,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1063",
    "name": "Kitchen Sieve",
    "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp"
    ],
    "originalPrice": 639.2,
    "stock": 68,
    "rating": 3.09,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 534,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1064",
    "name": "Knife",
    "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 7,
    "rating": 3.26,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1072,
    "maxRounds": 6,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1065",
    "name": "Lunch Box",
    "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 94,
    "rating": 4.93,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 861,
    "maxRounds": 5,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1066",
    "name": "Microwave Oven",
    "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp"
    ],
    "originalPrice": 7199.2,
    "stock": 59,
    "rating": 4.82,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5288,
    "maxRounds": 6,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1067",
    "name": "Mug Tree Stand",
    "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp"
    ],
    "originalPrice": 1279.2,
    "stock": 88,
    "rating": 2.64,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1077,
    "maxRounds": 5,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1068",
    "name": "Pan",
    "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp"
    ],
    "originalPrice": 1999.1999999999998,
    "stock": 90,
    "rating": 2.79,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1679,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1069",
    "name": "Plate",
    "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp"
    ],
    "originalPrice": 319.20000000000005,
    "stock": 66,
    "rating": 3.65,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 226,
    "maxRounds": 6,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1070",
    "name": "Red Tongs",
    "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp"
    ],
    "originalPrice": 559.2,
    "stock": 82,
    "rating": 4.42,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 498,
    "maxRounds": 5,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1071",
    "name": "Silver Pot With Glass Cap",
    "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp"
    ],
    "originalPrice": 3199.2000000000003,
    "stock": 40,
    "rating": 3.22,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2863,
    "maxRounds": 6,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1072",
    "name": "Slotted Turner",
    "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp"
    ],
    "originalPrice": 719.2,
    "stock": 88,
    "rating": 3.4,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 603,
    "maxRounds": 4,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1073",
    "name": "Spice Rack",
    "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 79,
    "rating": 4.87,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1413,
    "maxRounds": 5,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1074",
    "name": "Spoon",
    "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp"
    ],
    "originalPrice": 399.20000000000005,
    "stock": 59,
    "rating": 4.03,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 315,
    "maxRounds": 6,
    "maxDiscount": 21,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1075",
    "name": "Tray",
    "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp"
    ],
    "originalPrice": 1359.1999999999998,
    "stock": 71,
    "rating": 4.62,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1066,
    "maxRounds": 5,
    "maxDiscount": 21,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1076",
    "name": "Wooden Rolling Pin",
    "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp"
    ],
    "originalPrice": 959.2,
    "stock": 80,
    "rating": 2.92,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 844,
    "maxRounds": 6,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1077",
    "name": "Yellow Peeler",
    "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    "category": "Kitchen",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp"
    ],
    "originalPrice": 479.20000000000005,
    "stock": 35,
    "rating": 4.24,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 346,
    "maxRounds": 5,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1078",
    "name": "Apple MacBook Pro 14 Inch Space Grey",
    "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp"
    ],
    "originalPrice": 159999.2,
    "stock": 24,
    "rating": 3.65,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 139817,
    "maxRounds": 6,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1079",
    "name": "Asus Zenbook Pro Dual Screen Laptop",
    "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    "category": "Electronics",
    "brand": "Asus",
    "image": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp"
    ],
    "originalPrice": 143999.2,
    "stock": 45,
    "rating": 3.95,
    "reviews": 45,
    "seller": "Asus Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 115431,
    "maxRounds": 6,
    "maxDiscount": 19,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1080",
    "name": "Huawei Matebook X Pro",
    "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    "category": "Electronics",
    "brand": "Huawei",
    "image": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp"
    ],
    "originalPrice": 111999.2,
    "stock": 75,
    "rating": 4.98,
    "reviews": 45,
    "seller": "Huawei Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 93715,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1081",
    "name": "Lenovo Yoga 920",
    "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    "category": "Electronics",
    "brand": "Lenovo",
    "image": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp"
    ],
    "originalPrice": 87999.2,
    "stock": 40,
    "rating": 2.86,
    "reviews": 45,
    "seller": "Lenovo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 64606,
    "maxRounds": 5,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1082",
    "name": "New DELL XPS 13 9300 Laptop",
    "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    "category": "Electronics",
    "brand": "Dell",
    "image": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp"
    ],
    "originalPrice": 119999.2,
    "stock": 74,
    "rating": 2.67,
    "reviews": 45,
    "seller": "Dell Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 100837,
    "maxRounds": 6,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1083",
    "name": "Blue & Black Check Shirt",
    "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "category": "Clothing",
    "brand": "Fashion Trends",
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 38,
    "rating": 3.64,
    "reviews": 45,
    "seller": "Fashion Trends Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2102,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1084",
    "name": "Gigabyte Aorus Men Tshirt",
    "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    "category": "Clothing",
    "brand": "Gigabyte",
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp"
    ],
    "originalPrice": 1999.1999999999998,
    "stock": 90,
    "rating": 3.18,
    "reviews": 45,
    "seller": "Gigabyte Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1580,
    "maxRounds": 5,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1085",
    "name": "Man Plaid Shirt",
    "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    "category": "Clothing",
    "brand": "Classic Wear",
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp"
    ],
    "originalPrice": 2799.2000000000003,
    "stock": 82,
    "rating": 3.46,
    "reviews": 45,
    "seller": "Classic Wear Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2028,
    "maxRounds": 6,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1086",
    "name": "Man Short Sleeve Shirt",
    "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    "category": "Clothing",
    "brand": "Casual Comfort",
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 2,
    "rating": 2.9,
    "reviews": 45,
    "seller": "Casual Comfort Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1304,
    "maxRounds": 6,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1087",
    "name": "Men Check Shirt",
    "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    "category": "Clothing",
    "brand": "Urban Chic",
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp"
    ],
    "originalPrice": 2239.2,
    "stock": 95,
    "rating": 2.72,
    "reviews": 45,
    "seller": "Urban Chic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1835,
    "maxRounds": 6,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1088",
    "name": "Nike Air Jordan 1 Red And Black",
    "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "category": "Footwear",
    "brand": "Nike",
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp"
    ],
    "originalPrice": 11999.2,
    "stock": 7,
    "rating": 4.77,
    "reviews": 45,
    "seller": "Nike Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 9424,
    "maxRounds": 5,
    "maxDiscount": 21,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1089",
    "name": "Nike Baseball Cleats",
    "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    "category": "Footwear",
    "brand": "Nike",
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp"
    ],
    "originalPrice": 6399.2,
    "stock": 12,
    "rating": 3.88,
    "reviews": 45,
    "seller": "Nike Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5313,
    "maxRounds": 4,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1090",
    "name": "Puma Future Rider Trainers",
    "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "category": "Footwear",
    "brand": "Puma",
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp"
    ],
    "originalPrice": 7199.2,
    "stock": 90,
    "rating": 4.9,
    "reviews": 45,
    "seller": "Puma Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5081,
    "maxRounds": 5,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1091",
    "name": "Sports Sneakers Off White & Red",
    "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    "category": "Footwear",
    "brand": "Off White",
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp"
    ],
    "originalPrice": 9599.199999999999,
    "stock": 17,
    "rating": 4.77,
    "reviews": 45,
    "seller": "Off White Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 7094,
    "maxRounds": 6,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1092",
    "name": "Sports Sneakers Off White Red",
    "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    "category": "Footwear",
    "brand": "Off White",
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp"
    ],
    "originalPrice": 8799.199999999999,
    "stock": 62,
    "rating": 4.69,
    "reviews": 45,
    "seller": "Off White Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 7251,
    "maxRounds": 4,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1093",
    "name": "Brown Leather Belt Watch",
    "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "category": "Accessories",
    "brand": "Fashion Timepieces",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"
    ],
    "originalPrice": 7199.2,
    "stock": 32,
    "rating": 4.19,
    "reviews": 45,
    "seller": "Fashion Timepieces Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5911,
    "maxRounds": 5,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1094",
    "name": "Longines Master Collection",
    "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    "category": "Accessories",
    "brand": "Longines",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"
    ],
    "originalPrice": 119999.2,
    "stock": 100,
    "rating": 3.87,
    "reviews": 45,
    "seller": "Longines Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 89973,
    "maxRounds": 6,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1095",
    "name": "Rolex Cellini Date Black Dial",
    "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    "category": "Accessories",
    "brand": "Rolex",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"
    ],
    "originalPrice": 719999.2,
    "stock": 40,
    "rating": 4.97,
    "reviews": 45,
    "seller": "Rolex Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 583872,
    "maxRounds": 4,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1096",
    "name": "Rolex Cellini Moonphase",
    "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    "category": "Accessories",
    "brand": "Rolex",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"
    ],
    "originalPrice": 1039999.2,
    "stock": 36,
    "rating": 2.58,
    "reviews": 45,
    "seller": "Rolex Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 930272,
    "maxRounds": 5,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1097",
    "name": "Rolex Datejust",
    "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    "category": "Accessories",
    "brand": "Rolex",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"
    ],
    "originalPrice": 879999.2,
    "stock": 86,
    "rating": 3.66,
    "reviews": 45,
    "seller": "Rolex Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 738872,
    "maxRounds": 4,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1098",
    "name": "Rolex Submariner Watch",
    "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    "category": "Accessories",
    "brand": "Rolex",
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"
    ],
    "originalPrice": 1119999.2,
    "stock": 55,
    "rating": 2.69,
    "reviews": 45,
    "seller": "Rolex Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 892403,
    "maxRounds": 6,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1099",
    "name": "Amazon Echo Plus",
    "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    "category": "Electronics",
    "brand": "Amazon",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp"
    ],
    "originalPrice": 7999.2,
    "stock": 61,
    "rating": 4.99,
    "reviews": 45,
    "seller": "Amazon Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5737,
    "maxRounds": 5,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1100",
    "name": "Apple Airpods",
    "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp"
    ],
    "originalPrice": 10399.2,
    "stock": 67,
    "rating": 4.15,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 7572,
    "maxRounds": 5,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1101",
    "name": "Apple AirPods Max Silver",
    "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
    ],
    "originalPrice": 43999.2,
    "stock": 59,
    "rating": 3.47,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 33529,
    "maxRounds": 4,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1102",
    "name": "Apple Airpower Wireless Charger",
    "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp"
    ],
    "originalPrice": 6399.2,
    "stock": 1,
    "rating": 3.68,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 5199,
    "maxRounds": 4,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1103",
    "name": "Apple HomePod Mini Cosmic Grey",
    "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp"
    ],
    "originalPrice": 7999.2,
    "stock": 27,
    "rating": 4.62,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 7181,
    "maxRounds": 5,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1104",
    "name": "Apple iPhone Charger",
    "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 31,
    "rating": 4.15,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1199,
    "maxRounds": 5,
    "maxDiscount": 25,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1105",
    "name": "Apple MagSafe Battery Pack",
    "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp"
    ],
    "originalPrice": 7999.2,
    "stock": 1,
    "rating": 3.62,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 6446,
    "maxRounds": 6,
    "maxDiscount": 19,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1106",
    "name": "Apple Watch Series 4 Gold",
    "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp"
    ],
    "originalPrice": 27999.2,
    "stock": 33,
    "rating": 2.74,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 19622,
    "maxRounds": 5,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1107",
    "name": "Beats Flex Wireless Earphones",
    "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    "category": "Electronics",
    "brand": "Beats",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp"
    ],
    "originalPrice": 3999.2000000000003,
    "stock": 50,
    "rating": 4.24,
    "reviews": 45,
    "seller": "Beats Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2926,
    "maxRounds": 4,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1108",
    "name": "iPhone 12 Silicone Case with MagSafe Plum",
    "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/4.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 69,
    "rating": 3.62,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1697,
    "maxRounds": 6,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1109",
    "name": "Monopod",
    "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    "category": "Electronics",
    "brand": "TechGear",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 48,
    "rating": 4.43,
    "reviews": 45,
    "seller": "TechGear Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1411,
    "maxRounds": 4,
    "maxDiscount": 11,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1110",
    "name": "Selfie Lamp with iPhone",
    "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    "category": "Electronics",
    "brand": "GadgetMaster",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 58,
    "rating": 3.55,
    "reviews": 45,
    "seller": "GadgetMaster Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 934,
    "maxRounds": 4,
    "maxDiscount": 22,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1111",
    "name": "Selfie Stick Monopod",
    "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    "category": "Electronics",
    "brand": "SnapTech",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 11,
    "rating": 3.88,
    "reviews": 45,
    "seller": "SnapTech Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 911,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1112",
    "name": "TV Studio Camera Pedestal",
    "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    "category": "Electronics",
    "brand": "ProVision",
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp"
    ],
    "originalPrice": 39999.2,
    "stock": 15,
    "rating": 2.78,
    "reviews": 45,
    "seller": "ProVision Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 35180,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1113",
    "name": "Generic Motorcycle",
    "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
    "category": "Travel",
    "brand": "Generic Motors",
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/4.webp"
    ],
    "originalPrice": 319999.19999999995,
    "stock": 34,
    "rating": 4.91,
    "reviews": 45,
    "seller": "Generic Motors Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 279479,
    "maxRounds": 5,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1114",
    "name": "Kawasaki Z800",
    "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    "category": "Travel",
    "brand": "Kawasaki",
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/4.webp"
    ],
    "originalPrice": 719999.2,
    "stock": 52,
    "rating": 3.98,
    "reviews": 45,
    "seller": "Kawasaki Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 631670,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1115",
    "name": "MotoGP CI.H1",
    "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
    "category": "Travel",
    "brand": "MotoGP",
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/4.webp"
    ],
    "originalPrice": 1199999.2,
    "stock": 10,
    "rating": 2.97,
    "reviews": 45,
    "seller": "MotoGP Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 985381,
    "maxRounds": 5,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1116",
    "name": "Scooter Motorcycle",
    "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
    "category": "Travel",
    "brand": "ScootMaster",
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/4.webp"
    ],
    "originalPrice": 239999.19999999998,
    "stock": 84,
    "rating": 2.53,
    "reviews": 45,
    "seller": "ScootMaster Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 189306,
    "maxRounds": 5,
    "maxDiscount": 21,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1117",
    "name": "Sportbike Motorcycle",
    "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    "category": "Travel",
    "brand": "SpeedMaster",
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/4.webp"
    ],
    "originalPrice": 599999.2,
    "stock": 38,
    "rating": 3.94,
    "reviews": 45,
    "seller": "SpeedMaster Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 451528,
    "maxRounds": 5,
    "maxDiscount": 24,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1118",
    "name": "Attitude Super Leaves Hand Soap",
    "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    "category": "Beauty & Personal Care",
    "brand": "Attitude",
    "image": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp"
    ],
    "originalPrice": 719.2,
    "stock": 94,
    "rating": 3.19,
    "reviews": 45,
    "seller": "Attitude Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 626,
    "maxRounds": 4,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1119",
    "name": "Olay Ultra Moisture Shea Butter Body Wash",
    "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    "category": "Beauty & Personal Care",
    "brand": "Olay",
    "image": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 34,
    "rating": 4.51,
    "reviews": 45,
    "seller": "Olay Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 859,
    "maxRounds": 6,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1120",
    "name": "Vaseline Men Body and Face Lotion",
    "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    "category": "Beauty & Personal Care",
    "brand": "Vaseline",
    "image": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp"
    ],
    "originalPrice": 799.2,
    "stock": 95,
    "rating": 3.16,
    "reviews": 45,
    "seller": "Vaseline Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 671,
    "maxRounds": 6,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1121",
    "name": "iPhone 5s",
    "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp"
    ],
    "originalPrice": 15999.2,
    "stock": 25,
    "rating": 2.83,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 13472,
    "maxRounds": 4,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1122",
    "name": "iPhone 6",
    "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 60,
    "rating": 3.41,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 16970,
    "maxRounds": 6,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1123",
    "name": "iPhone 13 Pro",
    "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp"
    ],
    "originalPrice": 87999.2,
    "stock": 56,
    "rating": 4.12,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 67575,
    "maxRounds": 6,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1124",
    "name": "iPhone X",
    "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    "category": "Electronics",
    "brand": "Apple",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp"
    ],
    "originalPrice": 71999.2,
    "stock": 37,
    "rating": 2.51,
    "reviews": 45,
    "seller": "Apple Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 55080,
    "maxRounds": 6,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1125",
    "name": "Oppo A57",
    "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    "category": "Electronics",
    "brand": "Oppo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp"
    ],
    "originalPrice": 19999.2,
    "stock": 19,
    "rating": 3.94,
    "reviews": 45,
    "seller": "Oppo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 15805,
    "maxRounds": 6,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1126",
    "name": "Oppo F19 Pro Plus",
    "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    "category": "Electronics",
    "brand": "Oppo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp"
    ],
    "originalPrice": 31999.2,
    "stock": 78,
    "rating": 3.51,
    "reviews": 45,
    "seller": "Oppo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 22993,
    "maxRounds": 6,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1127",
    "name": "Oppo K1",
    "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    "category": "Electronics",
    "brand": "Oppo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 55,
    "rating": 4.25,
    "reviews": 45,
    "seller": "Oppo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 20954,
    "maxRounds": 5,
    "maxDiscount": 12,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1128",
    "name": "Realme C35",
    "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    "category": "Electronics",
    "brand": "Realme",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp"
    ],
    "originalPrice": 11999.2,
    "stock": 48,
    "rating": 4.2,
    "reviews": 45,
    "seller": "Realme Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 8653,
    "maxRounds": 5,
    "maxDiscount": 27,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1129",
    "name": "Realme X",
    "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    "category": "Electronics",
    "brand": "Realme",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 12,
    "rating": 3.7,
    "reviews": 45,
    "seller": "Realme Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 19139,
    "maxRounds": 6,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1130",
    "name": "Realme XT",
    "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    "category": "Electronics",
    "brand": "Realme",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp"
    ],
    "originalPrice": 27999.2,
    "stock": 80,
    "rating": 4.58,
    "reviews": 45,
    "seller": "Realme Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 25098,
    "maxRounds": 5,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1131",
    "name": "Samsung Galaxy S7",
    "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    "category": "Electronics",
    "brand": "Samsung",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 67,
    "rating": 3.3,
    "reviews": 45,
    "seller": "Samsung Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 21407,
    "maxRounds": 5,
    "maxDiscount": 10,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1132",
    "name": "Samsung Galaxy S8",
    "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    "category": "Electronics",
    "brand": "Samsung",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp"
    ],
    "originalPrice": 39999.2,
    "stock": 93,
    "rating": 4.4,
    "reviews": 45,
    "seller": "Samsung Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 33686,
    "maxRounds": 6,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1133",
    "name": "Samsung Galaxy S10",
    "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    "category": "Electronics",
    "brand": "Samsung",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp"
    ],
    "originalPrice": 55999.2,
    "stock": 19,
    "rating": 3.06,
    "reviews": 45,
    "seller": "Samsung Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 46226,
    "maxRounds": 5,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1134",
    "name": "Vivo S1",
    "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    "category": "Electronics",
    "brand": "Vivo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp"
    ],
    "originalPrice": 19999.2,
    "stock": 50,
    "rating": 3.5,
    "reviews": 45,
    "seller": "Vivo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 16407,
    "maxRounds": 4,
    "maxDiscount": 17,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1135",
    "name": "Vivo V9",
    "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    "category": "Electronics",
    "brand": "Vivo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp"
    ],
    "originalPrice": 23999.2,
    "stock": 82,
    "rating": 3.6,
    "reviews": 45,
    "seller": "Vivo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 18099,
    "maxRounds": 5,
    "maxDiscount": 24,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1136",
    "name": "Vivo X21",
    "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    "category": "Electronics",
    "brand": "Vivo",
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp"
    ],
    "originalPrice": 39999.2,
    "stock": 7,
    "rating": 4.26,
    "reviews": 45,
    "seller": "Vivo Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 33801,
    "maxRounds": 4,
    "maxDiscount": 15,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1137",
    "name": "American Football",
    "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp"
    ],
    "originalPrice": 1599.1999999999998,
    "stock": 53,
    "rating": 4.91,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1331,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1138",
    "name": "Baseball Ball",
    "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp"
    ],
    "originalPrice": 719.2,
    "stock": 100,
    "rating": 2.57,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 601,
    "maxRounds": 6,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1139",
    "name": "Baseball Glove",
    "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp"
    ],
    "originalPrice": 1999.1999999999998,
    "stock": 22,
    "rating": 3.96,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1521,
    "maxRounds": 4,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1140",
    "name": "Basketball",
    "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp"
    ],
    "originalPrice": 1199.2,
    "stock": 75,
    "rating": 4.66,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1005,
    "maxRounds": 5,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1141",
    "name": "Basketball Rim",
    "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp"
    ],
    "originalPrice": 3199.2000000000003,
    "stock": 43,
    "rating": 4.6,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2684,
    "maxRounds": 4,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1142",
    "name": "Cricket Ball",
    "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp"
    ],
    "originalPrice": 1039.2,
    "stock": 30,
    "rating": 3.53,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 871,
    "maxRounds": 6,
    "maxDiscount": 16,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1143",
    "name": "Cricket Bat",
    "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 98,
    "rating": 3.17,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1915,
    "maxRounds": 6,
    "maxDiscount": 20,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1144",
    "name": "Cricket Helmet",
    "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/4.webp"
    ],
    "originalPrice": 3599.2000000000003,
    "stock": 10,
    "rating": 4.69,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2631,
    "maxRounds": 6,
    "maxDiscount": 26,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1145",
    "name": "Cricket Wicket",
    "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 25,
    "rating": 4.73,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1706,
    "maxRounds": 6,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1146",
    "name": "Feather Shuttlecock",
    "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp"
    ],
    "originalPrice": 479.20000000000005,
    "stock": 95,
    "rating": 2.85,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 337,
    "maxRounds": 6,
    "maxDiscount": 29,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1147",
    "name": "Football",
    "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp"
    ],
    "originalPrice": 1439.1999999999998,
    "stock": 96,
    "rating": 3.28,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 1026,
    "maxRounds": 4,
    "maxDiscount": 28,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1148",
    "name": "Golf Ball",
    "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp"
    ],
    "originalPrice": 799.2,
    "stock": 84,
    "rating": 4.3,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 612,
    "maxRounds": 6,
    "maxDiscount": 23,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1149",
    "name": "Iron Golf",
    "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp"
    ],
    "originalPrice": 3999.2000000000003,
    "stock": 90,
    "rating": 4.41,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 3277,
    "maxRounds": 4,
    "maxDiscount": 18,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  },
  {
    "productId": "P1150",
    "name": "Metal Baseball Bat",
    "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    "category": "Travel",
    "brand": "Generic",
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
    "images": [
      "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp"
    ],
    "originalPrice": 2399.2,
    "stock": 16,
    "rating": 4.66,
    "reviews": 45,
    "seller": "Generic Authorized Retailer",
    "negotiationEnabled": true,
    "minimumNegotiationPrice": 2076,
    "maxRounds": 6,
    "maxDiscount": 13,
    "negotiationDuration": 30,
    "specifications": {
      "Condition": "New",
      "Authenticity": "100% Genuine"
    }
  }
];
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

  console.log(`Seeded database with Admin, User, and ${products.length} Products`);
  process.exit(0);
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
