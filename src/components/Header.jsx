import React, { useEffect, useState } from "react";
import { Bell, Cart, Person } from "react-bootstrap-icons";
import style from "./Header.module.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllItems } from "../app/features/items/itemsSlice";
import {
  selectIsAuthenticated,
  selectUser,
  userLogout,
} from "../app/features/users/userSlice";
import {
  fetchCart,
  selectCartItems,
  selectCartStatus,
  selectItemCount,
} from "../app/features/shoppingCart/shoppingCartSlice";
import { itemCount } from "../utils/utils";

function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const shoppingCartItems = useSelector(selectCartItems);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    if (shoppingCartItems) {
      const numberOfItems = itemCount(shoppingCartItems);
      setCartItemsCount(numberOfItems);
    }
  }, [cartItemsCount, shoppingCartItems]);

  return (
    <div>
      <header className={style.home_header_fixed}>
        <Link to="/" className={style.header_link}>
          <h1>E-Commerce API</h1>
        </Link>
        <nav className={style.home_nav}>
          <ul>
            <li>
              <button className={style.notification_btn}>
                {<Bell />}
                <span>0</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/shopping-cart");
                }}
                className={style.cart_btn}
              >
                {<Cart />}
                <span>{cartItemsCount}</span>
              </button>
            </li>
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    dispatch(userLogout());
                    navigate({ state: { from: location } });
                  }}
                  className={style.logout_btn}
                >
                  Logout
                </button>
              ) : (
                <Link className={style.login_btn} to="login">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isAuthenticated && (
                <Link
                  to={`/profile/${currentUser.user.id}`}
                  className={style.avatar}
                >
                  {<Person />}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
