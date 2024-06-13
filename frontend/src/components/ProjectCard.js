import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
