import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-white flex justify-center items-center gap-2 p-5 ">
        <span className="!fill-yellow-500 lg:size-5 size-8"> &copy;</span>

        {/* <FaCopyright  /> */}
        <p className="text-lg text-center ">
          Copyright 2025 ,TOP CONSTRUCTION,All Rights Reserved
        </p>
      </div>
      {/* scroll to top button */}
      {/* <div
        id="icon-box"
        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6" />
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
