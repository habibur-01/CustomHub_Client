import { NavLink, Outlet, useLocation, } from "react-router-dom";
import Container from "../../Components/SharedComponent/Container/Container";
import cutegirl from "../../assets/image/cute_girl.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";


const Dashboard = () => {
    const location = useLocation()
    const { userData } = useContext(AuthContext)
    console.log(userData)
    const routePath = "/dashboard"
    const role = userData[0]?.role
    console.log(role)


    const isActive = location.pathname === routePath;

    const dashboardNavUser =
        <>
            <li className="text-lg "><NavLink to={"/dashboard/participated"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>My Registered Conteset</NavLink></li>

            <li className="text-lg "><NavLink to={"/dashboard/winning"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>My Winning Contest</NavLink></li>

            <li className="text-lg "><NavLink to={"/dashboard/myprofile"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>My Profile</NavLink></li>
        </>
    const dashboardNavCreator =
        <>
            <li className="text-lg "><NavLink to={"/dashboard/addcontest"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>Add Conteset</NavLink></li>

            <li className="text-lg "><NavLink to={"/dashboard/mycontest"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>My Created Contest</NavLink></li>

            <li className="text-lg "><NavLink to={"/dashboard/submittedcontest"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>Submitted Contest </NavLink></li>
        </>
    const dashboardNavAdmin =
        <>
            <li className="text-lg "><NavLink to={"/dashboard/manageuser"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>Manage User</NavLink></li>

            <li className="text-lg "><NavLink to={"/dashboard/managecontest"} style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#646cff" : "",
                };
            }}>Manage Contest</NavLink></li>

            
        </>

    return (
        <div>
            <Container>
                <h1 className="text-4xl font-bold text-center my-10 bannerText "><span className=" p-2 border-b-4 border-t-4 border-[#9e2cbf]">My Dasboard</span></h1>
                <div className="py-2 border-b-4 border-zinc-400">
                    <ul className="flex flex-row gap-6 p-2">
                        {role=== 'admin' && (dashboardNavAdmin)}
                        {role === 'user' && (dashboardNavUser)}
                        {role === 'creator' && (dashboardNavCreator)}
                    </ul>

                </div>
                {
                    isActive ? <div className="h-[40vh] flex flex-col justify-center items-center">
                        <div className="w-64 h-60 border-4 rounded-md">
                            <img src={cutegirl} className="w-full h-full object-cover overflow-hidden rounded-lg" alt="" />
                        </div>
                        <h1 className="text-2xl font-extralight ">Welcome To Your Dashboard</h1>

                    </div> :
                        <div className=" p-8">
                            <Outlet></Outlet>
                        </div>
                }

            </Container>

        </div>
    );
};

export default Dashboard;