import { ABOUT_TEXT } from "../constants";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mx-4 sm:mx-7">
      <h1 className="my-10 text-center text-3xl sm:text-4xl">
        About <span className="text-neutral-500">me</span>
      </h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center lg:justify-between"
      >
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-3/4 sm:w-2/3 lg:w-full"
              src={about}
              alt="profile"
            />
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:pr-8"
        >
          <div className="flex justify-center lg:justify-start text-lg sm:text-xl">
            <p className="my-4 max-w-xl px-4 py-6 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
