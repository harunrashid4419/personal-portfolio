import React from "react";
import coadingImg from '../assets/coading.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="banner-section">
        <div className="left-side">
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
            <img src={coadingImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
