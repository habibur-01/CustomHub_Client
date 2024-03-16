import { FaBook, FaRegUserCircle } from "react-icons/fa";
import { FaBookOpenReader, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";

const Profile = () => {
    return (
        <div className="border-2 p-4 rounded-md shadow-md">
            <div className=" py-2 flex flex-row justify-between gap-6 items-center">
                <div>
                    <FaRegUserCircle size={50} />
                </div>
                <div className="space-y-2">
                    <h1 className="text-lg font-medium">Habibur Rahman</h1>
                    <h2>h.r.habibur08@gmail.com</h2>
                    <button className="bg-[#646cff] p-3  font-semibold text-white text-base">Edit profile</button>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-2">
                <div className="inline-flex items- gap-4 md:hidden">
                    <FaHouse />
                    <Link to={"/"}> Home</Link>
                </div>
                <div className="inline-flex items- gap-4 md:hidden">
                    <FaBookOpenReader />
                    <Link to={"/contest"}> Contest</Link>
                </div>
                <div className="inline-flex items- gap-4 md:hidden">
                    <FaBook />
                    <Link to={"/course"}> Course</Link>
                </div>
                <div className="inline-flex items- gap-4">
                    <MdOutlineDashboard />
                    <Link to={"/dashboard"}> Dashboard</Link>
                </div>
            </div>
            <hr className="my-4" />
            <div className="inline-flex items-center">
                <AiOutlineLogout />
                <button className="bg-white">Log out</button>
            </div>
        </div>
    );
};

export default Profile;