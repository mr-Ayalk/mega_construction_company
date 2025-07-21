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
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../export.js";
const Portfolio = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center "
        >
          OUR BEST PPROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 grid-cols-1"
      >
        <div
          className="w-full 
       
        items-center text-white text-center border-2 rounded-md  cursor-pointer   p-5 m-2    "
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
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
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
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
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
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
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
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
          <img
            src={project5}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Modern Building</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
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
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
          <img
            src={project7}
            alt="project image"
            className="h-[250px] w-full  "
          />
          <h3 className="items-center justify-center text-xl">Fancy Building</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            doloribus recusandae{" "}
          </p>
        </div>{" "}
        <div className="w-full items-center text-white text-center border-2 rounded-md  cursor-pointer p-5 m-2  ">
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
