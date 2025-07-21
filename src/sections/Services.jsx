import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../export.js";
const Services = () => {
  return (
    <div id="services" className="w-full bg-gray-700">
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
          SPECIAL OFFER
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center "
        >
          OUR BEST SERVICES
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        {/*make div for service maping from export js file */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-[20px] mt-[30px]"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex justify-center items-start gap-5 p-8 text-white"
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2 text-white bg-white "
              />
              <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-[18px]">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
