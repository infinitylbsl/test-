import React from 'react';
import './PaymentPartner.css'; 

// FIX: Change 'khalti.png' to 'Khalti.png' to match your disk exactly
import Esewa from '../assets/esewa.png';
import Khalti from '../assets/Khalti.png'; // Updated this line
import ConnectIPS from '../assets/connectips.png';

const PaymentPartner = () => {
    const partners = [
        {
           
            logo: Esewa,
            desc: "Nepal's first and leading online payment gateway."
        },
        {
           
            logo: Khalti,
            desc: "An easy-to-use digital wallet for all your payments."
        },
        {
            
            logo: ConnectIPS,
            desc: "Single platform for direct bank-to-bank transfers."
        }
    ];

    return (
        <section className="partner-section">
            <div className="container">
                <h2>Digital Payment Partners</h2>
                <div className="partner-grid">
                    {partners.map((partner, index) => (
                        <div className="partner-card" key={index}>
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=Logo+Missing'}}
                            />
                            <h3>{partner.name}</h3>
                            <p>{partner.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentPartner;