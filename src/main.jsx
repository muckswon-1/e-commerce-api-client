import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./app/store";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>To develop error page</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "login",
        element: <Login />,
      },

      { path: "checkout", element: <Checkout /> },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
