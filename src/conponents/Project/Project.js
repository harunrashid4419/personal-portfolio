import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const { name, img, description, link } = project;
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="content">
        <h4>
          <span>Project Name:</span> {name}
        </h4>
        <h5>
          <span>Description:</span> {description}
        </h5>
        <a
          target="_blank"
          href={link}
        >
          <button className="button-send">Visit Site</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
