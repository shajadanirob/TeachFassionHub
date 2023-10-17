

const BrandCategory = () => {
    return (
       <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 ">


<h1 className="text-center text-4xl text-[#1a1c28] my-4 underline">Our Brand</h1>
        
<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
 

  <div className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/ThXqnGQ/pexels-obi-onyeador-13080838.jpg" alt="Metal Planters" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Samsung
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
    <img src="https://i.ibb.co/1nZyKjk/pexels-armand-valendez-544295.jpg" alt="Table Top Planters" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Apple
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?wall-mounted-stands" alt="Wall Mounted Stands" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Wall Mounted Stands
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?jute-plant-pots" alt="Jute Plant Pots" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Jute Plant Pots
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?bird-feeders" alt="Bird Feeders" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Bird Feeders
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?hanging-birds" alt="Hanging Birds" className="w-full"/>
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Hanging Birds
    </p>
  </div>
 
  
  
</div>


       </div>
    );
};

export default BrandCategory;