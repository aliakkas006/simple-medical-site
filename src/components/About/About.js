import React from 'react';
import kit from '../../images/Banner&Background/kit.png';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="about-section mt-5">
                <div className="row">

                    <div className="col-md-6">
                        <div>
                            <img className="w-100" src={kit} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-5 mt-5">
                            <h3>About us</h3>
                            <h1 className="text-info">Medical equipment and kit</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos inventore omnis minus, quaerat numquam quis molestiae neque labore obcaecati dolorem nesciunt soluta, aliquam impedit quibusdam nobis tenetur nemo quia.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;