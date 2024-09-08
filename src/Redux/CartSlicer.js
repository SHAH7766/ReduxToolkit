import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  quantity: 0,
};
const cartReducer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const FindIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (FindIndex >= 0) {
        state.Cart[FindIndex].quantity += 1;
      } else {
        state.Cart.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveCart: (state, action) => {
      state.Cart = state.Cart.filter((x) => x.id !== action.payload.id);
    },
    IncrementQuantity: (state, action) => {
      const FindIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (FindIndex >= 0) {
        state.Cart[FindIndex].quantity += 1;
      }
    },
    DecrementQuantity: (state, action) => {
      const FindIndex = state.Cart.findIndex((x) => x.id === action.payload.id);
      if (FindIndex >= 0) {
        if (state.Cart[FindIndex].quantity > 1)
          state.Cart[FindIndex].quantity -= 1;
      }
    },
    getCartTotal: (state) => {
        const { totalPrice, totalQuantity } = state.Cart.reduce(
          (CartTotal, CartItem) => {
            const { price, quantity } = CartItem;
            CartTotal.totalPrice += price * quantity;
            CartTotal.totalQuantity += quantity;
            return CartTotal;
          },
          { totalPrice: 0, totalQuantity: 0 }
        );
      
        // Format totalPrice to two decimal places and update the state
        state.totalPrice = totalPrice.toFixed(2);
      
        // Update totalQuantity in the state
        state.totalQuantity = totalQuantity;
      }
      
  },
});
export const { AddToCart, RemoveCart,IncrementQuantity,DecrementQuantity,getCartTotal } = cartReducer.actions;
export default cartReducer.reducer;