import React from "react";
import logo from "../assets/Base_Network_Logo.svg";
import { Link } from "react-router-dom";
import bulb from "../assets/bulb.png";
import etherum from "../assets/etherum.png";
import link from "../assets/link.png";

const About = () => {
  return (
    <div className="bg-plain-2 scroll">
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
      <div className="pt-8 h-full lg:w-[85vw] justify-between items-center lg:pt-28 w-[20rem] mx-auto">
        <div className="w-full lg:flex lg:px-20">
          <img src={bulb} className="h-40 mx-auto my-5" alt="" />
          <div className="text-center lg:w-[40rem] lg:py-11 lg:text-left">
            <h3 className="text-main text-2xl font-semibold">
              What is Base Wall of Fame?
            </h3>
            <p className="text-light lg:p-0 px-4">
              Base Hall of Fame is a community based project that celebrates
              builders across the world doing great stuffs on-chain. It cuts
              across every aspect and not just devs alone! As anyone building or
              bringing people on chain is a Builder.
            </p>
          </div>
        </div>
        <div className="w-full lg:flex flex-row-reverse lg:px-20">
          <img src={link} className="h-40 mx-auto my-5" alt="" />
          <div className="text-center lg:w-[40rem] lg:py-11 lg:text-left">
            <h3 className="text-main text-2xl font-semibold">
              Why Base Wall of Fame?
            </h3>
            <p className="text-light lg:p-0 px-4">
              Base Wall of Fame exists to recognize builders driving innovation
              on-chain. It celebrates contributions across all fields, not just
              development, inspiring more people to build and grow the Base
              ecosystem.
            </p>
          </div>
        </div>
      </div>
        <div className="w-full lg:flex lg:px-20">
          <img src={etherum} className="h-40 mx-auto my-5" alt="" />
          <div className="text-center lg:w-[40rem] lg:py-11 lg:text-left">
            <h3 className="text-main text-2xl font-semibold">
              Future of Base Wall of Fame
            </h3>
            <p className="text-light lg:p-0 px-4">
              The future of Base Wall of Fame aims to expand recognition
              globally, incorporating more builders and advanced features to
              highlight their achievements and foster collaboration across the
              blockchain world.
            </p>
          </div>
        </div>
      <div className="h-[21rem] lg:h-72 m-3 mt-10 bgplain overflow-hidden rounded-lg bg-white z-30 mx-4">
        <div className="bg-black/25 h-full w-full">
            <h3 className="text-main font-semibold text-xl lg:pt-3 p-2">
            Get a chance to be on the wall of fame!!!
            </h3>
            <h2 className="text-light lg:text-[2.47rem] text-[1.4rem] font-semibold px-2">
            DO YOU KNOW ANY BUILDER, BUILDING OR DOING COOL STUFF ONCHAIN?
            </h2>
            <p className="text-light/80 pb-2 lg:pb-3 px-2">
            Submit a nomination and they might just get lucky to be awarded with a place on the wall of fame.
            </p>
            <Link to='/nominate' className="bg-gradient-to-br from-main to-main/60 lg:px-16 py-3 px-6 text-lg mx-2 font-semibold text-light rounded-full">
            Submit a Nomination
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
