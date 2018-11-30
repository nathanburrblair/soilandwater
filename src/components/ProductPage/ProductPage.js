import React, { Component } from "react";
import "./ProductPage.css";
import axios from "axios";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `/api/plants/${this.props.match.params.category}/${
          this.props.match.params.id
        }`
      )
      .then(response => {
          console.log('le response', response)
        this.setState({
          product: response.data
        });
      });
  }

  render() {
    let singleProduct = this.state.product.map((prod, i) => {
        return (
           <div className="single_product">
             <img className="prod_image" src={prod.product_image} alt=""/>
             <h1>{prod.name}</h1>
             <h3>{prod.price}</h3>
             {prod.product_description}
           </div>
        )
    })

    return (
      <div>
        {singleProduct}
      </div>
    );
  }
}

export default ProductPage;
