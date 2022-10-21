import "../CSS/About.css";
import picMe from "../Media/picMe.jpg";
function About() {
  return (
    <div>
      <div className="mainAbout" id="target1">
        <img alt="ibrahimderia" src={picMe} className="myPic"></img>
        <div className="borders">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
            Feugiat scelerisque varius morbi enim nunc faucibus. Viverra mauris
            in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum.
            Massa vitae tortor condimentum lacinia quis. Natoque penatibus et
            magnis dis parturient montes nascetur ridiculus. Posuere morbi leo
            urna molestie at elementum eu facilisis. Velit dignissim sodales ut
            eu sem. Augue ut lectus arcu bibendum at. Ullamcorper dignissim cras
            tincidunt lobortis feugiat vivamus at. Adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum. Purus semper
            eget duis at tellus at.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
