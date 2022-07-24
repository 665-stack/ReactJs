import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = product => {
        console.log(product, 'yes its me');
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            {/* product section */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            {/* cart section */}
            <div className='cart-container'>
                <h5>Our Summary</h5>
                <div className='order-details'>
                    <p>Selected items: {cart.length}</p>
                    <p>Total Price: $</p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax: $</p>
                    <h6>Grand Total: $</h6>
                </div>
                <div className='btns'>
                    <button className='clear-cart-btn'><p>Clear Cart</p></button>
                    <br />
                    <button className='review-order-btn'><p>Review Order</p></button>
                </div>
            </div>

        </div>
    );
};

export default Shop;