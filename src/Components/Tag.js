import React from "react";
import "../CSS/Tag.css";
function Tag(props) {
  return (
    <div>
      <div className="mainTag">
        <p>{props.skill}</p>
      </div>
    </div>
  );
}

export default Tag;
