import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../assets/skillImg.png";
import './Skills.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id='skills-section' className="skills-section">
        <h1>Skills</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="owl-carousel owl-theme skill-slider"
      >
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">85%</p>
          <h5>React JS</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">80%</p>
          <h5>JavaScript</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">80%</p>
          <h5>ES6</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">50%</p>
          <h5>MongoDB</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">45%</p>
          <h5>Node JS</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">90%</p>
          <h5>Tailwind CSS</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">80%</p>
          <h5>Bootstrap</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">90%</p>
          <h5>Daisy UI</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">85%</p>
          <h5>HTML</h5>
        </div>
        <div className="item">
          <img className="skill_img" src={img} alt="skill img" />
          <p className="percentage">90%</p>
          <h5>CSS</h5>
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;
