import { Link, useLoaderData } from "react-router-dom";


const BrandCategory = () => {

  const lodarData = useLoaderData()

console.log(lodarData)






    return (
       <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 ">


<h1 className="text-3xl sm:text-4xl text-center my-5 leading-normal font-extrabold tracking-tight text-[#1a1c28]">Our Brand</h1>
        
<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
 

  <Link to={`/products/${lodarData.brand}`}  className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/ThXqnGQ/pexels-obi-onyeador-13080838.jpg" alt="Metal Planters" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Samsung
    </p>
  </Link>


  <Link to={`/products/${lodarData.brand}`}  className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/1nZyKjk/pexels-armand-valendez-544295.jpg" alt="Table Top Planters" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Apple
    </p>
  </Link>


  <Link to={`/products/${lodarData.brand}`}  className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/R0hKYS8/Lenovo-Cover.webp" alt="Wall Mounted Stands" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Lenovo
    </p>
  </Link>


  <Link to={`/products/${lodarData.brand}`} className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/gTgWBfj/HD-wallpaper-asus-carbon-logo-grunge-art-carbon-background-creative-asus-black-logo-asus-logo-asus.jpg" alt="Jute Plant Pots" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Asus
    </p>
  </Link>


  <Link to={`/products/${lodarData.brand}`}  className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/TRjZ2Lm/Sony-Logo-1957.png" alt="Bird Feeders" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Sony
    </p>
  </Link>


  <Link to={`/products/${lodarData.brand}`}  className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/s6Pwv2P/TOSHIBA-Logo.png" alt="Hanging Birds" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Toshiba
    </p>
  </Link>
 
  
  
</div>


       </div>
    );
};

export default BrandCategory;