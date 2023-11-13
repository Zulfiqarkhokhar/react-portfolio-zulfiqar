import React from 'react';
import HeroSection from "./HeroSection";
import Project from "./Projects";
import {BuyerReview, SellerReview} from "./Reviews";
import Contact from "./Contact";


const WelcomePage = () => {
    return (
        <>
            <HeroSection/>
            <Project/>
            <BuyerReview/>
            <SellerReview/>
            <Contact/>
        </>
    );
};

export default WelcomePage;