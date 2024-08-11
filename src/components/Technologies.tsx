import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
const iconvariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [7, -7],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <SiTypescript className="text-6xl text-yellow-300"></SiTypescript>
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-blue-400"></BiLogoPostgresql>
        </motion.div>

        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-white"></TbBrandNextjs>
        </motion.div>
        <motion.div
          variants={iconvariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600"></SiMongodb>
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <TbBrandJavascript className="text-7xl text-pink-400"></TbBrandJavascript>
        </motion.div>
        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-7xl text-red-400"></TbBrandCpp>
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-5 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
