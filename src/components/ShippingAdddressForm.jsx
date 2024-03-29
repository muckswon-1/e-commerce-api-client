import React from "react";
import style from "./ShippingAddressForm.module.css";
import { ChevronRight } from "react-bootstrap-icons";

function ShippingAdddressForm() {
  return (
  
     <form className='address_form'>
        <h5>Shipping Address</h5>
      <div className='label_div'>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstame" id="firstname" required />
      </div>

      <div className='label_div'>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="firstame" id="lastname" required />
      </div>

      <div className='label_div'>
        <label htmlFor="city">City/Town</label>
        <input type="text" name="city" id="city" />
      </div>

      <div className='label_div'>
        <label htmlFor="city">Place name</label>
        <input type="text" name="placename" id="placename" />
      </div>

      <div className='address_btns'>
        <button className='address_btn'>Save this Address</button>
        <button className='style.address_btn'>
          Next <span>{<ChevronRight />}</span>
        </button>
      </div>
    </form>
   
  );
}

export default ShippingAdddressForm;
