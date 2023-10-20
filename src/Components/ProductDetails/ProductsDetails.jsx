import { useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const ProductsDetails = () => {
    const loader = useLoaderData()
    console.log(loader)
    

    const HandleAddCard = event =>{
        
        event.preventDefault()
        fetch("  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/addCards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loader),
          })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  Swal.fire(
                    'Added',
                    'Your product has been add my cart.',
                    'success'
                  )
                  
                });
            };
    



    return (
        <div>

<div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={loader.image} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button onClick={HandleAddCard} className="w-full bg-[#8696a0] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-[#8696a0]dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{loader.productName}</h2>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Brand: {loader.brand}</h4>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                        <span className="text-gray-600 dark:text-gray-300">${loader.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
         
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-2xl mt-5">
                       {loader.ProductDetails}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>




        </div>
    );
};

export default ProductsDetails;