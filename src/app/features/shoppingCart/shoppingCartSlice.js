import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  deleteAnEntryInCart,
  deleteItemFromCart,
  getItemsInShoppingCart,
} from "../../../utils/cart/cart";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId }) => {
    const cart = await getItemsInShoppingCart(userId);
    return cart;
  },
);

export const addUserItemToCart = createAsyncThunk(
  "cart/addUserItemToCart",
  async ({ userId, productId }) => {
    console.log(userId);
    console.log(productId);
    const cart = await addItemToCart(userId, productId);
    console.log(cart);
    return cart;
  },
);

export const reduceItemCountByOne = createAsyncThunk(
  "cart/reduceItemCountByOne",
  async ({ userId, productId }) => {
    const cart = await deleteItemFromCart(userId, productId);
    return cart;
  },
);

export const deleteEntryFromCart = createAsyncThunk(
  "/cart/deleteEntry",
  async ({ cartId, userId }) => {
    const cart = await deleteAnEntryInCart(cartId, userId);
    return cart;
  },
);

// export const cartItemsCount = createAsyncThunk('/cart/cartItemsCount', async () => {
//     const count = await itemCount();
//     return count;
// })

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: "idle",
    count: 0,
    error: null,
  },
  extraReducers(builder) {
    builder

      // fetch all cart items
      .addCase(fetchCart.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const newState = action.payload;
        if (newState) {
          state.cart = newState;
        }
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //add to cart
      .addCase(addUserItemToCart.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addUserItemToCart.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const newState = action.payload;
        console.log(newState);
        if (newState) {
          state.cart = newState;
        }
      })
      .addCase(addUserItemToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //reduce item count by one

      .addCase(reduceItemCountByOne.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(reduceItemCountByOne.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const newState = action.payload;
        if (newState) {
          state.cart = newState;
        }
      })
      .addCase(reduceItemCountByOne.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //delete an entry from cart
      .addCase(deleteEntryFromCart.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteEntryFromCart.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const newState = action.payload;
        if (newState) {
          state.cart = newState;
        }
      })
      .addCase(deleteEntryFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    //item count
    // .addCase(cartItemsCount.pending,(state, action) => {
    //     state.status = 'pending'
    // })
    // .addCase(cartItemsCount.fulfilled,(state,action) => {
    //     state.status = 'fulfilled'
    //     const result = action.payload;
    //     if(result){
    //         state.count = action.payload;
    //         state.error = null;
    //     }
    // })
    // .addCase(cartItemsCount.rejected,(state,action) => {
    //     state.status = 'failed'
    //     state.error = action.error.message
    // })
  },
});

export const selectCartItems = (state) => state.cart.cart;
export const selectCartStatus = (state) => state.cart.status;
export const selectItemCount = (state) => state.cart.count;

export default shoppingCartSlice.reducer;
