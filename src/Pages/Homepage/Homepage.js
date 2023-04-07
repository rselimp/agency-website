import React from 'react';
import Services from './HomeSection/Services/Services';
import Count from './HomeSection/Count/Count';
import Animation from './HomeSection/Animation/Animation';
import Offer from './HomeSection/Offer/Offer';
import Footer from '../Footer/Footer';
import Sliders from './HomeSection/Sliders/Sliders'

const Homepage = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Services></Services>
            <Count></Count>
            <Animation></Animation>
            <Offer></Offer>
            <Footer></Footer>
           
        </div>
    );
};

export default Homepage;