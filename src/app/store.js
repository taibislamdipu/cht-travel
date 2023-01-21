import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotelSlice";
import authSlice from "../features/auth/authSlice";
import bookingSlice from "../features/bookingSlice";
import cartSlice from "../features/cartSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    auth: authSlice,
    search: searchSlice,
    booking: bookingSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
