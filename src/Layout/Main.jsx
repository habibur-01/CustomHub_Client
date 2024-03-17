import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponent/Navbar/Navbar";
import Footer from "../Components/SharedComponent/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;