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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-16">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-thin tracking-tight sm:text-5xl lg:text-8xl"
            >
              Aadarsh Jain
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl px-4 py-6 text-center lg:text-left tracking-tighter text-lg font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={Profile}
              alt="Profile"
              className="w-3/4 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
