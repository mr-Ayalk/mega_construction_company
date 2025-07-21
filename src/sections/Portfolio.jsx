import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/homeimg1.jpg";
import project3 from "../assets/realstate2.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/abrehot.jpg";
import { motion } from "framer-motion";
import {
  slidedownVariants,
  slideUpVariants,
  zoomInVariants,
} from "./animation";
import { allservices } from "../export.js";
const Portfolio = () => {
  return (
    <div className="text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[100%] w-[100%] m-4 py-[60px] flex flex-col justify-between items-center gap-[20px] "
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-orange-500 text-2xl !text-center w-full"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold !text-center !mx-auto w-full "
        >
          OUR BEST PPROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-orange-500"
        ></motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slidedownVariants}
        className="w-full m-auto grid lg:grid-cols-4 grid-cols-1 !justify-between"
      >
        <div
          className="w-[90%] m-auto my-3
       
        items-center text-white text-center border-2 rounded-md  cursor-pointer   p-5    "
        >
          <img
            src={project1}
            alt="project image"
            className="h-[250px] w-full   "
          />
          <h3 className="items-center justify-center text-xl">Smart Homes</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>
        <div className="w-[90%] m-auto m-autoitems-center text-white text-center border-2 rounded-md  cursor-pointer p-5  ">
          <img
            src={project2}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Villa House</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5   ">
          <img
            src={project3}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Real States</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5   ">
          <img
            src={project4}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">
            Religous House
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 my-3   ">
          <img
            src={project5}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">
            Modern Building
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5   ">
          <img
            src={project6}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Large Homes</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5  ">
          <img
            src={project7}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">
            Fancy Building
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-[90%] m-auto items-center text-white text-center border-2 rounded-md  cursor-pointer p-5   ">
          <img
            src={project8}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Smart Library</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>
        {/* 

        <img
          src={project2}
          alt="project image"
          className="h-[250px] w-full "
        />
        <img
          src={project3}
          alt="project image"
          className="h-[250px] w-full p-5"
        />
        <img
          src={project4}
          alt="project image"
          className="h-[250px] w-full p-5"
        />
        <img
          src={project5}
          alt="project image"
          className="h-[250px] w-full p-5"
        />
        <img
          src={project6}
          alt="project image"
          className="h-[250px] w-full p-5"
        />
        <img
          src={project7}
          alt="project image"
          className="h-[250px] w-full p-5"
        />
        <img
          src={project8}
          alt="project image"
          className="h-[250px] w-full p-5"
        /> */}
      </motion.div>
    </div>
  );
};

export default Portfolio;
