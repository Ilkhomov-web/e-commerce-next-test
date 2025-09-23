import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.products.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.products.find((item) => item.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.products.find((item) => item.id === id);

      if (existing) {
        existing.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += existing.price;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.products.find((item) => item.id === id);

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= existing.price;
      } else if (existing && existing.quantity === 1) {
        // agar quantity = 1 bo‘lsa, mahsulotni umuman o‘chiramiz
        state.totalQuantity -= 1;
        state.totalAmount -= existing.price;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
