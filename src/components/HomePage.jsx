import React, { useState } from "react";
import Item from "./Item";
import style from "./HomePage.module.css";

import ShoppingCart from "./ShoppingCart";
import Header from "./Header";
import Overlay from "./Overlay";

function HomePage() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className={style.home}>
      <Header />

      {/* <div className={style.item_list}> 
           
        {/* </div> */}

      {showOverlay && <Overlay component={ShoppingCart} />}
    </div>
  );
}

export default HomePage;
