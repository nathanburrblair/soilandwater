import React, { Component } from "react";
import "./Slider.css";
import Slide from "../Slide/Slide";
import RightArrow from "../Arrows/RightArrow";
import LeftArrow from "../Arrows/LeftArrow";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3-us-west-1.amazonaws.com/nathan-blair-devmtn-personal-project/plants1rs.jpg",
        "https://s3-us-west-1.amazonaws.com/nathan-blair-devmtn-personal-project/plants2rs.jpg",
        "https://s3-us-west-1.amazonaws.com/nathan-blair-devmtn-personal-project/plants3rs.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    console.log("state", this.state);
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => {
            return <Slide key={i} image={image} />;
          })}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Slider;
