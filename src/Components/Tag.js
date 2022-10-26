import React from "react";
import "../CSS/Tag.css";
function Tag(skill) {
  const numbers = skill.languages;
  const listItems = numbers.map((number) => <p>{number}</p>);
  return (
    <div>
      <div className="mainTag">
        <h3>{skill.title}</h3>
        <p>{listItems}</p>
      </div>
    </div>
  );
}

export default Tag;
