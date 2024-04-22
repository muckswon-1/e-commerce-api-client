import React from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import ShippingAdddressForm from "./ShippingAdddressForm";
import style from './Checkout.module.css';
import MpesaForm from "./MpesaForm";
import PlaceOrder from "./PlaceOrder";
import { getItemsInShoppingCart, itemCount } from "../utils/cart";
import { allItemsTotal } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export async function loader() {
  const numberOfItems = await itemCount();
  const itemsInCart = await getItemsInShoppingCart();
  const itemsTotal = await allItemsTotal(itemsInCart);
  return {numberOfItems,itemsTotal}
}

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className={style.checkout_container}>
      <header className={style.checkout_header}>
        <button onClick={() => navigate(-1)}>{<ChevronLeft />}</button>
        <h3>Check Out</h3>
      </header>
      <PlaceOrder />
    </div>
  );
}

export default Checkout;
