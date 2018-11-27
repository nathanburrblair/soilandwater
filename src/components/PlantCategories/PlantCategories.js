import React, { Component } from "react";
import Axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./PlantCategories.css";

class PlantCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
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

  render() {
    let listOfThings = this.state.products.map((product, i) => {
      return (
          <ProductCard key={i} product={product} />
      );
    });

    return <div className="list">{listOfThings}</div>;
  }
}

export default PlantCategories;
