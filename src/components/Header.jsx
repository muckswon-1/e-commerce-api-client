import React from "react";
import { Bell, Cart, Person } from "react-bootstrap-icons";
import style from "./Header.module.css";

function Header() {
  return (
    <div>
      <header className={style.home_header_fixed}>
        <h1>E-Commerce API</h1>
        <nav className={style.home_nav}>
          <ul>
            <li>
              <button className={style.notification_btn}>
                {<Bell />}
                <span>10</span>
              </button>
            </li>
            <li>
              <button className={style.cart_btn}>
                {<Cart />}
                <span>10</span>
              </button>
            </li>
            <li>
              <a className={style.login_btn} href="#">
                Login
              </a>
            </li>
            <li>
              <a className={style.avatar} href="#">
                {<Person />}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
