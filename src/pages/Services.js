import React from 'react';
import './Services.css'; // We will create this next
import SavingImg from '../assets/saving.png';
import LoanImg from '../assets/loan.png';
import RemittanceImg from '../assets/remittance.png';
import MobileBankingImg from '../assets/policy.png';        

const Services = () => {
    // Content extracted from your services.html file
    const serviceData = [
        {
            title: "Saving Account",
            description: "Secure your money with our flexible saving accounts. Enjoy higher interest rates and easy access to your funds.",
            image: SavingImg,
            
        },
        {
            title: "Loan Services",
            description: "Get personal, business, and agriculture loans with easy approval and flexible repayment options.",
            image: LoanImg,
            
        },
        {
            title: "Remittance",
            description: "Fast and secure remittance services with partners like IME, City Express, and Prabhu. Send and receive money easily.",
            image: RemittanceImg,
            
        },
        {
            title: "Mobile Banking",
            description: "Access your account anytime, anywhere. Pay bills, check balances, and transfer funds through our secure mobile banking app.",
            image: MobileBankingImg,
            
        }
    ];

    return (
        <div className="services-wrapper">
            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                {serviceData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-image-box" style={{ backgroundColor: service.bgColor }}>
                            {/* Ensure these images are in your public folder */}
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div className="service-text">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;