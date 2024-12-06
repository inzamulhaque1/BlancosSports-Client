import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import SignUp from "../components/SignUp";
import AllProducts from "../pages/AllProducts";
import UpdateProducts from "../pages/UpdateProducts";
import ShowProduct from "../pages/ShowProduct";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import MyProducts from "../pages/MyProducts";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [

            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment10-server-khaki.vercel.app/product')
            },
            {
                path:'allProducts',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('https://assignment10-server-khaki.vercel.app/product')
            },
            {
                path: 'addProduct',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: 'myproduct',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: 'updateProduct/:id',
                element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-khaki.vercel.app/product/${params.id}`)
            },
            {
                path: 'showProduct/:id',
                element: <PrivateRoute><ShowProduct></ShowProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-khaki.vercel.app/product/${params.id}`)
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]

    }
])

export default routes;