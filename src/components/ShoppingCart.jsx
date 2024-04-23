import React, { useEffect, useState } from "react";
import style from "./ShoppingCart.module.css";
import { ChevronLeft, ChevronRight, Trash } from "react-bootstrap-icons";
import ItemInCart from "./ItemInCart";
import { allItemsTotal, itemCount } from "../utils/utils";
import {
  Link,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  selectCartItems,
} from "../app/features/shoppingCart/shoppingCartSlice";
import {
  selectIsAuthenticated,
  selectUser,
} from "../app/features/users/userSlice";
import { selectAllItems } from "../app/features/items/itemsSlice";

function ShoppingCart() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const shoppingCartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const allItems = useSelector(selectAllItems);

  useEffect(() => {
    if (isAuthenticated) {
      const userId = currentUser.user.id;
      dispatch(fetchCart({ userId }));

      const total = allItemsTotal(shoppingCartItems, allItems);
      if (total) {
        setTotalCost(total);
      }
    }
  }, [isAuthenticated, dispatch, numberOfItems]);

  useEffect(() => {
    const countItems = itemCount(shoppingCartItems);
    setNumberOfItems(countItems);
  }, [shoppingCartItems]);

  return (
    <div className={style.cart_container}>
      <div className={style.cart_header}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {<ChevronLeft />} Back
        </button>
        <h4>Shopping Cart</h4>
      </div>
      {isAuthenticated ? (
        <div className={style.items_in_cart}>
          {shoppingCartItems !== undefined ? (
            shoppingCartItems.length !== 0 ? (
              shoppingCartItems.map((cartEntry) => {
                return <ItemInCart key={cartEntry.id} cartEntry={cartEntry} />;
              })
            ) : (
              <p>
                <i>No items in cart</i>
              </p>
            )
          ) : (
            <p>
              <i>Shopping cart will be updated shortly</i>
            </p>
          )}
        </div>
      ) : (
        <p>
          <button
            className={style.link_btn}
            onClick={() => navigate("/login", { state: { from: location } })}
          >
            Login
          </button>
          to view your cart
        </p>
      )}
      {shoppingCartItems && shoppingCartItems.length > 0 && (
        <div className={style.price_info}>
          <span>{numberOfItems} item(s) in cart</span>
          <span>Total KSH {totalCost}</span>
        </div>
      )}

      {shoppingCartItems.length > 0 && (
        <button
          onClick={() => {
            isAuthenticated
              ? navigate("/checkout")
              : navigate("/login", { state: { from: location } });
          }}
          className={style.proceed_checkout}
        >
          Proceed to checkout {<ChevronRight />}
        </button>
      )}
    </div>
  );
}

export default ShoppingCart;
