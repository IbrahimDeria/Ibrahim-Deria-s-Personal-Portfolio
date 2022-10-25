import React from "react";
import "../CSS/Projects.css";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div>
      <div className="mainProject" id="target2">
        <h1 className="thick">Projects</h1>
        <div className="seperate">
          <ProjectCard
            link="https://github.com/IbrahimDeria/Atm-Machine"
            title="Atm Machine"
            desc="Virtual Atm Machine that lets users deposit and withdraw money. Users can also send money to other accounts as well. All transactions, accounts, and balances are stored in a database."
          ></ProjectCard>
        </div>
        <div className="seperate">
          <ProjectCard></ProjectCard>
        </div>
        <div className="seperate">
          <ProjectCard></ProjectCard>
        </div>
        <div className="seperate">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default Projects;
