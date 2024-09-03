import React from "react";
import { motion, Variants } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Profile from "../assets/Profile.png";

const container = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16 mb-8 lg:mb-16">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start lg:ml-8 xl:ml-16">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-thin tracking-tight text-center lg:text-left"
            >
              Aadarsh Jain
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent bg-clip-text text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-lg text-center lg:text-left tracking-tighter text-sm sm:text-base md:text-lg lg:text-xl font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-8 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={Profile}
              alt="Profile"
              className="w-2/3 sm:w-1/2 md:w-3/4 lg:w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
