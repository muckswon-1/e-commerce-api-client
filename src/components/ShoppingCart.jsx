import React from "react";
import style from "./ShoppingCart.module.css";
import { ChevronLeft, ChevronRight, Trash } from "react-bootstrap-icons";
import ItemInCart from "./ItemInCart";

function ShoppingCart() {
  return (
    <div className={style.cart_container}>
      <div className={style.cart_header}>
        <button>{<ChevronLeft />}</button>
        <h4>Shopping Cart</h4>
        <button>{<Trash />}</button>
      </div>
      <div className={style.items_in_cart}>
        <ItemInCart />
      </div>
      <div className={style.price_info}>
        <span>Total 2 items</span>
        <span>KSH 200</span>
      </div>
      <a className={style.proceed_checkout} href="#">
        Proceed to checkout {<ChevronRight />}
      </a>
    </div>
  );
}

export default ShoppingCart;
