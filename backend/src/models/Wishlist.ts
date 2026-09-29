import mongoose, { Document, Schema } from 'mongoose';

export interface IWishlist extends Document {
  userId: string;
  productId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const wishlistSchema = new Schema<IWishlist>({
  userId: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
}, { timestamps: true });

// Prevent duplicate wishlist items for a user
wishlistSchema.index({ userId: 1, productId: 1 }, { unique: true });

export const Wishlist = mongoose.model<IWishlist>('Wishlist', wishlistSchema);
