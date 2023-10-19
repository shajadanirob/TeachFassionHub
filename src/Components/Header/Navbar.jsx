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


  
    return (
        <nav className="bg-base-100 p-4 font-sans">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
            TechFusionHub
            </div>
          </div>
          <div className="hidden md:flex space-x-4 text-black font-semibold ">
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
        
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black">
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
          <div className="md:hidden text-black mt-2 space-y-4">
           {NabLinks}
               {
            user?<div className="dropdown dropdown-end flex justify-center items-center mt-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="btn bg-[#FF630E] text-white"
                        onClick={handlelogOut}
                    >Logout</button>
            </div>
            :  <> <Link to='/login'>
            <button className="btn bg-[#8696a0] text-white">Login</button>
            </Link></> }
          
         
         </div>
        )}
        </nav>
    );
};

export default Navbar;