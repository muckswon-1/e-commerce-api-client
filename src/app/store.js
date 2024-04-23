import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/items/itemsSlice";
import cartReducer from "./features/shoppingCart/shoppingCartSlice";
import userReducer from "./features/users/userSlice";

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
