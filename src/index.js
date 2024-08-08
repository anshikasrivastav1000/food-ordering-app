import React from "react";
import reactDom from "react-dom/client"
import App from "./App";
import About from './components/About'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurentMenu from "./components/RestaurentMenu";



const appRouter = createBrowserRouter([
    {
        path :'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
           {
            path:'/contact',
            element:<Contact/>
           },
           {
            path:'/restaurent/:resId',
            element:<RestaurentMenu/>
           }
        

        ]
    },
   
])
const reactroot = reactDom.createRoot(document.getElementById('root'));
reactroot.render(<RouterProvider router={appRouter}/>)