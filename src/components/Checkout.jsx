import React from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import ShippingAdddressForm from "./ShippingAdddressForm";
import style from './Checkout.module.css';
import MpesaForm from "./MpesaForm";
import PlaceOrder from "./PlaceOrder";

function Checkout() {
  return (
    <div className={style.checkout_container}>
      <header className={style.checkout_header}>
        <button>{<ChevronLeft />}</button>
        <h3>Check Out</h3>
      </header>
      <PlaceOrder />
    </div>
  );
}

export default Checkout;
