import { useEffect, useState } from "react";
import SingleBrandCategory from "./SingleBrandCategory";
import { data } from "autoprefixer";



const BrandCategory = () => {

 const [allData ,setAlldata] = useState([])
 useEffect(() =>{
  fetch('/Data.json')
  .then(res => res.json())
  .then(data => setAlldata(data))
 },[])



    return (
       <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 dark:bg-[#343434] my-5 ">


<h1 className="text-3xl sm:text-4xl text-center my-5 leading-normal font-extrabold tracking-tight dark:text-white  text-[#1a1c28]">Our Brand</h1>
        
<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
 {
  allData.map(data => <SingleBrandCategory key={data.name} data={data}></SingleBrandCategory>)
 }
  
</div>


       </div>
    );
};

export default BrandCategory;