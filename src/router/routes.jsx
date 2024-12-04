import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import SignUp from "../components/SignUp";
import AllProducts from "../pages/AllProducts";
import UpdateProducts from "../pages/UpdateProducts";
import ShowProduct from "../pages/ShowProduct";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [

            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path:'allProducts',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: 'addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'showProduct/:id',
                element: <ShowProduct></ShowProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
        ]

    }
])

export default routes;