import React from 'react';
import logo from '../../../images/Banner&Background/logo.png';
import './Menubar.css';

const Menubar = () => {
    return (
        <>
            <div className="menubar-container">
                <div className="menubar container">
                    <div className="row">

                        <div className="col-md-2">
                            <div className="logo-img">
                                <img className="p-2" src={logo} alt="" />
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="menu-items">
                                <ul className="d-flex justify-content-end">
                                    <li className="items me-3 p-2 fs-5">Home</li>
                                    <li className="items me-3 p-2 fs-5">Shop</li>
                                    <li className="items me-3 p-2 fs-5">Contact us</li>
                                    <li className="items me-3 p-2 fs-5">About us</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Menubar;