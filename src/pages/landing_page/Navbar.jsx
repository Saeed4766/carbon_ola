import React from 'react'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center px-[6.25rem] py-[1.25rem] fixed w-full '>
        <div>
          <img src={Logo}alt="" />
        </div>
        <div>
          <ul className='flex gap-6 text-[#2B007A] text-[1.2rem]'>
              <li>Home</li>
              <li>Product</li>
              <li>Contact Us</li>
          </ul>
        </div>
        <div className='flex gap-[1.25rem] '>
        <button className='text-[#2B007A]'>Login </button>
        <button className='bg-[#2B007A] px-[1rem] py-2 text-white rounded-md' >Sign up</button>
        </div>
  
      </nav>
    </div>
  )
}

export default Navbar
