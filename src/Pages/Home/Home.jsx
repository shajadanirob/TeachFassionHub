import Discount from "../../Components/Discount/Discount";
import FreeShiping from "../../Components/FreeShiping/FreeShiping";
import Banner from "../../Components/Header/Banner";


const Home = () => {
    return (
        <div className="my-5">
           <Banner></Banner>
           <Discount></Discount>
           <FreeShiping></FreeShiping>
        </div>
    );
};

export default Home;