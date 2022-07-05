import React from 'react';
import Test from '../Test/Test';
import './Menubar.css'
const Menubar = ({ count }) => {
    return (
        <div >

            <div className="container-Menu px-5 py-2">
                <div className="row align-items-center justify-content-end">
                    <div className="logo col-md-2">MahmodulShahin</div>
                    <div className="menu-container col-md-10 d-flex justify-content-end ">
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart <sup>{count}</sup></li>
                        <li className='items me-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Menubar;