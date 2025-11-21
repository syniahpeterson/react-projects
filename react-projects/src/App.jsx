import React from "react";
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

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
      <section id="load-more-data">
        {/* Load More Data */}
        <LoadMoreData />
      </section>
      <div className="divider"></div>
      <section id="tree-view">
        {/* Tree View Component */}
        <TreeView menus={menus} />
      </section>
      <div className="divider"></div>
      <section id="qr-generator">
        {/* QR Code Generator Component */}
        <QRCodeGenerator />
      </section>
      <div className="divider"></div>
      <section id="light-dark-mode">
        {/* Light Mode Dark Mode Component */}
        <LightDarkMode />
      </section>
      <div className="divider"></div>
      <section id="scroll-indicator">
        {/* Scroll Indicator Component */}
        <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
      </section>
      <div className="divider"></div>
    </div>
  );
}

export default App;
