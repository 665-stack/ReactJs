import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../Utilities/fakeData';
import './Cosmetic.css'


const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // how declare event handler with existing product
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = (id) => {
        removeFromDb(id);
    }
    const removeAllItemFromDb = () => {
        deleteShoppingCart();
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>It has id: {id}</small></p>

            <button onClick={() => addToCart(id)} className='AddToCartBtn'>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={removeAllItemFromDb}>Delete card</button>
        </div>
    );
};

export default Cosmetic;