import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
  error: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBookingDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addBookingDetails } = bookingSlice.actions;

export default bookingSlice.reducer;
