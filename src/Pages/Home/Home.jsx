import Discount from "../../Components/Discount/Discount";
import FreeShiping from "../../Components/FreeShiping/FreeShiping";
import Banner from "../../Components/Header/Banner";
import OurTeam from "../../Components/OurTeam/OurTeam";


const Home = () => {
    return (
        <div className="my-5">
           <Banner></Banner>
           <Discount></Discount>
           <OurTeam></OurTeam>
           <FreeShiping></FreeShiping>
        </div>
    );
};

export default Home;