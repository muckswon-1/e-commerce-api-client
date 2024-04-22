import React, { useEffect, useState } from "react";
import imageUrl from "../assets/images/sample-tshirt.png";
import { Dash, PlusLg, Trash } from "react-bootstrap-icons";
import style from "./ItemInCart.module.css";
import { getProductById, subtotal } from "../utils/utils";
import { addItemToCart, deleteAnEntryInCart, deleteItemFromCart } from "../utils/cart";

function ItemInCart({toggleOverlay,shoppingCartItems,cartEntry,setShouldRefetch}) {
  
  const [productName, setProductName] = useState();
  const [entryTotal, setEntryTotal] = useState(0)
  // get product name
  getProductById(cartEntry.product_id).then(anEntry => {
     setProductName(anEntry.name)
  }).catch(error => {
    console.error('Error fetching product: ',error)
  })

  useEffect(() => {
     subtotal(cartEntry).then(total => setEntryTotal(total));
  },[shoppingCartItems,entryTotal])

 
  return (
    <div className={style.container}>
      <img
        className={style.item_in_cart_img}
        src={imageUrl}
        alt="item in cart"
      />
      <div className={style.h4_btns}>
        <h4> {productName}</h4>
        <div className={style.add_minus_btns}>
          <button onClick={async () => {
            await deleteItemFromCart(cartEntry.user_id, cartEntry.product_id)
             setShouldRefetch(true);
             localStorage.setItem('overlay_state','open');
             
            }}>{<Dash />}</button>
          <span>{cartEntry.quantity}</span>
          <button onClick={ async () => {
            await addItemToCart(cartEntry.user_id, cartEntry.product_id);
            setShouldRefetch(true);
            localStorage.setItem('overlay_state','open');
            
            }}>{<PlusLg />}</button>
          <span>Sub-total {entryTotal} </span>
        </div>
      </div>
      <button onClick={async () => {
        await deleteAnEntryInCart(cartEntry.id);
        setShouldRefetch(true);
        localStorage.setItem('overlay_state','open');
        }}>{<Trash />}</button>
    </div>
  );
}

export default ItemInCart;
