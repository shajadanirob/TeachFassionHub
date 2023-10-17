

const Discount = () => {
    return (
   <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 ">
    <h1 className="text-center text-4xl text-[#1a1c28] my-4 underline">Discount</h1>


<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

<div className="w-full h-64 lg:w-1/2 lg:h-auto">
    <img className="h-full w-full object-cover" src="https://i.ibb.co/1z1Cps9/banner-2-590x700-crop-center-progressive-png.webp" alt="Winding mountain road"/>
</div>



<div
    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
  
    <div className="flex flex-col p-12 md:px-16">
        <p className="text-[#1a1c28] my-2">FEATURED MAC ACCESSORIES</p>
        <h2 className="text-2xl font-medium uppercase text-[#1a1c28] lg:text-4xl">Make the perfect

connection</h2>
        <p className="mt-4 text-[#bec0c4]">
        Sale up to 50% off!
        </p>
    
        <div className="mt-8">
            <div 
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-[#8696a0] border-solid border-2 py-4 px-10 hover:shadow-md md:w-48">Shop Now</div>
        </div>
    </div>

</div>


</div>


   </div>
    );
};

export default Discount;