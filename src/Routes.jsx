import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components/MainLayout";

import Home from './Components/Home';
import Deshboard from './Components/Deshboard';
import ErrorPage from './Components/ErrorPage';
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import ChildError from "./Components/ChildError";
import Addcard from "./Components/Addcard";
import Wishlist from "./Components/Wishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        loader: ()=> fetch('../category.json'),
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<Products></Products>,
            loader: ()=> fetch('../products.json')
          
          },
         
          {
            path:'/category/:category',
            element:<Products></Products>,
            loader: ()=> fetch('../products.json')
          
          },
          {
            path:'/category/:Power Banks',
            element:<ChildError></ChildError>
          }



        ]
        
      },
      // product deaatal
      {
        path:'/products/:productId',
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch('/products.json')

      },
      // list book
      {
        path:'/deshboard',
        element:<Deshboard></Deshboard>,
        children:[
          {
            path:'/deshboard',
            element:<Addcard></Addcard>
          },
          {
            path:'/deshboard/addtocard',
            element:<Addcard></Addcard>
          },
          {
            path:'/deshboard/wishlist',
            element:<Wishlist></Wishlist>
          }
        ]
      },

    ]
  },
]);

export default router