import React from "react";
import "../CSS/Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="mainHome">
        <Navbar></Navbar>
        <div className="select">
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
        <div className="resume">
          <a href="#">
            <p>CV</p>
          </a>
          <a href="#">
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
