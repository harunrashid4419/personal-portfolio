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

  return (
    <div className="main-single-project">
      <div className="single-project">
        <div className="img">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={img} alt="slider img" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={img1} alt="slider img" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={img2} alt="slider img" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={img3} alt="slider img" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <h3>Project Name: {name}</h3>
            <h6><b>Description:</b> {description}</h6>
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
    </div>
  );
};

export default SingleProject;
