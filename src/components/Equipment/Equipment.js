import React from 'react';

const Equipment = ({ equipment }) => {
    const { name, price, image } = equipment;
    return (
        <div className="col-md-3">
            <div className="cart p-3 m-2 text-center">
                <div className="mb-3">
                    <img className="w-100" src={image} alt="" />
                </div>
                <h5 className="text-info"> {name} </h5>
                <p className="text-warning">Price: {price} </p>
            </div>
        </div>
    );
};

export default Equipment;