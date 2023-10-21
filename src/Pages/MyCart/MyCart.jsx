import { useLoaderData } from "react-router-dom";
import SingleMycart from "./SingleMycart";
import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
  const lodedData = useLoaderData()
  const [products ,setProducts] = useState(lodedData)

  const handleDelete = _id =>{
    console.log(_id)
    fetch(`  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/addCard/${_id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    
    .then(data => {
        console.log(data)

        if(data.deletedCount >0){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              setProducts(lodedData.filter(data => data._id !== _id))
             
        }
    } )
}


  console.log(lodedData)
    return (
        <div>
          <h1 className="text-center text-3xl my-8 font-semibold dark:text-white">My Cart Page</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 gap-5">
          {
            products.map(data => <SingleMycart key={data.id} data={data} handleDelete={handleDelete}></SingleMycart>)
          }
          
          </div> 
        </div>
    );
};

export default MyCart;