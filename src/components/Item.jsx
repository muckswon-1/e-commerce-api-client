import React from "react";
import imgUrl from "../assets/images/sample-tshirt.png";
import style from "./Item.module.css";

function Item() {
  return (
    <div className={style.item_container}>
      <div className={style.image_container}>
        <img src={imgUrl} alt="item picture" />
      </div>
      <div className={style.price_info}>
        <h3>XL T-Shirt</h3>
        <div>KSH 500</div>
        <button className={style.add_to_cart_btn}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
