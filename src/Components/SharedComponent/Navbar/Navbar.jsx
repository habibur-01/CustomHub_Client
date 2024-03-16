import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../../assets/image/logo.png'
import Container from "../Container/Container";
import { useState } from "react";
import Profile from "../Profile/Profile";

const Navbar = () => {
    const [isProfileView, setIsProfileView] = useState(false)
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
                        <FaUserCircle size={40}/>
                    </div>
                    <div className="absolute right-0 top-12">
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