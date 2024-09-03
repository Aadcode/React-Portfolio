import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandJavascript, TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
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
    <div className="border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-center text-3xl sm:text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {[
          { Icon: SiTypescript, color: "text-blue-400", duration: 4 },
          { Icon: BiLogoPostgresql, color: "text-blue-500", duration: 4 },
          { Icon: RiReactjsLine, color: "text-cyan-400", duration: 4 },
          { Icon: TbBrandNextjs, color: "text-white", duration: 6 },
          { Icon: SiMongodb, color: "text-green-600", duration: 8 },
          { Icon: TbBrandJavascript, color: "text-yellow-300", duration: 4 },
          { Icon: TbBrandCpp, color: "text-blue-500", duration: 6 },
          { Icon: FaNodeJs, color: "text-green-500", duration: 4 },
        ].map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-5"
          >
            <Icon className={`text-6xl sm:text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
