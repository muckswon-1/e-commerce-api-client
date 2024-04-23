import React, { useEffect, useState } from "react";
import style from "./PlaceOrder.module.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../app/features/shoppingCart/shoppingCartSlice";
import { allItemsTotal, itemCount } from "../utils/utils";
import { selectIsAuthenticated } from "../app/features/users/userSlice";
import { Link } from "react-router-dom";
import { selectAllItems } from "../app/features/items/itemsSlice";

function PlaceOrder() {
  const shoppingCartItems = useSelector(selectCartItems);
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const allItems = useSelector(selectAllItems);

  useEffect(() => {
    const numberOfItems = itemCount(shoppingCartItems);
    setNumberOfItemsInCart(numberOfItems);
    const total = allItemsTotal(shoppingCartItems, allItems);
    setCartItemsTotal(total);
  }, [shoppingCartItems]);

  return (
    <div className={style.placeorder_container}>
      {isAuthenticated ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Order Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Items ({numberOfItemsInCart})</td>
                <td>KSH {cartItemsTotal}</td>
              </tr>
              <tr>
                <td>Shipping and handling</td>
                <td>KSH 100</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>KSH 100</td>
              </tr>
              <tr>
                <td>Order total</td>
                <td> KSH 1900</td>
              </tr>
            </tbody>
          </table>
          <button className="address_btn">Place Order</button>
        </>
      ) : (
        <p>
          <Link to="/login">Login</Link> to enjoy shopping
        </p>
      )}
    </div>
  );
}

export default PlaceOrder;
