import React from 'react'; 
import './PartnerSection.css'; 

// 1. These imports create valid URLs/paths during build
import Ime from '../assets/Ime.png';
import City from '../assets/cityr.jpg';
import Prabhu from '../assets/prabhur.png';

const PartnerSection = () => {
    // 2. Use the imported variables directly in your array
    const partners = [
        {
            name: "IME Remit",
            img: Ime, // Use the variable, not the string path
            desc: "A pioneer in the remittance industry, providing a secure gateway for your family instantly."
        },
        {
            name: "City Express",
            img: City,
            desc: "Ensuring your smile with every transaction through wide-reaching networks."
        },
        {
            name: "Prabhu Money",
            img: Prabhu,
            desc: "Connecting Nepalese globally with a seamless and trusted remittance experience."
        }
    ];

    return (
        <section className="partner-section">
            <div className="container">
                <h2>Our Remittance Partners</h2>
                <p>Secure, fast, and reliable money transfer services.</p>
                <div className="partner-grid">
                    {partners.map((partner, index) => (
                        <div className="partner-card" key={index}>
                            <img src={partner.img} alt={partner.name} />
                            <h3>{partner.name}</h3>
                            <p>{partner.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;