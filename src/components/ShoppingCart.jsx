import React, { useEffect, useState } from "react";
import style from "./ShoppingCart.module.css";
import { ChevronLeft, ChevronRight, Trash } from "react-bootstrap-icons";
import ItemInCart from "./ItemInCart";
import { allItemsTotal } from "../utils/utils";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";

 function ShoppingCart ({toggleOverlay, shoppingCartItems,setShouldRefetch}) {
  let [allEntriesTotal, setAllEntriesTotal] = useState();
  const {numberOfItems} = useLoaderData();
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    allItemsTotal(shoppingCartItems).then(total => setAllEntriesTotal(total));
  },[shoppingCartItems]);

  
  return (
    <div className={style.cart_container}>
      <div className={style.cart_header}>
        <button onClick={() => {
          toggleOverlay();
          }}>{<ChevronLeft />}</button>
        <h4>Shopping Cart</h4>
      </div>
      <div className={style.items_in_cart}>
        {
          shoppingCartItems !== undefined  ? (
            shoppingCartItems.length !== 0 ? (
               shoppingCartItems.map((cartEntry) =>  {
                
                return   <ItemInCart key={cartEntry.id}  cartEntry={cartEntry} shoppingCartItems={shoppingCartItems} setShouldRefetch={setShouldRefetch}/>
              })
            ): (<p><i>No items in cart</i></p>)
          ):(<p><i>Shopping cart will be updated shortly</i></p>)
        }
      </div>
      {shoppingCartItems && shoppingCartItems.length > 0 && (
         <div className={style.price_info}>
         <span>{numberOfItems} item(s) in  cart</span>
         <span>Total  KSH {allEntriesTotal}</span>
        </div> 
      )}
     
     {
      shoppingCartItems.length > 0  && ( <button onClick={() => {
        toggleOverlay();
         isAuthenticated? navigate('/checkout'): navigate('/login');
      }} className={style.proceed_checkout} >
        Proceed to checkout {<ChevronRight />}
      </button>)
     }
    </div>
  );
}

export default ShoppingCart;
