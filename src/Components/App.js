import "../CSS/App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
