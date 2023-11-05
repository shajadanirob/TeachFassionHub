import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="  dark:bg-[#343434]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="  dark:bg-[#343434]">
            <Footer></Footer>
            </div>
            <Toaster/>
        </div>
      
    );
};

export default MainLayout;