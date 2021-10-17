import React from 'react';
import './Service.css'

const Service = ({ category }) => {
    const { name, image, description } = category;
    return (
        <>
            <div className="col-md-4">
                <div className="cart p-3 m-2 border border text-center">
                    <div className="mb-3">
                        <img src={image} alt="" />
                    </div>
                    <h5 className="text-info"> {name} </h5>
                    <p> {description} </p>
                </div>
            </div>
        </>
    );
};

export default Service;