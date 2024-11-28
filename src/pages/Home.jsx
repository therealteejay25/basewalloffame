import React from 'react';
import logo from "../assets/Base_Network_Logo.svg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="scroll min-h-screen">
      <div className="bg flex flex-col justify-between items-center min-h-screen w-full">
        {/* Navigation Bar */}
        <nav className="bg-black/25 z-50 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg py-2 px-4 lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5 animate-fade-in">
          <img src={logo} className="h-10" alt="Base Network Logo" />
          <div className="flex space-x-4 text-light text-sm lg:text-base font-semibold">
            <Link to="/" className="hover:text-main transition">Home</Link>
            <Link to="/about" className="hover:text-main transition">About</Link>
          </div>
          <button className="bg-gradient-to-r from-main to-main/50 py-2 px-5 text-sm lg:text-[17px] font-medium text-light rounded-full">
            See More
          </button>
        </nav>

        {/* Hero Section */}
        <section className="text-light text-center flex flex-col items-center justify-center flex-grow px-6 lg:px-32 animate-fade-in">
          <h1 className="font-semibold text-2xl p-5 text-main">
            BASE WALL OF FAME!!!
          </h1>
          <h2 className="text-2xl w-[22rem] lg:w-[33rem] lg:text-4xl font-semibold">
            Celebrate the builders creating magic on base since day one.
          </h2>
          <p className="text-sm lg:text-md leading-6 max-w-screen-md mt-4">
            Discover the visionary builders behind Base, the Layer 2 blockchain
            designed for scalability and accessibility. From decentralized finance
            pioneers to creative NFT developers, explore the projects and minds
            shaping the future of Web3. Connect, collaborate, and innovate with the
            people bringing the Base vision to life.
          </p>
          <button className="bg-gradient-to-r w-72 lg:w-96 from-main to-main/50 py-3 px-8 text-sm lg:text-lg font-semibold text-light rounded-full mt-6">
            See More
          </button>
        </section>
      </div>

      {/* Secondary Background Section */}
      <div className="bg-plain flex items-center justify-center h-screen w-full animate-fade-in">
        <p className="text-light font-semibold text-lg text-center">
          More content goes here. <br /> Still in development.
        </p>
      </div>
    </div>
  );
};

export default Home;
