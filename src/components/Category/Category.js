import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';

const Category = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/faakedata.json')
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, []);

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h5>Our products</h5>
                <h1>Shop by category</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ducimus excepturi. Doloribus sapiente eligendi, aliquam porro sint atque ducimus, vero assumenda eveniet, minus ullam placeat vitae quibusdam exercitationem laudantium veniam.</p>
                <button type="button" class="btn btn-info text-light">New arrivals</button>
                <button type="button" class="btn btn-info text-light m-4">Featured</button>
                <button type="button" class="btn btn-info text-light">Best seller</button>
            </div>
            <div className="row">
                {
                    equipments.map(equipment => <Equipment
                        key={equipment.id}
                        equipment={equipment}
                    />)
                }
            </div>
        </div>
    );
};

export default Category;