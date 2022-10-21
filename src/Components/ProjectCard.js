import git from "../Media/git.png";
import "../CSS/ProjectCard.css";
function ProjectCard(props) {
  return (
    <div>
      <div className="projectCard">
        <h1>Project 1</h1>
        <a href={props.link}>
          <img src={git} alt="git" hr></img>
        </a>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
