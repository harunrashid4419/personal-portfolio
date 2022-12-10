import React from "react";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
        "name": "Resale Market",
        "id": "1",
        "description": "Using React Js, Express Js, MongoDB, Firebase, Tailwind CSS, Daisy Ui",
        "img": "https://i.ibb.co/PmW7xk3/Screenshot-83.png",
        "link": "https://resale-market-df27a.web.app/"
    },
    {
        "name": "Learner BD",
        "id": "2",
        "description": "Using React Js, Express Js, MongoDB, Firebase, Bootstrap, Daisy Ui",
        "img": "https://i.ibb.co/4TjWcpX/Screenshot-82.png",
        "link": "https://free-learn-58d4a.web.app/"
    },
    {
        "name": "Doctors Portal",
        "id": "3",
        "description": "Using React Js, Express Js, MongoDB, Firebase, Tailwind CSS, Daisy Ui",
        "img": "https://i.ibb.co/wM9SWn2/Screenshot-84.png",
        "link": "https://doctors-portal-recap-49d9b.web.app/"
    },
    {
        "name": "Quize Store",
        "id": "4",
        "description": "Using JavaScript, Tailwind CSS, ES6, CSS",
        "img": "https://i.ibb.co/djLXMvj/Screenshot-81.png",
        "link": "https://wonderful-capybara-fb2475.netlify.app/"
    },
    {
        "name": "Hime",
        "id": "5",
        "description": "Using HTML, CSS",
        "img": "https://i.ibb.co/RD76tB7/Screenshot-79.png",
        "link": "https://harun.devnuruzzaman.com/hime/"
    },
    {
        "name": "Cuba",
        "id": "6",
        "description": "Using HTML, CSS",
        "img": "https://i.ibb.co/drGztCY/Screenshot-80.png",
        "link": "https://harun.devnuruzzaman.com/cuba/"
    },
];

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
