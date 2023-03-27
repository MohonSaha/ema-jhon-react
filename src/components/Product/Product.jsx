import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const addToCart = props.addToCart;

    
    const { img, name, seller, price, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2 product-name>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='add-cart'>
                Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;