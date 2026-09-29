import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  images: string[];
  originalPrice: number;
  stock: number;
  rating: number;
  reviews: number;
  seller: string;
  negotiationEnabled: boolean;
  minimumNegotiationPrice: number;
  maxRounds: number;
  maxDiscount: number;
  negotiationDuration: number;
  specifications: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, default: 'Generic' },
  image: { type: String, required: true },
  images: { type: [String], default: [] },
  originalPrice: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  seller: { type: String, required: true },
  negotiationEnabled: { type: Boolean, default: true },
  minimumNegotiationPrice: { type: Number, required: true },
  maxRounds: { type: Number, default: 5 },
  maxDiscount: { type: Number, default: 24 },
  negotiationDuration: { type: Number, default: 30 },
  specifications: { type: Map, of: String, default: {} },
}, { timestamps: true });

export const Product = mongoose.model<IProduct>('Product', productSchema);
