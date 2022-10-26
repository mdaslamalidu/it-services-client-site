import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/CheckOut/Checkout";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import Errorpage from "../components/Errorpage/Errorpage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
   {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:5000/courses")
        },
        {
            path: "/singleCourse/:id",
            element: <Course></Course>,
            loader: ({ params }) => fetch(`http://localhost:5000/singleCourse/${params.id}`)
        },
        {
            path: "/checkout",
            element: <Checkout></Checkout>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
        
    ]
   }
])