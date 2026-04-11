import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/lbslmain.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Clicking the logo redirects to Home */}
                <Link to="/" className="nav-logo-link">
                    <img src={logoImg} alt="Infinity Logo" className="nav-logo" />
                </Link>

                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/branches">Branches</Link></li>
                    <li><Link to="/investor-relations">Investor relations</Link></li>
                    
                    {/* FIXED: Path now matches App.js route */}
                    <li><Link to="/news-notices">News & Notice</Link></li>
                    
                    <li><Link to="/grievance">Grievance</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/career">Career</Link></li>
                    
                    <li><Link to="/loan-apply" className="nav-apply-btn">Loan Apply</Link></li>
                    
                    {/* Mail link stays as an 'a' tag because it's an external protocol */}
                    <li><a href="mailto:info@infinitylbsl.com.np" className="nav-mail-icon">Mail</a></li>
                </ul>

                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <>&#10005;</> : <>&#9776;</>}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;