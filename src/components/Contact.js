import React from 'react';
import './Contact.css'; // We will create this next

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <div className="contact-container animated">
                <h2 className="title">Contact Us</h2>
                <div className="contact-card">
                    <div className="contact-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt="Support" />
                    </div>
                    <h3>Customer Support</h3>
                    
                    <div className="contact-methods">
                        {/* Email - opens mail app */}
                        <div className="contact-item">
                            <span className="label">Email:</span>
                            <a href="mailto:info@infinitylbsl.com" className="contact-link">
                                info@infinitylbsl.com
                            </a>
                        </div>

                        {/* Phone - opens dialer */}
                        <div className="contact-item">
                            <span className="label">Phone:</span>
                            <div className="phone-group">
                                <a href="tel:+97715971871" className="contact-link">078503301</a>, 
                                <a href="tel:+97715970015" className="contact-link"> 078503144</a>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;