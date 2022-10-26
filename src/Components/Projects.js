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
          <ProjectCard
            link="https://github.com/IbrahimDeria/Data-Structures-Algorithms"
            title="DSA's"
            desc="A folder containing data structures and algorithm programs built from the ground up by me! Run the Java files without any extra hassle and see how I implemented certain Data Structures and Algorithms."
          ></ProjectCard>
        </div>
        <div className="seperate">
          <ProjectCard
            link="https://github.com/IbrahimDeria/Ibrahim-s-Games"
            title="Website Games"
            desc="4 website games including a Hangman, and State/City Guesser, Washington City Guesser, and a Calculator. Go through the read me file in order to run the files. "
          ></ProjectCard>
        </div>
        <div className="seperate">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default Projects;
