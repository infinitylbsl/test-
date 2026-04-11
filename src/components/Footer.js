import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import PageVisitCounter from './PageVisitCounter';

const Footer = () => {
    return (
        <footer className="Infinity-footer">
            <div className="footer-container">
                {/* Links Section */}
                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h3>About Us</h3>
                       <ul>
        <li><Link to="/about#org-section">Introduction</Link></li>
        <li><Link to="/about#ovm-section">Vision & Values</Link></li>
        <li><Link to="/about#bod-section">Board of Directors</Link></li>
        <li><Link to="/about#management-section">Management Team</Link></li>
    </ul>
                    </div>


                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/grievance">Grievance Handling</Link></li>
                            <li><Link to="/downloads">Downloads</Link></li>
                            <li><Link to="/branches">Branch Locator</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            
                            <li><Link to="/interest-rates">Interest Rates</Link></li>
                             <li><Link to="/interest-rates">Base Rates</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/reports">Investor Relations</Link></li>
                        </ul>
                    </div>
                </div>





                {/* Map Section - Integrated nicely */}
                <div className="footer-map-section">
                    <h3>Head Office Location</h3>
                    <div className="map-wrapper">
                        <iframe
                            title="Infinity Head Office"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8335473760234!2d84.3941566!3d27.7069694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb4e04000001%3A0x7d667c4b69d9c22d!2sInfinity%20Laghubitta%20Bittiya%20Sanstha%20Limited!5e0!3m2!1sen!2snp!4v1712560000000!5m2!1sen!2snp"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} IT-Department : Infinity Laghubitta Limited. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/infinitylbsl/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="IG" /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="TW" /></a>
                </div>
            </div>

            <div className="footer-bottom">
    
    <PageVisitCounter />
</div>


        </footer>
    );
};

export default Footer;