import React from 'react';

const Service = ({ service }) => {
    const { name, description, price, time, img } = service;
    
    return (
        <div>
            <img src={img} alt="" />
            <h3> {name} </h3>
            <p> {description} </p>
            <h6> {time}hour </h6>
            <h5>Price: {price} </h5>
        </div>
    );
};

export default Service;