import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 sm:pb-12">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 sm:my-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center sm:flex-row lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/3 lg:w-1/4 flex justify-center mb-4 sm:mb-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-2/3 lg:w-3/4 px-4 lg:px-8"
            >
              <h6 className="mb-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm sm:text-base text-center sm:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-400"
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
