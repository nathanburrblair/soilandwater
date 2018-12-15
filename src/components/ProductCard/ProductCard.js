import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = props => {
    return (
        <div className="card">
            <img className="product_image" src={props.product.product_image} alt=""/>
            <Link to={`/plants/${props.product.product_category}/${props.product.id}`}><h1>{props.product.name}</h1></Link>
            <h4>${props.product.price}</h4>
        </div>
    )
}

export default ProductCard;