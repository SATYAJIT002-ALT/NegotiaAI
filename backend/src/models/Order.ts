import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
  orderId: string;
  buyerId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  negotiationId?: string;
  originalPrice: number;
  negotiatedPrice: number;
  quantity: number;
  finalAmount: number;
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
  orderStatus: 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true, unique: true },
  buyerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  negotiationId: { type: String },
  originalPrice: { type: Number, required: true },
  negotiatedPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  finalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['PENDING', 'PAID', 'FAILED'], default: 'PENDING' },
  orderStatus: { type: String, enum: ['PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'], default: 'PROCESSING' },
}, { timestamps: true });

export const Order = mongoose.model<IOrder>('Order', orderSchema);
