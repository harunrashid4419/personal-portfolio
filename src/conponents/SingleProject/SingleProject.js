import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleProject.css";

const SingleProject = () => {
  const project = useLoaderData();
  const {
    img,
    img1,
    img2,
    img3,
    name,
    features,
    description,
    server_code,
    client_code,
    link,
  } = project;
  console.log(project);
  return (
    <div className="main-single-project">
      <div className="single-project">
        <div className="img">
          <img src={img} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="content">
          <h3>Project Name: {name}</h3>
          <h6>Description: {description}</h6>
          <p className="feature">Features:</p>
          {features.map((feature) => (
            <p className="bullet-point">{feature}</p>
          ))}
          <a href={link} target="_blank">
            <button className="button-send">Live Link</button>
          </a>
          <a target="_blank" href={client_code}>
            <button className="button-send">Client Code</button>
          </a>
          {server_code && (
            <a href={server_code} target="_blank">
              <button className="button-send">Server Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
