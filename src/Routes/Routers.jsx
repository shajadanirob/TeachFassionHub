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
import Error from "../Components/Error/Error";


const router = createBrowserRouter([
    {
      path: '/',
      errorElement:<Error></Error>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() =>  fetch('  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/products')
        },
        {
          path:'/products/:brand',
          errorElement:<Error></Error>,
          element:<ProductsCategory></ProductsCategory>,
          loader:({params})=>fetch(`  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/products/${params.brand}`)

        },
        {
            path:'/addProducts',
            errorElement:<Error></Error>,
            element:<PrivetRoute>
              <AddProducts></AddProducts>
            </PrivetRoute>
        },
       {
        path:'/myCart',
        errorElement:<Error></Error>,
        element: <PrivetRoute>
          <MyCart></MyCart>
        </PrivetRoute>,
        loader: () => fetch('  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/addCard')
       },
       {
        path:'/login',
        errorElement:<Error></Error>,
        element: <Login></Login>
       },
       {
        path:'/register',
        errorElement:<Error></Error>,
        element:<Register></Register>

       },
       {
        path:'/details/:id',
        errorElement:<Error></Error>,
        element: <PrivetRoute>
          <ProductsDetails></ProductsDetails>
        </PrivetRoute>,
        loader: ({params}) => fetch(` https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/product/${params.id}`)
       },
       {
        path:'/update/:id',
        errorElement:<Error></Error>,
        element:<PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
        loader: ({params}) => fetch(`  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/product/${params.id}`)
       }
      ]
    },
  ]);

export default router;