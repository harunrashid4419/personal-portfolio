import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <a
        target="_blank"
        className="facebook"
        href="https://www.facebook.com/mdharun.orrashid.79827"
      >
        <FaFacebookF />
      </a>
      <a
        target="_blank"
        className="github"
        href="https://github.com/harunrashid4419"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        className="linkedin"
        href="https://www.linkedin.com/in/md-harun-or-rashid2/"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SideBar;
