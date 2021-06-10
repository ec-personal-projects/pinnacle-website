import React from "react";
import Home from "./components/HomePage/Home";
import Services from "./components/ServicesPage/Services";
import Projects from "./components/ProjectPage/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
