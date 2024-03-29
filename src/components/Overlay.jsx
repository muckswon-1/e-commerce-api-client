import React from "react";
import style from "./Overlay.module.css";

function Overlay({ component }) {
  const ShowComponent = component;
  return (
    <div className={style.overlay}>
      <div className={style.overlay_content}>
        <ShowComponent />
      </div>
    </div>
  );
}

export default Overlay;
