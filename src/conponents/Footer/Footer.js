import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-section">
        <div className="footer">
          <Link to="/">Md. Harun Or Rashid</Link>
        </div>
        <div>
          <SideBar></SideBar>
        </div>
      </div>
      <p className="text-center py-5">&copy; Copyright All rights reserved</p>
    </div>
  );
};

export default Footer;
