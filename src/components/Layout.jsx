import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
  return (
    <>
      <Header />

      <div className="detail">
        <Outlet />
      </div>

      <div>
        <p>&copy; 2024</p>
      </div>
    </>
  );
}

export default Layout;
