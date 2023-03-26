import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
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
            <button className='add-cart'>Add to cart</button>
        </div>
    );
};

export default Product;