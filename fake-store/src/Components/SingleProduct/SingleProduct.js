import React from 'react';
// import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'
const SingleProduct = (props) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="singleProductCard">
                <h3>{props.product.title.slice(0, 10)}</h3>
                <img className='productImg img-fluid' src={props.product.image} alt="" />
                <div className="d-flex justify-content-center">
                    <button onClick={props.setCardCount} className='btn addToCardBtn'>add to card</button>
                    <button className='btn deleteBtn'>delete</button>
                    <button className='btn detailsBtn'>details </button>

                </div>
            </div>

        </div>
    );
};

export default SingleProduct;