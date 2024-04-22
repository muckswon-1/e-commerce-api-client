import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage,{loader as homePageLoader} from './components/HomePage'
import Checkout,{loader as checkoutLoader} from "./components/Checkout";
import Login from "./components/Login";
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    errorElement: <div>To develop error page</div>,
    children: [
    
      
      {
        path:'checkout',
        element: <Checkout />,
        loader: checkoutLoader
      },
      {
        path: 'login',
        element: <Login />

      }
    ]
  }


    
    
  
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
