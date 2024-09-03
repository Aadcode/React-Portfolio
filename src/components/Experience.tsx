import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 sm:pb-12">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 sm:my-20 text-center text-3xl sm:text-4xl md:text-5xl"
      >
        Training
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/3 lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={experience.image}
                width={160}
                height={160}
                className="mb-6 rounded-full sm:rounded-lg"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-2/3 lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold text-lg sm:text-xl">
                {experience.year}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm sm:text-base">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
