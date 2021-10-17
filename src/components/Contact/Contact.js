import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <div className="row">
                    <h1 className="text-center">Contact with us</h1>
                    <div className="col-md-6">
                        
                        <div className="p-5">
                            <form>
                                <input className="mt-3" type="text" placeholder="Enter your name" />
                                <br />
                                <input className="mt-3" type="email" placeholder="Email" />
                                <br />
                                <input className="mt-3" type="password" placeholder="Password" />
                                <br />
                                <input className="mt-3 btn-danger px-5 py-2 fw-bold" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="w-100" src="https://i.ibb.co/FVMcnDp/undraw-contact-us-15o2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;