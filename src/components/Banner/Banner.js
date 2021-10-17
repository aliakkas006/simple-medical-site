import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className="text-light fw-bold">Take care of your health now!</h1>
                            <h3 className="text-light fw-bold">Sale upto 30% of all products</h3>
                            <button type="button" class="btn btn-dark">Shop now</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;