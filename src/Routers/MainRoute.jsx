import {createBrowserRouter} 
from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
       path:'/',
       element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/addProduct',
            element: <AddProduct/>
        },
        {
            path: '/myCart',
            element: <MyCart/>
        }
    ]
    },
  ]);

  export default router