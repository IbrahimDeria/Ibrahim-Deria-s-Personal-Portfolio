import React from "react";
import git from "../Media/git2.png";
import "../CSS/ProjectCard.css";
function ProjectCard(props) {
  return (
    <div>
      <div className="projectCard">
        <h1>{props.title}</h1>
        <a href={props.link}>
          <img src={git} alt="git" hr></img>
        </a>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
