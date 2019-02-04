import React, { Component } from "react";
import "./Plants.css";
// import Slider from "../Slider/Slider";
import axios from "axios";
// import Plant from "../../components/Plant/Plant";
import { Link } from "react-router-dom";

class Plants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPlants: []
    };
  }

  componentDidMount() {
    axios.get("/api/plants").then(res =>
      this.setState({
        allPlants: res.data
      })
    );
  }

  render() {
    // let displayAllPlants = this.state.allPlants.map((plant, i) => {
    //   return <Plant key={i} plant={plant} />;
    // });

    return (
      <div className="plant_container">
        {/* <div className="slider_container">
          <Slider />
        </div> */}
        {/* <div className="all_plant_list">{displayAllPlants}</div> */}
        <div className="plants_content_container">
          <div className="plant_intro">
            <h2>Plants You'll Love</h2>
            <p>
              This is an intro paragraph that says what amazing plants we have
              at our store. It encourages you to browse and buy plants.
            </p>
          </div>
          <div className="sub_categories">
            <div className="orchid">
              <div className="orchid_overlay" />
              <div className="orchid_text">
                <Link to="/plants/orchid">
                  <h2>Orchids</h2>
                </Link>
                <p>
                  We only sell the most beautiful orchids in the world. Your jaw
                  will drop to the floor when you see our orchids.
                </p>
                <Link to="/plants/orchid">
                  <button>Shop Orchids</button>
                </Link>
              </div>
            </div>
            <div className="succulent">
              <div className="succulent_overlay" />
              <div className="succulent_text">
                <Link to="/plants/succulent">
                  <h2>Succulents</h2>
                </Link>
                <p>
                  We only sell the most beautiful succulents in the world. Your
                  jaw will drop to the floor when you see our succulents.
                </p>
                <Link to="/plants/succulent">
                  <button>Shop Succulents</button>
                </Link>
              </div>
            </div>
            <div className="bonsai">
              <div className="bonsai_overlay" />
              <div className="bonsai_text">
                <Link to="/plants/bonsai">
                  <h2>Bonsai</h2>
                </Link>
                <p>
                  We only sell the most beautiful bonsai trees in the world.
                  Your jaw will drop to the floor when you see our bonsai trees.
                </p>
                <Link to="/plants/bonsai">
                  <button>Shop Bonsai</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plants;
