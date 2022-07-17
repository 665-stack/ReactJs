import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
        </div>
    );
};

export default Product; 