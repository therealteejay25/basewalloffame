import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Base_Network_Logo.svg'

const Nominate = () => {
  return (
    <div className='bg p-1 h-screen'>
        <nav className="bg-black/25 z-50 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg py-2 px-[10px] lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5">
        {/* Logo */}
        <img src={logo} className="h-10" alt="Base Network Logo" />
        {/* Navigation Links */}
        <div className="flex space-x-3 text-light text-sm lg:text-base font-semibold">
          <Link to="/" className="hover:text-main transition" href="#builders">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-main transition"
            href="#founder"
          >
            About
          </Link>
        </div>
        {/* Call-to-Action Button */}
        <button className="bg-gradient-to-r from-main to-main/50 py-[6px] px-5 text-sm lg:text-[17px] font-medium z-0 text-light rounded-full">
          See More
        </button>
      </nav>
      <div className='h-[30rem] mt-24 bg-light/15 backdrop-blur border border-light/50 rounded-xl'>
        <form action="">
            <h2>Nonimate a builder</h2>
            <div>
                <label htmlFor="">Name</label>
                <div>
                    <input type="text"/>
                    
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Nominate