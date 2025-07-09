import React from 'react'

const Working = () => {
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
        <img src={project1} alt="project image" className="h-[250px] w-full" />
        <img src={project2} alt="project image" className="h-[250px] w-full" />
        <img src={project3} alt="project image" className="h-[250px] w-full" />
        <img src={project4} alt="project image" className="h-[250px] w-full" />
        <img src={project5} alt="project image" className="h-[250px] w-full" />
        <img src={project6} alt="project image" className="h-[250px] w-full" />
        <img src={project7} alt="project image" className="h-[250px] w-full" />
        <img src={project8} alt="project image" className="h-[250px] w-full" />
      </motion.div>
    </div>
  )
}

export default Working
