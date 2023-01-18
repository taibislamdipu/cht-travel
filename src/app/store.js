import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotelSlice";
import authSlice from "../features/auth/authSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    auth: authSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
});
