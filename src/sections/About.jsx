import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
const About = () => {
  return (
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
          className="text-white uppercase text-[40px] font-bold"
        >
          Mega Construction
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
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          eveniet tenetur cum, eos veritatis unde inventore distinctio delectus
          voluptatum quas incidunt, reiciendis, sed atque? Beatae dolorum odio
          architecto sapiente consequatur!Lorem Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Iusto amet eum blanditiis laudantium
          atque rerum eveniet deserunt facilis architecto itaque, quia numquam
          cupiditate. Voluptas natus porro possimus dolores incidunt explicabo!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          mollitia sequi natus nostrum qui corrupti reiciendis laudantium aut.
          Quis in blanditiis culpa dolorem cum, quibusdam officiis corrupti iste
          non quos!
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
