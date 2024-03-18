import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import Signup from "../Pages/SignUp/Signup";
import AllContest from "../Pages/AllContest/AllContest";
import Courses from "../Pages/Courses/Courses"
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import Payment from "../Pages/Payment/Payment";

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
                path: "/contest/:_id",
                element: <ContestDetails/>
            },
            {
                 path:"/payment",
                 element:<Payment/>
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