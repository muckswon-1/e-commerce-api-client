import React from "react";
import style from "./Overlay.module.css";

function Overlay({ component: Component, componentProps }) {
  
  return (
    <div className={style.overlay}>
      <div className={style.overlay_content}>
        <Component {...componentProps} />
      </div>
    </div>
  );
}

export default Overlay;
