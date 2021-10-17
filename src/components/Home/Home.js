import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../shared/Footer/Footer';
import Menubar from '../shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Services />
            <About />
            <Category />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;