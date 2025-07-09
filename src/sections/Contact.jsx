import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full">
      <div
        className="lg:w-[80%] w-[90%]  m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
        id="about"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-between items-startgap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl"
          >
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[40px] font-bold"
          >
            REACH US FOR ANY QUERY
          </motion.h1>

          <div className="w-[120px] h-[6px] bg-yellow-500 "></div>
          <p className="text-3xl italic text-gray-50 mt-[60px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptatem sint ab dolorem esse qui amet, doloribus in cupiditate
            veritatis! Soluta animi nesciunt ea atque. Perspiciatis molestiae
            deserunt aperiam quas?
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          values={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.form
            initial="hidden"
            whileHover="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              type="text"
              placeholder="Enter Fullname"
              className="px-6 py-3 border-2px] border-black text-black rounded-lg w-full"
            />

            <input
              type="email"
              placeholder="EnterEmail"
              className="px-6 py-3 border-2px] border-black text-black rounded-lg w-full"
            />

            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="px-6 py-3 border-2px] border-black text-black rounded-lg w-full"
            />
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
