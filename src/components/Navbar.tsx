import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { CgMail } from "react-icons/cg";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-20 flex justify-between py-6 items-center">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-6 h-6" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex justify-center items-center gap-6 text-2xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/aadarsh-j-16a673203/",
              "_blank"
            )
          }
        />
        <FaGithub
          onClick={() => window.open("https://github.com/Aadcode", "_blank")}
        />
        <CgMail
          className="text-3xl"
          onClick={() =>
            window.open("mailto:aadarshjain1927@gmail.com", "_blank")
          }
        />
        <FaXTwitter
          onClick={() => window.open("https://x.com/AadarshJai80511", "_blank")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
