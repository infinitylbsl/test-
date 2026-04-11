// src/components/AppSection.js
import React from 'react';
import './AppSection.css';
import mbapp from '../assets/mbapp.jpg';

const AppSection = () => {
    const paymentServices = [
        { label: "Electricity", icon: "💡" },
        { label: "Flights", icon: "✈️" },
        { label: "International", icon: "🌍" },
        { label: "Water", icon: "💧" },
        { label: "Internet", icon: "📶" },
        { label: "TV", icon: "📺" },
        { label: "EMI", icon: "📅" },
        { label: "Capital", icon: "📊" },
        { label: "Cable Car", icon: "🚡" }
    ];

    // Your Google Drive Link
    const androidLink = "https://drive.google.com/uc?export=download&id=1uZGvv_u812nVyZ7dh0p_nQKB6znQ4xOW"; // Replace with your actual ID if this one is a placeholder
    const iosLink = "https://apps.apple.com/us/app/info-mdabali/id1338667402";

    return (
        <section className="inf-app-section">
            <div className="inf-app-container">
                {/* Left Side: App Download */}
                <div className="inf-left">
                    <h1>Download <span>App</span></h1>
                    <p>Experience fast and secure digital banking with Infinity Laghubitta. Pay bills, recharge, and manage services easily.</p>
                    <div className="inf-buttons">
                        {/* Android Button using mDabali Logo */}
                        <a href={androidLink} target="_blank" rel="noreferrer" className="inf-android-btn">
                            <img src={mbapp} alt="mDabali Logo" className="btn-logo" />
                            <div className="btn-text">
                                <small>Download for</small>
                                <span>Android</span>
                            </div>
                        </a>

                        {/* App Store Button */}
                        <a href={iosLink} target="_blank" rel="noreferrer">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                        </a>
                    </div>
                </div>

                {/* Center: Phone Mockup */}
                <div className="inf-center">
                    <img className="inf-phone" src={mbapp} alt="App Preview" />
                </div>

                {/* Right Side: Quick Links */}
                <div className="inf-right">
                    <h2>Direct Payment</h2>
                    <div className="inf-grid">
                        {paymentServices.map((service, index) => (
                            <a key={index} className="inf-item" href={iosLink} target="_blank" rel="noreferrer">
                                <div className="inf-circle">{service.icon}</div>
                                <div className="inf-label">{service.label}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppSection;