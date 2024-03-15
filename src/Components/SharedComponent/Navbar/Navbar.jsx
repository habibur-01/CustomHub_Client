import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const navlinks = <>
        <li><NavLink to={"/"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to={"/"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
            };
        }}>Contest</NavLink></li>
        <li><NavLink to={"/"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
            };
        }}>Course</NavLink></li>
        <li><NavLink to={"/"} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
            };
        }}>Sign In</NavLink></li>
    </>

    return (
        <div>
            <div>
                <div>
                    <img src="/logo.png" alt="" />
                </div>
                <h1>Cntest_Hunter</h1>
            </div>
            <div>
                <ul>
                    {navlinks}
                </ul>
            </div>
            <div>
                <div>
                <FaUserCircle />
                </div>
            </div>

        </div>
    );
};

export default Navbar;