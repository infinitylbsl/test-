import React, { useState, useEffect } from 'react';
import './Hero.css';



import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';

import Img4 from '../assets/img4.jpeg';

import mb from '../assets/mbimg.png';


const Hero = () => {
    const slides = [
        { id: 1, url: Img1 },
        { id: 2, url: Img2 },
      
        { id: 4, url: Img4 },
      
        {id: 6, url: mb  }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); 
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero-container">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        className={index === current ? "slide active" : "slide"}
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    >
                        {/* Overlay remains for a subtle clean look but no text inside */}
                        <div className="hero-overlay"></div>
                    </div>
                ))}
            </div>
            
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={index === current ? "dot active" : "dot"}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;