import BrandCategory from "../../Components/BrandCategory/BrandCategory";
import Discount from "../../Components/Discount/Discount";
import FreeShiping from "../../Components/FreeShiping/FreeShiping";
import Banner from "../../Components/Header/Banner";
import OurTeam from "../../Components/OurTeam/OurTeam";


const Home = () => {
    return (
        <div className="dark:bg-[#343434]">
           <Banner></Banner>
         <div className="my-5 dark:bg-[#343434] ">
         <BrandCategory></BrandCategory>
           <Discount></Discount>
           <OurTeam></OurTeam>
           <FreeShiping></FreeShiping>
         </div>
        </div>
    );
};

export default Home;