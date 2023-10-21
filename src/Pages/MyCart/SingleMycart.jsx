import Swal from "sweetalert2";


const SingleMycart = ({data,handleDelete}) => {
 const {_id,productName,image,price,ProductDetails} = data
 





    return (
     <div>
    <div className="relative flex flex-col text-gray-700 bg-white dark:bg-black shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white dark:bg-black  h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 dark:text-white ">
        {productName}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 dark:text-white">
       ${price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal dark:text-white text-gray-700 opacity-75">
     {ProductDetails.slice(0,60)}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#8696a0]"
      type="button"
    >
      Bye Now
    </button>
  </div>
  <div className="p-6 pt-0">
    <button
    onClick={()=>handleDelete(_id)} 
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#8696a0]"
      type="button"
    >
      Delete
    </button>
  </div>
</div>
    </div>
   
    );
};

export default SingleMycart;