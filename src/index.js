import React from "react";
import ReactDOM from "react-dom";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import "./stylesheets/index.scss";

const Main = () => {
  return (
    <React.StrictMode>
      <main style={{ backgroundColor: "#F9F9FF" }}>
        <Intro />
        <div className="container">
          <About />
          <Skill />
          <Experience />
          <Education />
        </div>
      </main>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
