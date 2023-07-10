import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function Toggle() {
    setClicked(!clicked);
  }
  return (
      <nav className="flex flex-wrap justify-between items-center px-[6.25rem] py-[1.25rem] fixed w-full sm:px-2">
        <div className="flex items-center gap-[11.5rem]">
          <img src={Logo} alt="" className=""/>
          <div onClick={Toggle} className="hidden sm:block sm:w-[40rem] " >
            {clicked ? <IoIosCloseCircle className="w-8 h-8"/> : <GiHamburgerMenu className="w-8 h-8" />} 
        </div>
        </div>
        <div className={clicked ? "sm:bg-[#600aff] sm:block sm:h-screen sm:w-full sm:px-[2rem] sm:py-5" : "flex items-center justify-between gap-16 sm:hidden"}>
          <div className="mr-[19rem]">
            <ul className="flex gap-6 text-[#2B007A] text-[1.2rem] sm:flex-col sm:text-white">
              <li>Home</li>
              <li>Product</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex gap-[1.25rem] ">
            <button className="text-[#2B007A] sm:text-white sm:text-[1.2rem]">Login </button>
            <button className="bg-[#2B007A] px-[1rem] py-2 text-white rounded-md sm:bg-white">
              Sign up
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
