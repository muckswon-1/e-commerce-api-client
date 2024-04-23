import React from "react";
import imgUrl from "../assets/images/sample-tshirt.png";
import style from "./Item.module.css";
import { addItemToCart } from "../utils/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserItemToCart,
  fetchCart,
} from "../app/features/shoppingCart/shoppingCartSlice";
import { selectUser } from "../app/features/users/userSlice";
import { useNavigate } from "react-router-dom";

function Item({ product }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const productId = product.id;
  const navigate = useNavigate();

  const addToCartClick = () => {
    if (currentUser) {
      const userId = currentUser.user.id;
      console.log(userId);
      dispatch(addUserItemToCart({ userId, productId }));
    } else {
      alert("You need to be logged in to add tocart");
      navigate("/login");
    }
  };

  return (
    <div className={style.item_container}>
      <div className={style.image_container}>
        <img src={imgUrl} alt="item picture" />
      </div>
      <div className={style.price_info}>
        <h3>{product.name}</h3>
        <div>KSH {product.unit_price}</div>
        <button onClick={addToCartClick} className={style.add_to_cart_btn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
