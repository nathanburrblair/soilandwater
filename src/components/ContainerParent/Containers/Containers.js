import React, { Component } from "react";
import "./Containers.css";
import { Link } from "react-router-dom";

class Containers extends Component {
  componentDidMount() {
    const movingWords = document.querySelectorAll(".container_subtitle");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("container_subtitle");
        } else {
          entry.target.classList.remove("container_subtitle");
        }
      });
    }, options);

    movingWords.forEach(word => {
      observer.observe(word);
    });
  }

  render() {
    return (
      <div className="container_container">
        <div className="containers_content_container">
          <div className="container_intro">
            <h1>Containers You'll Love</h1>
            <p>
              This is an intro paragraph that says what amazing containers we
              have at our store. It encourages you to browse and buy containers.
            </p>
          </div>
          <div className="sub_categories">
            <div className="terracotta">
              <div className="terracotta_overlay" />
              <div className="terracotta_text">
                <div className="container_subtitle">
                  <Link to="/containers/terracotta">
                    <h2>Terra Cotta</h2>
                  </Link>
                </div>
                <p>
                  We only sell the most beautiful terra cotta containers in the
                  world. Your jaw will drop to the floor when you see our terra
                  cotta containers.
                </p>
                <Link to="/containers/terracotta">
                  <button>Shop Terra Cotta</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Containers;
