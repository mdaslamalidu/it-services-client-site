import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import Errorpage from "../components/Errorpage/Errorpage";
import Home from "../components/Home/Home";
import SummaryCart from "../components/pages/SummaryCart/SummaryCart";
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
        {
            path: "/category/:id",
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: "/singleCourse/:id",
            element: <Course></Course>,
            loader: ({ params }) => fetch(`http://localhost:5000/singleCourse/${params.id}`)
        }
        
    ]
   }
])