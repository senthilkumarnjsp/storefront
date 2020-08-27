import React from "react";

import "./jumbotron.css";
import img from "../assets/images/homepage-carousel.jpg";

export default () => {
  return (
    <div>
      <div className="slideshow-container">
        <img src={img} alt="One" style={{ width: "100%", height: "350px" }} />
      </div>
    </div>
  );
};
