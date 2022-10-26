import React from "react";
import "../CSS/About.css";
import picMe from "../Media/picMe.jpg";
function About() {
  return (
    <div>
      <div className="mainAbout" id="target1">
        <img alt="ibrahimderia" src={picMe} className="myPic"></img>
        <div className="borders">
          <p>
            Hello, I'm Ibrahim! I am a Somali-American currently living in
            Seattle. I am currently a student at the University of Washington
            studying Computer Science. A regular day for me includes building
            websites, games (Playing them too), and useful applications.
            Currently interested in Machine learning and hoping to become an
            AI/Machine Learning Engineer. If you have any questions, send them
            my way!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
