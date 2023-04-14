import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Ecommerce  from "./e-commerce";
import Login from './login';
import Register from "./registration";


const ReactRouter = () =>{


    const router = createBrowserRouter([
        {
            path:"/",
            element:<Ecommerce/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path: "/registration",
            element: <Register/>,
        },
    ]);

    return <RouterProvider router= {router}/>
}

export default ReactRouter;