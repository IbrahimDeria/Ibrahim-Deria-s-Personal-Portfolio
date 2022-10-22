import React from "react";
import "../CSS/Navbar.css";
import menu from "../Media/bars.png";
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <div>
        <img
          src={menu}
          className="menuImg"
          onClick={openNav}
          alt="menuBar"
        ></img>
        <div id="mySidenav" className="sidenav">
          <p onClick={closeNav} className="closebtn">
            &times;
          </p>
          <a href="#target1">About</a>
          <a href="#target2">Project</a>
          <a href="#target3">Skills</a>
          <a href="#target4">Footer</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
