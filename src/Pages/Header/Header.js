import React, { useState } from 'react';
import logo from '../../images/logo-search-grid-1x.png'
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 mx-auto">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
     <img src={logo} className="w-100 h-10 mr-2" alt="Logo" /><p className='text-black'>Agency text</p>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
        <AiOutlineMenu className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}></AiOutlineMenu>
        
        <AiOutlineClose className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}></AiOutlineClose>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         < Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Home
         </Link>
         <Link to='/contact' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Contact
         </Link>
         <Link to ='/clientpage' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Client
         </Link>
         <Link to='/about' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           About
         </Link>
         <Link to='/ourworks' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Our Works
         </Link>
       </div>
       <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Login
         </button>
       </div>
     </div>
   </nav>
    );
};

export default Header;