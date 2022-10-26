import React from "react";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import down from "../Media/down.png";
function Home() {
  return (
    <div>
      <div className="mainHome">
        <Navbar></Navbar>
        <div className="select">
          <div className="resume">
            <a href="#">
              <p>CV</p>
            </a>
            <a href="#" className="resume2">
              <p>Resume</p>
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="thick">Hello, I'm Ibrahim Deria</p>
          <p style={{ fontSize: 40 }}>Software Engineer</p>
        </div>
        <a href="#target1">
          <img src={down} alt="down" className="down"></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
