import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../utils/items/items";

export const fetchAllItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await getAllProducts();
  return response;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newState = action.payload;
        if (newState) {
          state.items = newState;
        }
      })
      .addCase(fetchAllItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllItems = (state) => state.items.items;

export default itemsSlice.reducer;
