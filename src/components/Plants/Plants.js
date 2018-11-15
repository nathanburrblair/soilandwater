import React, { Component } from "react";
import "./Plants.css";
import Slider from "../Slider/Slider";

class Plants extends Component {
  render() {
    return (
      <div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    );
  }
}

export default Plants;
