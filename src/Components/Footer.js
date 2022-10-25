import React from "react";
import "../CSS/Footer.css";
import linkedin from "../Media/linkedin.png";
import git from "../Media/git2.png";
function Footer() {
  return (
    <div>
      <div className="mainFooter" id="target4">
        <p className="padTop">Personal Website Portfolio, Ibrahim Deria</p>
        <p>Made with React</p>
        <p> &copy; 2022. All rights reserved</p>
        <a href="https://www.linkedin.com/in/ibrahim-deria-a4865a140/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
        <a href="https://github.com/IbrahimDeria">
          <img src={git} alt="github"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
