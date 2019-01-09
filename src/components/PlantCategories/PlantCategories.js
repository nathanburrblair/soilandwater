import React, { Component } from "react";
import Axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./PlantCategories.css";
import Dropzone from "react-dropzone";
import classNames from 'classnames'

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

  onDrop(files) {
    var file = files[0];

    Axios.get("/api/sign", {
      filename: file.name,
      filetype: file.type
    })
      .then(function(result) {
        var signedUrl = result.data.signedUrl;

        var options = {
          headers: {
            "Content-Type": file.type
          }
        };

        return Axios.put(signedUrl, file, options);
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
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
        <div className="category_intro">
          <h2>
            {this.props.match.params.category.charAt(0).toUpperCase() +
              this.props.match.params.category.slice(1) +
              "S"}{" "}
            You'll Love
          </h2>
          <p>
            This is an intro paragraph that says what amazing plants we have at
            our store. It encourages you to browse and buy plants.
          </p>
        </div>
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

              <Dropzone onDrop={this.onDrop} size={150}>
                {({ getRootProps, getInputProps, isDragActive }) => {
                  return (
                    <div 
                      {...getRootProps()} 
                      className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                    >
                      <input {...getInputProps()} />
                      {
                        isDragActive ?
                          <p>Drop files here...</p> :
                          <p>Try dropping some file shere, or click to select files to upload.</p>
                      }
                </div>
                  )
                }}
              </Dropzone>

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
