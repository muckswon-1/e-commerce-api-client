import React from "react";
import imgUrl from "../assets/images/sample-tshirt.png";
import style from "./Item.module.css";
import { addItemToCart } from "../utils/cart";


function Item({product,setShouldRefetch}) {
 

  const userId = '1c1c4c51-70e7-427f-85eb-700c726c3c0c';
  const productId = product.id;


  return (
    <div  className={style.item_container}>
      <div className={style.image_container}>
        <img src={imgUrl} alt="item picture" />
      </div>
      <div className={style.price_info}>
        <h3>{product.name}</h3>
        <div>KSH {product.unit_price}</div>
        <button onClick={async () => {
          await addItemToCart(userId,productId);
          setShouldRefetch(true);
          }} className={style.add_to_cart_btn}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
