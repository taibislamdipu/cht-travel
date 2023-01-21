import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: true,
  isError: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
