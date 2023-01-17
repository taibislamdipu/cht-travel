import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotelSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
