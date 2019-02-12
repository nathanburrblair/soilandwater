import React, { Component } from "react";
import "./Designs.css";
import { Link } from "react-router-dom";

class Designs extends Component {
  componentDidMount() {
    const movingWords = document.querySelectorAll(".design_subtitle");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("design_subtitle");
        } else {
          entry.target.classList.remove("design_subtitle");
        }
      });
    }, options);

    movingWords.forEach(word => {
      observer.observe(word);
    });
  }

  render() {
    return (
      <div className="design_container">
        <div className="design_content_container">
          <div className="design_intro">
            <h1>Designs You'll Love</h1>
            <p>
              This is an intro paragraph that says what amazing ***** we
              have at our store. It encourages you to browse and buy ******.
            </p>
          </div>
          <div className="sub_categories">
          <div className="staging">
              <div className="staging_overlay" />
              <div className="staging_text">
                <div className="design_subtitle">
                  <Link to="/design/staging">
                    <h2>Staging</h2>
                  </Link>
                </div>
                <p>
                  A paragraph about how we will come to you to take care of and water your plants so you don't have to.
                </p>
                <Link to="/design/staging">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
            <div className="plant_care">
              <div className="plant_care_overlay" />
              <div className="plant_care_text">
                <div className="design_subtitle">
                  <Link to="/design/plant-care">
                    <h2>Plant Care</h2>
                  </Link>
                </div>
                <p>
                  A paragraph about how we will come to you to take care of and water your plants so you don't have to.
                </p>
                <Link to="/design/plant-care">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Designs;
