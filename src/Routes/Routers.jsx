import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import ProductsCategory from "../Components/ProductCategory/ProductsCategory";
import ProductsDetails from "../Components/ProductDetails/ProductsDetails";
import UpdateProducts from "../Components/UpdateProducts/UpdateProducts";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


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
            element:<PrivetRoute>
              <AddProducts></AddProducts>
            </PrivetRoute>
        },
       {
        path:'/myCart',
        element: <PrivetRoute>
          <MyCart></MyCart>
        </PrivetRoute>,
        loader: () => fetch('http://localhost:5000/addCard')
       },
       {
        path:'/login',
        element: <Login></Login>
       },
       {
        path:'/register',
        element:<Register></Register>

       },
       {
        path:'/details/:id',
        element: <PrivetRoute>
          <ProductsDetails></ProductsDetails>
        </PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
       },
       {
        path:'/update/:id',
        element:<PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
       }
      ]
    },
  ]);

export default router;