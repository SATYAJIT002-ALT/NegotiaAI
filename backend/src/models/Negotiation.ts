import mongoose, { Document, Schema } from 'mongoose';

export interface INegotiationMessage {
  sender: 'BUYER' | 'SELLER' | 'BUYER_AGENT' | 'SYSTEM';
  text: string;
  proposedPrice?: number;
  createdAt?: Date;
}

export interface INegotiation extends Document {
  negotiationId: string;
  buyerId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  mode: 'MANUAL' | 'AUTO';
  originalPrice: number;
  targetPrice?: number;
  maxBudget?: number;
  status: 'ACTIVE' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'FAILED';
  rounds: number;
  maxRounds: number;
  expiresAt: Date;
  negotiatedPrice?: number;
  lastSellerOffer?: number;
  messages: INegotiationMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<INegotiationMessage>({
  sender: { type: String, enum: ['BUYER', 'SELLER', 'BUYER_AGENT', 'SYSTEM'], required: true },
  text: { type: String, required: true },
  proposedPrice: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const negotiationSchema = new Schema<INegotiation>({
  negotiationId: { type: String, required: true, unique: true },
  buyerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  mode: { type: String, enum: ['MANUAL', 'AUTO'], default: 'MANUAL' },
  originalPrice: { type: Number, required: true },
  targetPrice: { type: Number },
  maxBudget: { type: Number },
  status: { type: String, enum: ['ACTIVE', 'ACCEPTED', 'REJECTED', 'EXPIRED', 'FAILED'], default: 'ACTIVE' },
  rounds: { type: Number, default: 0 },
  maxRounds: { type: Number, required: true },
  expiresAt: { type: Date, required: true },
  negotiatedPrice: { type: Number },
  lastSellerOffer: { type: Number },
  messages: [messageSchema]
}, { timestamps: true });

export const Negotiation = mongoose.model<INegotiation>('Negotiation', negotiationSchema);
