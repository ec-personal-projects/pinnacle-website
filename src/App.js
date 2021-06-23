import React from "react";
import Home from "./components/HomePage/Home";
import Services from "./components/ServicesPage/Services";
import Projects from "./components/ProjectPage/Projects";
import Menu from "./components/SecondTry/Header/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
