import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import ProductsCategory from "../Components/ProductCategory/ProductsCategory";
import ProductsDetails from "../Components/ProductDetails/ProductsDetails";
import UpdateProducts from "../Components/UpdateProducts/UpdateProducts";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() =>  fetch('http://localhost:5000/products')
        },
        {
          path:'/products/:brand',
          element:<ProductsCategory></ProductsCategory>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}`)

        },
        {
            path:'/addProducts',
            element:<AddProducts></AddProducts>
        },
       {
        path:'/myCart',
        element: <MyCart></MyCart>
       },
       {
        path:'/login',
        element: <Login></Login>
       },
       {
        path:'/details/:id',
        element: <ProductsDetails></ProductsDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
       },
       {
        path:'/update/:id',
        element:<UpdateProducts></UpdateProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
       }
      ]
    },
  ]);

export default router;