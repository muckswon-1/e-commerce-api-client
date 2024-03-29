import React from "react";
import style from "./ItemDetails.module.css";
import imgUrl from "../assets/images/sample-tshirt.png";
import { XLg } from "react-bootstrap-icons";

function ItemDetails() {
  return (
    <div className={style.item_details_container}>
      <div>
        <div className={style.item_details_header}>
          <h3>XL Men's T-shirt</h3>
          <button className={style.item_details_close_btn}>{<XLg />}</button>
        </div>
        <div className={style.item_details_description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className={style.item_details_img}>
        <img src={imgUrl} alt="details picture" />
      </div>
    </div>
  );
}

export default ItemDetails;
