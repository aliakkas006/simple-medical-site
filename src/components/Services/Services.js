import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/CategoryData.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <>
            <div className="container mt-5">

                <div className="text-center">
                    <h6>PREVENTION</h6>
                    <h1>How to prevent your self</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ea consequatur labore, aspernatur unde ipsa quidem possimus? Dolorum possimus iure blanditiis dolor repellat reprehenderit earum consequuntur, quasi, illo commodi inventore!</p>
                </div>

                <div className="services-cart">
                    <div className="row">
                        {
                            categories.map(category => <Service
                                key={category.id}
                                category={category}
                            />)
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Services;