import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export.js";
const Working = () => {
  return (
    <div id="working" className="w-full bg-amber-100 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px] "
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          STEP BY STEP
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center "
        >
          HOW IT'S WORKING
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
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-[20px] mt-[30px]"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6"
            >
              <div className="">
                <div className="flex flex-row !items-center gap-2">
                  <item.icon className="size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer !items-center" />
                  <h1 className="text-2xl font-bold uppercase ">
                    {item.title}
                  </h1>
                </div>
                <p className="text-[20px] text-center text-gray-600 ">
                  {item.about}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
