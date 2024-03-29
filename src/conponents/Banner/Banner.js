import React from "react";
import "./Banner.css";
import Lottie from "lottie-react";
import coading from "../assets/coding.json";
import { Typewriter } from "react-simple-typewriter";
import SideBar from "../SideBar/SideBar";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="banner-section">
        <div className="left-side">
          <h3>Welcome to my Portfolio</h3>
          <h2>Hello, I'm Md. Harun Or Rashid</h2>
          <h1>
            I'm{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Front-end Developer",
                  "React Developer",
                  "Web Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <SideBar></SideBar>
          <a
            target="_black"
            href="https://drive.google.com/file/d/12Z9Q1vT8Lp3DoOIRHhSI9vamvijg5fn9/view?usp=sharing"
          >
            <h5 className="resume">Download Resume</h5>
          </a>
        </div>
        <div className="right-side">
          <Lottie animationData={coading} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
