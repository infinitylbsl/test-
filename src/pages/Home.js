import React from 'react';
import Hero from '../components/Hero';
import PartnerSection from '../components/PartnerSection';
import AppSection from '../components/AppSection';

const Home = () => {
    return (
        <main className="homepage-wrapper">
            <Hero />
            <PartnerSection />
            <AppSection />
        </main>
    );
};

export default Home;