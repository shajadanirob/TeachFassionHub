import { Link } from "react-router-dom";


const SingleProduct = ({data}) => {
    
    const{brand,image,ProductDetails,price,_id} = data 
    return (
        <div>
        
        <div className="card ">
        <div className="flex justify-center items-center">
        <img className="w-[70%]" src={image} alt="" />
        </div>
          <div className="button-grp">


            <div className="my-5">
              <h2 className="text-black text-center font-semibold">{brand}</h2>
              <p className="text-black text-center font-semibold text-xl my-5">{ProductDetails.slice(0,80)}</p>
               
              <p className="text-[#CFAF00]  text-center font-semibold text-xl my-5">${price}</p>
               
            </div>
            <Link to={`/details/${_id}`} className="flex justify-center items-center">
            <button className="btn bg-[#8696a0] text-white text-center">Quick View</button>
            </Link>

            <div className="flex items-center justify-center gap-4 my-2">
                <Link to={`/update/${_id}`}>
<button className="btn">Up</button>
                </Link>
                <div>
                <button className="btn">Dt</button>
                </div>
            </div>


          </div>
        </div>
        </div>
    );
};

export default SingleProduct;