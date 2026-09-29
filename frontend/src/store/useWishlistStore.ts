import { create } from 'zustand';
import { api } from '../api/client';

interface WishlistState {
  items: any[];
  isLoading: boolean;
  error: string | null;
  fetchWishlist: () => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,

  fetchWishlist: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await api.get('/wishlist');
      set({ items: data, isLoading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.error || 'Failed to fetch wishlist', isLoading: false });
    }
  },

  addToWishlist: async (productId: string) => {
    // Optimistic update
    const currentItems = get().items;
    
    try {
      const { data } = await api.post(`/wishlist/${productId}`);
      // Replace with full product data from response
      set({ items: [...currentItems.filter(item => item.productId !== productId), data] });
    } catch (err: any) {
      console.error('Failed to add to wishlist', err);
      // Revert if needed (handled implicitly since we didn't inject a fake item)
    }
  },

  removeFromWishlist: async (productId: string) => {
    // Optimistic update
    const currentItems = get().items;
    set({ items: currentItems.filter(item => item.productId !== productId) });
    
    try {
      await api.delete(`/wishlist/${productId}`);
    } catch (err: any) {
      console.error('Failed to remove from wishlist', err);
      // Revert optimistic update
      get().fetchWishlist();
    }
  },

  isInWishlist: (productId: string) => {
    return get().items.some(item => item.productId === productId);
  },

  clearWishlist: () => {
    set({ items: [], error: null });
  }
}));
