import React from "react";
import "../CSS/Skills.css";
import Tag from "./Tag";
function Skills() {
  const languages = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "JQuery",
    "SQL",
  ];
  const concepts = [
    "Data Structures",
    "Algorithms",
    "Databases",
    "UI Design",
    "Object Oriented Programming",
    "Debugging",
  ];
  const soft = [
    "Communication/Collaboration",
    "Open-Minded",
    "Critical Thinking",
    "Time Management ",
    "Adaptability ",
    "Fast Learner",
  ];
  return (
    <div>
      <div className="mainSkills" id="target3">
        <h1 className="thick">My Skills</h1>
        <div className="seperate">
          <div className="skill">
            <Tag languages={languages} title="Languages"></Tag>
          </div>
          <div className="oneSkill">
            <Tag languages={concepts} title="Concepts"></Tag>
          </div>
          <div className="oneSkill">
            <Tag languages={soft} title="Soft Skills"></Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
