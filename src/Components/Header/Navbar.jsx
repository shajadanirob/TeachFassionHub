import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";


const Navbar = () => {
  const { user,logOut} = UseAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const handlelogOut = e =>{
        e.preventDefault()
        logOut()
        .then(result =>{
            toast.success('logout successFully')
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }

 



    




      const NabLinks = <>
      <ol><NavLink 
      
      to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "underline text-red-500" : ""
    }>Home</NavLink></ol>

      <ol><NavLink to='/addProducts'className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "underline text-red-500" : ""
    }>AddProducts</NavLink></ol>
      <ol><NavLink to='/myCart'className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "underline text-red-500" : ""
    }>MyCart</NavLink></ol>

     

  </>


const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.documentElement.classList.toggle('dark')
};



  
    return (
        <nav className="bg-base-100 p-4 font-sans dark:bg-[#343434] ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
            <img className="w-[260px]" src="https://i.ibb.co/MgtkWyD/1519798591013.jpg" alt="" />
            </div>
          </div>
          <div className="hidden md:flex space-x-4 text-black dark:text-white font-semibold ">
            {NabLinks}
          </div>
          <div className="flex items-center hidden lg:inline-flex">
           {
            user?<div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="btn bg-[#8696a0] text-white"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :   <> <Link to='/login'>
            <button className="btn bg-[#8696a0] text-white">Login</button>
            </Link></>
            
          } 
          

<button onClick={toggleDarkMode}
        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>




        
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black dark:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden text-black mt-2 space-y-4 dark:text-white">
           {NabLinks}
               {
            user?<div className="dropdown dropdown-end flex justify-center items-center mt-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="btn bg-[#8696a0] text-white"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :  <> <Link to='/login'>
            <button className="btn bg-[#8696a0] text-white">Login</button>
            </Link></> }
            <button onClick={toggleDarkMode}
        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>
          
         
         </div>
        )}
        </nav>
    );
};

export default Navbar;