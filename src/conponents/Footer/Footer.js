import React from "react";
import headerImg from "../../conponents/assets/header-img.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-section">
        <div>
          <img src={headerImg} alt="" />
        </div>
        <div className="icon-section">
          <a target='_blank' href="https://www.facebook.com/mdharun.orrashid.79827">
            <FaFacebookF />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/md-harun-or-rashid2/">
            <FaLinkedinIn className="icon" />
          </a>
          <a target='_blank' href="https://github.com/harunrashid4419">
            <FaGithub />
          </a>
        </div>
      </div>
      <p className="text-center py-5">&copy; Copyright All rights reserved</p>
    </div>
  );
};

export default Footer;
