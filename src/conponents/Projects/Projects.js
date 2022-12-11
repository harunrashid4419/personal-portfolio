import React from "react";
import { useLoaderData } from "react-router-dom";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div id='projects-section' className="project-section">
      <div>
        <h3>My Latest Projects</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="projects">
            {
                projects.map(project => <Project key={project.id} project={project}></Project>)
            }
        </div>
      </div>
    </div>
  );
};

export default Projects;
