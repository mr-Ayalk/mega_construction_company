import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-white flex justify-between items-center gap-2 p-5 font-serif  flex-col md:flex-row">
        <div className="text-orange-600">Top Construction</div>
        <div className="flex flex-row items-center ">
          <FaCopyright className="size-4" />
          <p className="text-lg text-center ml-2 ">
            Copyright 2025 ,All Rights Reserved
          </p>
        </div>
        <div className="flex gap-4 text-2xl text-orange-400">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* scroll to top button */}
      {/* <div
        id="icon-box"
        className="bg-orange-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6" />
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
