import React from 'react';
import { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';


const AllProducts = ({ setCardCount }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    return (
        <div className='my-5'>
            <h2 className='mb-3'>All products</h2>
            <div className="row mx-3">
                {products.map((product) => (
                    <SingleProduct setCardCount={setCardCount} key={product.id} product={product}></SingleProduct>
                ))}
            </div>

        </div>
    );
};

export default AllProducts;