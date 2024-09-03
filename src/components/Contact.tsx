import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 sm:pb-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-3xl sm:text-4xl md:text-5xl"
      >
        Contact
      </motion.h2>
      <div className="text-center tracking-tighter px-4 sm:px-8 md:px-16">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-5 text-lg sm:text-xl md:text-2xl"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-5 text-lg sm:text-xl md:text-2xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b text-lg sm:text-xl md:text-2xl">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
