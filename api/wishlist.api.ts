/*eslint-disable @typescript-eslint/no-explicit-any */

import api from ".";

// ! add to wishlist
export const addToWishlist = async (id: string) => {
  try {
    const response = await api.post("/wishlist", { product_id: id });
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

//! get wishlist
export const getWishlist = async () => {
  try {
    const response = await api.get("/wishlist");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

// ! remove from wishlist
export const removeFromWishlist = async (id: string) => {
  try {
    const response = await api.delete(`/wishlist/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};