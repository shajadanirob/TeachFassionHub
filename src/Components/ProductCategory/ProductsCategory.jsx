import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";



const ProductsCategory = () => {


    const lodedData = useLoaderData()
    console.log(lodedData)
   
    return (
       <div>
       
   
       <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">





  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/1nZyKjk/pexels-armand-valendez-544295.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Exclusive 10% Off on Apple product</h1>
      <p className="mb-5">Elevate your mobile experience with the Apple product. Now available with an exclusive 10% discount for a limited time. Dont miss your chance to own the latest iPhone innovation at a reduced price</p>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>




  </div> 
  <div id="slide2" className="carousel-item relative w-full">

   <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/R0hKYS8/Lenovo-Cover.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Unleash Savings: 15% Off Lenovo Laptops</h1>
      <p className="mb-5">Supercharge your productivity with Lenovo laptops. Enjoy a fantastic 15% discount on our range of high-performance laptops. Upgrade your computing experience and save big today!</p>
    </div>
  </div>
</div>



    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>


  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/gTgWBfj/HD-wallpaper-asus-carbon-logo-grunge-art-carbon-background-creative-asus-black-logo-asus-logo-asus.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Limited Time Offer: 5% Off ASUS Gaming Gear</h1>
      <p className="mb-5">Level up your gaming experience with ASUS gaming gear. For a limited time, enjoy a 5% discount on our top-of-the-line gaming equipment. Dont miss this chance to enhance your gaming setup at a special price!</p>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 


  
  <div id="slide4" className="carousel-item relative 
  w-full">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ThXqnGQ/pexels-obi-onyeador-13080838.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Get 25% Off on Samsung product</h1>
      <p className="mb-5">Experience the future with the Samsung Galaxy S21. Discover cutting-edge technology and top-tier performance at an incredible 25% discount. Dont miss this opportunity to own the latest innovation in mobile technology at an unbeatable price</p>
    </div>
  </div>
</div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>



         <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5 gap-5">
            {
             lodedData.map(data => <SingleProduct key={data._id} data={data}></SingleProduct>)
            }
            
        </div>
       </div>
    );
};

export default ProductsCategory;