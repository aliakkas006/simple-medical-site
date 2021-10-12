import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, price, time, img } = service;
    
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2> {name} </h2>
            <p> {description} </p>
            <h5>Duration: {time}hour </h5>
            <h3>Price: {price} </h3>
        </div>
    );
};

export default Service;