import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const { name, img, description, id } = project;
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="content">
        <h4>
          <span>Project Name:</span> {name}
        </h4>
        {
          description.length > 100 ? <h5>
          <span>Description:</span> {description.slice(0, 50)  + '...'}
        </h5>
        : {description}
        }
        <Link to={`/projects/${id}`}>
          <button className="button-send">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
