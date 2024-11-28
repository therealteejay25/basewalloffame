import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Base_Network_Logo.svg'
import user from '../assets/user.png'
import helpCircle from '../assets/help-circle.png'
import mail from '../assets/mail.png'

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
      <div className='h-[30rem] mt-24 lg:w-[25rem] mx-auto bg-light/15 backdrop-blur border p-2 border-light/50 rounded-xl'>
        <form action="">
            <h2 className='text-2xl font-semibold text-center text-light py-2'>Nonimate a builder</h2>
            <div className='p-5'>
                <label className='text-light' htmlFor="">Name</label>
                <div className='flex border-b justify-between border-light'>
                    <input className='bg-transparent outline-none text-light w-72' type="text"/>
                    <img src={user} className='h-8 pb-1' alt="" />
                </div>
            </div>
            <div className='p-5'>
                <label className='text-light' htmlFor="">Email</label>
                <div className='flex border-b justify-between border-light'>
                    <input className='bg-transparent outline-none text-light w-72' type="email"/>
                    <img src={mail} className='h-8 pb-1' alt="" />
                </div>
            </div>
            <div className='p-5'>
                <label className='text-light' htmlFor="">Why you should be nominated</label>
                <div className='flex border-b justify-between border-light'>
                    <textarea rows={1} className='bg-transparent outline-none text-light w-72' type="text"/>
                    <img src={helpCircle} className='h-8 pb-1' alt="" />
                </div>
            </div>
            <button className='bg-main lg:mx-24 text-light font-medium px-20 mx-16 mt-16 rounded py-2 text-lg'>
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default Nominate