import React from "react";
import "./App.css";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      <h1>React Apps</h1>
      <section id="accordion">
        {/* Accordion */}
        <Accordion />
      </section>
      <div className="divider"></div>
      <section id="next">Next Project</section>
    </div>
  );
}

export default App;
