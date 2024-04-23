import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import ShippingAdddressForm from "./ShippingAdddressForm";
import style from "./Checkout.module.css";
import MpesaForm from "./MpesaForm";
import PlaceOrder from "./PlaceOrder";
import { getItemsInShoppingCart } from "../utils/cart/cart";
import { allItemsTotal, itemCount } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../app/features/shoppingCart/shoppingCartSlice";

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
