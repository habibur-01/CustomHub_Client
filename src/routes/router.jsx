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
import Dashboard from "../Pages/Dashboard/Dashboard";
import Participated from "../Pages/Dashboard/Participated/Participated";
import PrivateRoute from "../Components/SharedComponent/PrivateRoute"
import WinningContest from "../Pages/Dashboard/WinningContest/WinningContest";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddContest from "../Pages/Dashboard/Creator/AddContest";
import MyCreation from "../Pages/Dashboard/Creator/MyCreation";
import UpdateContest from "../Pages/Dashboard/Creator/UpdateContest";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageContest from "../Pages/Dashboard/Admin/ManageContest";
import SubmittedContest from "../Pages/Dashboard/Creator/SubmittedContest";
import SearchData from "../Components/Banner/SearchData/SearchData";

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
                element: <PrivateRoute><ContestDetails/></PrivateRoute>
            },
            {
                 path:"/payment",
                 element:<PrivateRoute><Payment/></PrivateRoute>
            },
            {
                path:"/dashboard",
                element:<PrivateRoute><Dashboard/></PrivateRoute>,
                children:[
                   {
                    path:"/dashboard/participated",
                    element: <PrivateRoute><Participated/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/winning",
                    element: <PrivateRoute><WinningContest/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/myprofile",
                    element: <PrivateRoute><MyProfile/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/addcontest",
                    element: <PrivateRoute><AddContest/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/mycontest",
                    element: <PrivateRoute><MyCreation/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/mycontest/:_id",
                    element: <PrivateRoute><UpdateContest/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/submittedcontest",
                    element: <PrivateRoute><SubmittedContest/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/manageuser",
                    element: <PrivateRoute><ManageUsers/></PrivateRoute>
                   },
                   {
                    path:"/dashboard/managecontest",
                    element: <PrivateRoute><ManageContest/></PrivateRoute>
                   },
                ]
            },
            {
                path:"/course",
                element:<Courses/>
            },
            {
                path: "/searchData",
                element: <SearchData/>
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