import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../components/Errorpage/Errorpage";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
   {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/courses")
        },
        {
            path: "/home",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/courses")
        },
        
    ]
   }
])