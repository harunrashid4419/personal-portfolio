import React from "react";
import "./About.css";
import personalImg from "../../conponents/assets/pp(1).jpg";

const About = () => {
  return (
    <div id="about" className="main-about">
      <div className="about-me">
        <div className="about-img">
          <img src={personalImg} alt="" />
        </div>
        <div className="about-content">
          <div>
            <h3>About Me</h3>
            <p>
              Hello, My name is Md. Harun Or Rashid. I'm MERN Stack Developer.
              If I face a problem while coding, I get more pleasure. Because I
              will learn about something new. I love coding. I love learning
              about new technologies. I like traveling and watching movies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
