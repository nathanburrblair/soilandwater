import React, { Component } from "react";
import Axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./PlantCategories.css";
import Dropzone from "react-dropzone";

class PlantCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      addToggle: false,
      plantName: "",
      plantPrice: 0,
      plantDescription: "",
      plantCategory: this.props.match.params.category,
      category: null,
      plantPicture: ""
    };

    this.handleAddPlant = this.handleAddPlant.bind(this);
    this.handlePlantName = this.handlePlantName.bind(this);
    this.handlePlantPrice = this.handlePlantPrice.bind(this);
    this.handlePlantDescription = this.handlePlantDescription.bind(this);
    this.handleAddPlantToDB = this.handleAddPlantToDB.bind(this);
  }
  componentDidMount() {
    Axios.get(`/api/plants/${this.props.match.params.category}`).then(
      response => {
        this.setState({
          products: response.data
        });
      }
    );
  }

  handleAddPlant() {
    this.setState({
      addToggle: true
    });
  }

  handlePlantName(e) {
    this.setState({
      plantName: e.target.value
    });
  }

  handlePlantPrice(e) {
    this.setState({
      plantPrice: e.target.value
    });
  }

  handlePlantDescription(e) {
    this.setState({
      plantDescription: e.target.value
    });
  }

  handleAddPlantToDB() {
    Axios.post(`/api/plants/${this.props.match.params.category}`, {
      name: this.state.plantName,
      price: this.state.plantPrice,
      product_description: this.state.plantDescription,
      product_category: this.state.plantCategory
    }).then(response => {
      this.props.history.push(`/plants/${this.props.match.params.category}`);
    });
  }

  render() {
    console.log("match params", this.props.match.params);
    console.log("state", this.state);

    let listOfThings = this.state.products.map((product, i) => {
      return <ProductCard key={i} product={product} />;
    });

    return (
      <div className="mainBody">

        {this.props.match.params.category.charAt(0).toUpperCase() +
          this.props.match.params.category.slice(1) +
          " Page"}
        <div className="list">{listOfThings}</div>
        <div className="add-plant">
          {this.state.addToggle ? (
            <div>
              <input
                onChange={this.handlePlantName}
                placeholder="Plant Name"
                type="text"
              />
              <input
                onChange={this.handlePlantPrice}
                placeholder="Price"
                type="text"
              />
              <input
                onChange={this.handlePlantDescription}
                placeholder="Description"
                type="text"
              />
              <button onClick={this.handleAddPlantToDB}>Add Plant</button>
            </div>
          ) : (
            <button onClick={this.handleAddPlant}>Add A Plant</button>
          )}
        </div>
      </div>
    );
  }
}

export default PlantCategories;
