import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, price, time, img } = service;
    
    return (
        <>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h5>Duration: {time} </h5>
                        <h4 className="text-warning">Price: {price} </h4>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;