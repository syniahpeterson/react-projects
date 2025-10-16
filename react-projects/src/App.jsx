import React from "react";
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      <h1>React Apps</h1>
      <section id="accordion">
        {/* Accordion */}
        <Accordion />
      </section>
      <div className="divider"></div>
      <section id="random-color">
        {/* Random Color Generator */}
        <RandomColor />
      </section>
      <div className="divider"></div>
      <section id="star-rating">
        {/* Star Rating */}
        <StarRating noOfStars={10} />
      </section>
      <div className="divider"></div>
      <section id="image-slider">
        {/* Image Slider */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      </section>
      <div className="divider"></div>
    </div>
  );
}

export default App;
