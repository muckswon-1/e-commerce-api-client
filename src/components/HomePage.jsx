import React, { useEffect, useState } from "react";
import Item from "./Item";
import style from "./HomePage.module.css";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";
import Overlay from "./Overlay";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllProducts} from "../utils/utils";
import { getItemsInShoppingCart, itemCount } from "../utils/cart";

export async function loader(){
  const products = await getAllProducts();
  const shoppingCartItems = await getItemsInShoppingCart();
  const numberOfItems = await  itemCount();
  return {products, shoppingCartItems, numberOfItems}
}



function HomePage() {
  
 
  const {products} = useLoaderData();
  const {shoppingCartItems} = useLoaderData();




  return (
    <div className={style.home}>
      <ItemList products={products} setShouldRefetch={setShouldRefetch} />
      {showOverlay && <Overlay component={ShoppingCart} componentProps={{toggleOverlay: toggleOverlay, shoppingCartItems: shoppingCartItems, setShouldRefetch: setShouldRefetch}} />}
    </div>
  );
}

export default HomePage;
