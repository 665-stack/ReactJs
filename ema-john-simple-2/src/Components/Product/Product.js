import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const { img, name, price, seller, rating } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {rating} star</p>
            </div>
        </div>
    );
};

export default Product;