import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const { img, name, price, seller, rating } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {rating} star</p>
            </div>
        </div>
    );
};

export default Product;