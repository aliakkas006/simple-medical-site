import React from 'react';
import { useParams } from 'react-router';

const Servicing = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Servicing No: {serviceId} </h2>
        </div>
    );
};

export default Servicing;