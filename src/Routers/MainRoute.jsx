import {createBrowserRouter} 
from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BrandsCards from "../components/BrandsCards/BrandsCards";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
       path:'/',
       element: <Home/>,
       loader: () => fetch('/fashion.json')
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
            element: <PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
            path: '/myCart',
            element: <PrivateRoute><MyCart/></PrivateRoute>
        },
        {
          path: '/brands/:id',
          element:<BrandsCards/>,
          loader: () => fetch('/fashion.json')
        }
    ]
    },
  ]);

  export default router