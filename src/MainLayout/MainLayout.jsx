import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto bg-[#FFF]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;