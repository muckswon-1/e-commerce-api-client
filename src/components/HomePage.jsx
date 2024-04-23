import React, { useEffect, useState } from "react";
import Item from "./Item";
import style from "./HomePage.module.css";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";
import Overlay from "./Overlay";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ItemList from "./ItemList";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllItems,
  selectAllItems,
} from "../app/features/items/itemsSlice";
import { fetchCart } from "../app/features/shoppingCart/shoppingCartSlice";
import { selectUser } from "../app/features/users/userSlice";

function HomePage() {
  const products = useSelector(selectAllItems);
  const dispatch = useDispatch();
  const itemStatus = useSelector((state) => state.items.status);
  const cartItemStatus = useSelector((state) => state.cart.status);
  const currentUser = useSelector(selectUser);
  //const shoppingCartItems = []

  useEffect(() => {
    if (itemStatus === "idle") {
      dispatch(fetchAllItems());
    }
  }, [itemStatus, dispatch]);

  // useEffect(() => {
  //   if(cartItemStatus === 'idle'){
  //     dispatch(fetchCart())
  //     dispatch(cartItemsCount());
  //   }
  // });

  return (
    <div className={style.home}>
      <ItemList products={products} />
      {/*showOverlay && <Overlay component={ShoppingCart} componentProps={{toggleOverlay: toggleOverlay, shoppingCartItems: shoppingCartItems, setShouldRefetch: setShouldRefetch}} />*/}
    </div>
  );
}

export default HomePage;
