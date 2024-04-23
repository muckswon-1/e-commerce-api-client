import React, { useEffect, useState } from "react";
import imageUrl from "../assets/images/sample-tshirt.png";
import { Dash, PlusLg, Trash } from "react-bootstrap-icons";
import style from "./ItemInCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserItemToCart,
  deleteEntryFromCart,
  fetchCart,
  reduceItemCountByOne,
  selectCartItems,
} from "../app/features/shoppingCart/shoppingCartSlice";
import { getProductById } from "../utils/items/items";
import { subtotal } from "../utils/utils";
import { selectAllItems } from "../app/features/items/itemsSlice";

function ItemInCart({ cartEntry }) {
  const shoppingCartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const userId = cartEntry.user_id;
  const productId = cartEntry.product_id;
  const [productName, setProductName] = useState();
  const [entryTotal, setEntryTotal] = useState(0);
  const allItems = useSelector(selectAllItems);
  // get product name
  // getProductById(cartEntry.product_id).then(anEntry => {
  //    setProductName(anEntry.name)
  // }).catch(error => {
  //   console.error('Error fetching product: ',error)
  // })

  // useEffect(() => {
  //    subtotal(cartEntry).then(total => setEntryTotal(total));
  // },[shoppingCartItems,dispatch])

  useEffect(() => {
    if (allItems) {
      try {
        const total = subtotal(cartEntry, allItems);
        console.log(total);
        setEntryTotal(total);
      } catch (error) {
        console.error(error);
      }
    }
  }, [shoppingCartItems]);

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
          <button
            onClick={async () => {
              dispatch(reduceItemCountByOne({ userId, productId }));
            }}
          >
            {<Dash />}
          </button>
          <span>{cartEntry.quantity}</span>
          <button
            onClick={async () => {
              dispatch(addUserItemToCart({ userId, productId }));
            }}
          >
            {<PlusLg />}
          </button>
          <span>Sub-total {entryTotal} </span>
        </div>
      </div>
      <button
        onClick={async () => {
          dispatch(deleteEntryFromCart({ cartId: cartEntry.id, userId }));
        }}
      >
        {<Trash />}
      </button>
    </div>
  );
}

export default ItemInCart;
