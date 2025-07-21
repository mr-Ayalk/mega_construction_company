import { nav } from "framer-motion/client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Contact");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-black md:text-4xl text-3xl  font-bold font-rubik">
        Top <span className="text-orange-500  italic">Construction</span>
      </h1>
      <ul className="lg:flex justify-center items-center gap-6 hidden rounded-full shadow-lg border-[1px]  border-gray-400">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveLink(link)} // immediate feedback
            onSetActive={() => setActiveLink(link)} // scroll-triggered update
            className={`uppercase font-bold cursor-pointer p-3 rounded-full px-5 text-[15px]
    ${
      activeLink === link
        ? "bg-orange-500 text-white"
        : "text-black hover:bg-orange-300 hover:text-black"
    }`}
          >
            {link}
          </Link>
        ))}
      </ul>

      <button className="bg-orange-500   hover:bg-black hover:text-white text-black  py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden px-10">
        REACH US
      </button>

      {/* mobile menu starts here */}
      <div
        className="flex justify-between items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div className="">
          {isMenuOpen ? (
            <FaXmark className="text-orange-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-orange-500 text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-orange-500 p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
              to={path}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
