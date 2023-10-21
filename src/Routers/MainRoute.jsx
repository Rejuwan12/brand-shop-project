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
import ProductDetails from "../components/Details/ProductDetails";
import UpdateCard from "../components/UpdateCard/UpdateCard";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
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
            element: <PrivateRoute><MyCart/></PrivateRoute>,
            loader: () => fetch('https://fashion-project-server.vercel.app/cart')
        },
        {
          path: '/brands/:id',
          element:<BrandsCards/>,
          loader: () => fetch('/fashion.json')
        },
        {
          path: '/brand/:id',
          element:<ProductDetails/>,
          loader: ({params}) => 
          fetch(`https://fashion-project-server.vercel.app/products/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<UpdateCard/>,
          loader: ({params}) => 
          fetch(`https://fashion-project-server.vercel.app/products/${params.id}`)
        }

    ]
    },
  ]);

  export default router