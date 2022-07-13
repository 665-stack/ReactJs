import React from 'react';
import { addToDataBase } from '../../Utilities/fakeData';
import './Cosmetic.css'


const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // how declare event handler with existing product
    const addToCart = (id) => {
        addToDataBase(id);
    }


    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>It has id: {id}</small></p>

            <button onClick={() => addToCart(id)} className='AddToCartBtn'>Add to cart</button>
        </div>
    );
};

export default Cosmetic;