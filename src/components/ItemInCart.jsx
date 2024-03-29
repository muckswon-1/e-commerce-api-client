import React from "react";
import imageUrl from "../assets/images/sample-tshirt.png";
import { Dash, PlusLg, Trash } from "react-bootstrap-icons";
import style from "./ItemInCart.module.css";

function ItemInCart() {
  return (
    <div className={style.container}>
      <img
        className={style.item_in_cart_img}
        src={imageUrl}
        alt="item in cart"
      />
      <div className={style.h4_btns}>
        <h4> XL T-Shirt</h4>
        <div className={style.add_minus_btns}>
          <button>{<Dash />}</button>
          <span>1</span>
          <button>{<PlusLg />}</button>
        </div>
      </div>
      <button>{<Trash />}</button>
    </div>
  );
}

export default ItemInCart;
