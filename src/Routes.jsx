import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components/MainLayout";

import Home from './Components/Home';
import Deshboard from './Components/Deshboard';
import ErrorPage from './Components/ErrorPage';
import Products from "./Components/Products";
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
          
          }

        ]
        
      },
      // product deaatal
      // list book
      {
        path:'/deshboard',
        element:<Deshboard></Deshboard>
      },

    ]
  },
]);

export default router