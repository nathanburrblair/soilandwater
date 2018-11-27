import React, { Component } from "react";
import "./Plants.css";
import Slider from "../Slider/Slider";
import axios from "axios";
import Plant from '../../components/Plant/Plant';
import {Link} from 'react-router-dom';

class Plants extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allPlants: []
    }
  }


  componentDidMount () {
    axios.get('/api/plants').then(res => 
      this.setState({
        allPlants: res.data
      }))
    }
    
    render() {

    let displayAllPlants = this.state.allPlants.map((plant, i) => {
      return (
        <Plant
          key={i}
          plant={plant}
        />
      )
    })

    return (
      <div>
        <div className="slider_container">
          <Slider />
        </div>
        <div className="all_plant_list">
          {displayAllPlants}
        </div>
        <Link to="/plants/orchid"><li>Orchids</li></Link>
        <Link to="/plants/succulent"><li>Succulents</li></Link>
        <Link to="/plants/bonsai"><li>Bonsai</li></Link>
      </div>
    );
  }
}

export default Plants;
