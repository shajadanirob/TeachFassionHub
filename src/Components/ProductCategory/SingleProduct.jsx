import { Link } from "react-router-dom";

const SingleProduct = ({data}) => {

    const{productName,brand,image,ProductDetails,price,_id,rating} = data 
    return (
        <div>
        
        <div className="card ">
        <div className="flex justify-center items-center">
        <img className="w-[70%]" src={image} alt="" />
        </div>
          <div className="button-grp">


            <div className="my-5">
              <h2 className="text-black text-center font-semibold">{productName}</h2>
              <p className="text-black text-center font-semibold text-xl my-5">{ProductDetails.slice(0,80)}</p>
               
              <p className="text-[#CFAF00]  text-center font-semibold text-xl my-5">${price}</p>


              <div className="flex justify-center flex-row items-center justify-start gap-2 text-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="32" height="32"
        className="text-[#CFAF00]">
        <path fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"></path>
    </svg>
    <p className="font-bold text-[#CFAF00]">
        <span>{rating} / 5</span>
    </p>
</div>
               
            </div>
            <Link to={`/details/${_id}`} className="flex justify-center items-center">
            <button className="btn bg-[#8696a0] text-white text-center">Quick View</button>
            </Link>

            <div className="flex items-center justify-center gap-4 my-2">
                <Link to={`/update/${_id}`}>
<button className="btn bg-[#8696a0] text-white">UpDate</button>
                </Link>
  
            </div>


          </div>
        </div>
        </div>
    );
};

export default SingleProduct;