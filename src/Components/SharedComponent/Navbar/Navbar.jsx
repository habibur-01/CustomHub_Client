import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../../assets/image/logo.png'
import Container from "../Container/Container";
import Profile from "../Profile/Profile";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";


const Navbar = () => {
    const [isProfileView, setIsProfileView] = useState(false)
    const {user} = useContext(AuthContext)


    const navlinks = <> 
        <li><NavLink to={"/"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive? "#646cff":"",
            };
        }}>Home</NavLink></li>
        <li><NavLink to={"/contest"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive? "#646cff":"",
            };
        }}>Contest</NavLink></li>
        <li><NavLink to={"/course"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive? "#646cff":"",
            };
        }}>Course</NavLink></li>
        <li><NavLink to={"/signin"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive? "#646cff":"",
            };
        }}>Sign In</NavLink></li>
    </>

    return (
        <Container>
            <div className="w-full h-[100px] z-10 flex justify-between items-center border-b-[1px]">

                <div className="w-[250px] h-[70px]">
                    <img src={logo} alt="logo" className="w-[[80%] h-full object-cover" />
                </div>


                <div className="hidden md:block">
                    <ul className="flex flex-row gap-6 p-2">
                        {navlinks}
                    </ul>
                </div>
                <div className="relative">
                    <div onClick={() => setIsProfileView(!isProfileView)}>
                        {
                            user? <div className="h-14 w-14">
                                 <img src={user?.photoURL} alt="user photo" className="w-full h-full object-cover rounded-full" />
                            </div>:
                            <FaUserCircle size={40}/>
                        }
                    </div>
                    <div className="absolute right-0 top-16 overflow-hidden z-10 bg-white">
                        {
                            isProfileView && <Profile/>
                        }
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Navbar;