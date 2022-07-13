import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // how declare event handler with existing product
    const addToCart = (id) => {
        console.log('ITem added', id);
    }

    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>It has id: {id}</small></p>

            <button onClick={addToCartWithParam} className='AddToCartBtn'>Add to cart</button>

            <button onClick={() => addToCart(id)} className='AddToCartBtn'>Purchase</button>
        </div>
    );
};

export default Cosmetic;