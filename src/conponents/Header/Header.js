import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = (
    <li>
      <a href="/">Home</a>
      <a href="#about">About Us</a>
      <a href="#skills-section">Skills</a>
      <a href="#projects-section">Projects</a>
      <a href="#blog">Blogs</a>
      <a href="#contact">Contact</a>
    </li>
  );

  return (
    <div className="header-section">
      <div className="navbar bg-base-100 flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <div className="header">
            <Link to="/">Md. Harun Or Rashid</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
