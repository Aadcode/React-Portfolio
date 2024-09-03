import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { CgMail } from "react-icons/cg";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-10 flex flex-col md:flex-row justify-between py-6 items-center px-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center gap-6 mt-4 md:mt-0 text-2xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/aadarsh-j-16a673203/",
              "_blank"
            )
          }
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition-colors duration-300"
        />
        <FaGithub
          onClick={() => window.open("https://github.com/Aadcode", "_blank")}
          aria-label="GitHub"
          className="hover:text-gray-800 transition-colors duration-300"
        />
        <CgMail
          onClick={() =>
            window.open("mailto:aadarshjain1927@gmail.com", "_blank")
          }
          aria-label="Email"
          className="text-3xl hover:text-red-600 transition-colors duration-300"
        />
        <FaXTwitter
          onClick={() => window.open("https://x.com/AadarshJai80511", "_blank")}
          aria-label="Twitter"
          className="hover:text-blue-400 transition-colors duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
