import React from 'react';
import './Product.css'
// import cartIcon from '../../images/cart-plus-solid.svg'
const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-details">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} start</p>

            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product; 