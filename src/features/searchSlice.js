import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  isLoading: true,
  isError: false,
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;
