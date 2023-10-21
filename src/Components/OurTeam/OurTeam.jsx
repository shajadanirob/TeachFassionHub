
const OurTeam = () => {
    return (
      <div className="h-screen">
      <div className="py-10  max-w-screen-lg mx-auto">
          <div className="text-center mb-16 ">
              <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-white font-regular">
                  THE TEAM
              </p>
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[#1a1c28] dark:text-white ">
                  Our Team
              </h3>
          </div>
  
  
          <div className="grid grid-cols-3 col-gap-10">
  
              <div className="text-center dark:bg-black bg-white">
                  <img className="w-100" src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"/>
                  <div className="p-4">
                      <div className="text-md">
                          <a href="#"
                              className="hover:text-indigo-500 dark:text-white text-gray-900 font-semibold transition duration-500 ease-in-out">Mehdi
                              Mohammadi</a>
                          <p className="text-gray-500 uppercase text-sm dark:text-white">CEO</p>
                      </div>
                      <div className="my-4 flex justify-center items-center">
    
  
  
                      </div>
                  </div>
  
              </div>
              <div className="text-center dark:bg-black bg-white">
                  <img className="w-100" src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"/>
                  <div className="p-4">
                      <div className="text-md">
                          <a href="#"
                              className="hover:text-indigo-500 dark:text-white text-gray-900 font-semibold transition duration-500 ease-in-out">Yahya
                              R. Makarim</a>
                          <p className="text-gray-500 uppercase text-sm dark:text-white"> SEO</p>
                      </div>
                      <div className="my-4 flex justify-center items-center">
                        

                      </div>
                  </div>
  
              </div>
              <div className="text-center dark:bg-black  bg-white">
                  <img className="w-100" src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"/>
                  <div className="p-4">
                      <div className="text-md">
                          <a href="#"
                              className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out dark:text-white">Ahmad
                              Sultani</a>
                          <p className="text-gray-500 uppercase text-sm dark:text-white">Manager</p>
                      </div>
                      <div className="my-4 flex justify-center items-center">
                      
                      

  
  
                      </div>
                  </div>
  
              </div>
  
          </div>
  
      </div>
  </div>
    );
};

export default OurTeam;