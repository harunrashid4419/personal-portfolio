import React from "react";
import "./Banner.css";
import Lottie from "lottie-react";
import coading from "../assets/coding.json";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="banner-section">
        <div className="left-side">
          <a target='_black' href="https://drive.google.com/file/d/12Z9Q1vT8Lp3DoOIRHhSI9vamvijg5fn9/view?usp=sharing">
            <h5 className="resume">Download Resume</h5>
          </a>
          <h3>Welcome to my Portfolio</h3>
          <h2>Hello, I'm Md. Harun Or Rashid</h2>
          <h1>I'm MERN Stack Developer</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="right-side">
          <Lottie animationData={coading} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
