import React, { Component } from "react";
import "./Plants.css";
import Slider from "../Slider/Slider";
import axios from "axios";
import Plant from "../../components/Plant/Plant";
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
    let displayAllPlants = this.state.allPlants.map((plant, i) => {
      return <Plant key={i} plant={plant} />;
    });

    return (
      <div>
        <div className="slider_container">
          <Slider />
        </div>

        {/* <div className="all_plant_list">{displayAllPlants}</div> */}
        <div className="orchid">
          <Link to="/plants/orchid">
            <h2>Orchids</h2>
          </Link>
          <p>We only sell the most beautiful orchids in the world. Your jaw will drop to the floor when you see our orchids.</p>
          <button>Shop Orchids</button>
        </div>
        <div className="succulent">
          <Link to="/plants/succulent">
            <li>Succulents</li>
          </Link>
        </div>
        <div className="bonsai">
          <Link to="/plants/bonsai">
            <li>Bonsai</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Plants;
