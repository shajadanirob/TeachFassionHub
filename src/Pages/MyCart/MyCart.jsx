import { useLoaderData } from "react-router-dom";
import SingleMycart from "./SingleMycart";


const MyCart = () => {
  const lodedData = useLoaderData()
  console.log(lodedData)
    return (
        <div>
          <h1 className="text-center text-3xl my-8 font-semibold">My Cart Page</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 gap-5">
          {
            lodedData.map(data => <SingleMycart key={data.id} data={data}></SingleMycart>)
          }
          
          </div> 
        </div>
    );
};

export default MyCart;