import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import Signup from "../Pages/SignUp/Signup";
import AllContest from "../Pages/AllContest/AllContest";
import Courses from "../Pages/Courses/Courses"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/contest",
                element: <AllContest/>
                
            },
            {
                path:"/course",
                element:<Courses/>
            }
        ]
    },
    {
        path: "/signin",
        element:<Signin/>
    },
    {
        path: "signup",
        element:<Signup/>
    }
])


export default router;