import React from "react";
import img from "../../conponents/assets/header-img.png";

const Header = () => {
  const menu = (
    <li>
      <a href="#">Home</a>
      <a href="#">Skills</a>
      <a href="#projects-section">Projects</a>
      <a href="#">About Us</a>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/12Z9Q1vT8Lp3DoOIRHhSI9vamvijg5fn9/view?usp=sharing"
      >
        Resume
      </a>
    </li>
  );

  return (
    <div className="sticky">
      <div className="navbar bg-base-100">
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
          <img className="w-36" src={img} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
