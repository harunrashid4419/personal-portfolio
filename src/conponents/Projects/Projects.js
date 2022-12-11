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
