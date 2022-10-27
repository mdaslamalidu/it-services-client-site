import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/CheckOut/Checkout";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import Errorpage from "../components/Errorpage/Errorpage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
            path: "/home",
            element: <Home></Home>
        },
        {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("https://educationnal-server-site.vercel.app/courses")
        },
        {
            path: "/singleCourse/:id",
            element: <Course></Course>,
            loader: ({ params }) => fetch(`https://educationnal-server-site.vercel.app/singleCourse/${params.id}`)
        },
        {
            path: "/checkout/:id",
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({ params }) => fetch(`https://educationnal-server-site.vercel.app/singleCourse/${params.id}`)
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/faq",
            element: <FAQ></FAQ>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        }
    ]
   }
])