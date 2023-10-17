const Banner = () => {
    return (
        <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col-reverse  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
            <p className="text-center md:text-left  text-[#1a1c28] my-5">2022 COLLECTION</p>
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-[#1a1c28] leading-tight font-medium">Discover top

rated items</h2>
          
            <div className=" flex flex-col sm:flex-row justify-center md:justify-start my-5">
                <button className=" btn px-8 py-3 rounded text-xs bg-[#8696a0] text-white border-2 ">DISCOVER NOW</button>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="https://theme905-computer-shop.myshopify.com/cdn/shop/files/img_04_900x.png?v=1644318603"/>
        </div>
    </div>
</div>
    );
};

export default Banner;