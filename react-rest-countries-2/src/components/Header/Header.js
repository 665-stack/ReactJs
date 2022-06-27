import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder fs-3 text" href="/">The World</a>
                    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="/">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="/">About Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;