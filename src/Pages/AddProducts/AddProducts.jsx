import Swal from "sweetalert2";


const AddProducts = () => {

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const productName = form.productName.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const ProductDetails = form.ProductDetails.value;
    const image = form.image.value
    console.log(productName, brand, category, price, rating, ProductDetails)

    const products = { productName, brand, category, price, rating, ProductDetails, image }

    fetch("  https://teachfausion-server-site-jbxvnszc0-shajada-nirobs-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your product update successFully',
              showConfirmButton: false,
              timer: 1500
            })
            form.reset()
      }
      });
  };




  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-24 py-5 my-5">

      <div className="bg-white  border-4 rounded-lg shadow relative m-10">
        <h2 className="text-3xl sm:text-4xl text-center font-semibold my-5 text-[#1a1c28]">Add Products</h2>


        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                <input type="text" name="productName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Product Name" required="" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required="" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
             

                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" name="brand" required id="">
                  <option disabled selected value="">Selected</option>
                  <option value="samsung">samsung</option>
                  <option value="apple">apple</option>
                  <option value="lenovo">lenovo</option>
                  <option value="asus">asus</option>
                  <option value="sony">sony</option>
                  <option value="toshiba">toshiba</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
              </div>





              <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                <input type="text" name="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Image" required="" />
              </div>



              <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Rating</label>
                <input type="text" name="rating" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Rating" required="" />
              </div>








              <div className="col-span-full">
                <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" name="ProductDetails"></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button className="text-white bg-[#8696a0] focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add product</button>
            </div>



          </form>
        </div>



      </div>



    </div>
  );
};










export default AddProducts;