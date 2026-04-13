import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
import ceoImg from '../assets/ceo-sir.jpg';
import kpkImg from '../assets/kpk.png';
import RBImage from '../assets/RB.png';
import AsImage from '../assets/AS.jpg';
import SKGImage from '../assets/SKG.jpg';

function About() {
    const [activeTab, setActiveTab] = useState('org');
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const hashToTab = {
                '#org-section': 'org',
                '#ovm-section': 'ovm',
                '#bod-section': 'board',
                '#management-section': 'management'
            };

            const targetTab = hashToTab[hash];
            if (targetTab) {
                setActiveTab(targetTab);
                const timer = setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [hash]);

    const tabs = [
        { id: 'org', label: 'Our Organization' },
        { id: 'ovm', label: 'Vision & Mission' },
        { id: 'capital', label: 'Capital Structure' },
        { id: 'board', label: 'Board Of Directors' },
        { id: 'ceo', label: 'CEO Message' },
        { id: 'management', label: 'Management' },
        { id: 'support', label: 'Support' }
    ];

    return (
        <div className="about-wrapper">     
            <div className="about-hero"></div>

            <nav className="about-nav">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={activeTab === tab.id ? 'nav-btn active' : 'nav-btn'}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            <div className="about-content-area">

                {/* --- ORGANIZATION PORTFOLIO --- */}
                {activeTab === 'org' && (
                    <div id="org-section" className="content-box animated">
                        <h2 className="title">Organization Portfolio</h2>
                        <p className="subtitle">Your trusted partner in financial empowerment</p>
                        <div className="grid-4">
                            <div className="card"><h3>5.71 Arba</h3><p>Total Loan</p></div>
                            <div className="card"><h3>1.33 Arba</h3><p>Total Savings</p></div>
                            <div className="card"><h3>9,604</h3><p>Total Centers</p></div>
                            <div className="card"><h3>1,05,820</h3><p>Total Members</p></div>
                        </div>
                    </div>
                )}

                {/* --- VISION & MISSION --- */}
                {activeTab === 'ovm' && (
                    <div id="ovm-section" className="content-box animated">
                        <h2 className="title">Our Purpose</h2>
                        <div className="grid-3">
                            <div className="card">
                                <h3>Objective</h3>
                                <p>ILBSL aims to empower Nepal’s underserved communities by fostering self-reliance and independence.</p>
                            </div>
                            <div className="card">
                                <h3>Vision</h3>
                                <p>To build a sustainable and inclusive society by promoting economic independence among Nepal’s marginalized populations.</p>
                            </div>
                            <div className="card">
                                <h3>Mission</h3>
                                <p>To provide sustainable microfinance services to needy and underserved families across Nepal.</p>
                            </div>
                            <div className="card">
                                <h3>Goals</h3>
                                <p>We aim to empower households by using proven technology and delivery methods, promoting financial literacy and inclusion.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- CAPITAL STRUCTURE --- */}
                {activeTab === 'capital' && (
                    <div className="content-box animated">
                        <h2 className="title">Capital Structure</h2>
                        <div className="grid-3">
                            <div className="card"><h3>Rs. 700 M</h3><p>Authorized Capital</p></div>
                            <div className="card"><h3>Rs. 497.41 M</h3><p>Issued Capital</p></div>
                            <div className="card"><h3>Rs. 497.41 M</h3><p>Paid-up Capital</p></div>
                        </div>
                        <div className="ownership-banner">
                            <div className="owner-part blue">
                                <strong>Group A: Promoters (67.5%)</strong>
                                <p>112 diverse promoters from across the country hold 67.5% of the shares.</p>
                            </div>
                            <div className="owner-part green">
                                <strong>Group B: Public (32.5%)</strong>
                                <p>The remaining 32.5% of shares are issued to the public.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- BOARD OF DIRECTORS --- */}
                {activeTab === 'board' && (
                    <div id="bod-section" className="content-box animated">
                        <h2 className="title">Board of Directors</h2>
                        <div className="grid-3">
                            <div className="card member">
                                <div className="img-holder">BG</div>
                                <h3>Mr. Bishnu Kumar Ghimire</h3>
                                <h4>Chairman</h4>
                                <p>M.A, M.Ed., B.L from Tribhuvan University. Joined: Poush 30, 2082</p>
                            </div>
                            <div className="card member">
                                <div className="img-holder">RKD</div>
                                <h3>Mr. Ram Krishna Dangol</h3>
                                <h4>Director</h4>
                                <p>Bachelor’s in Commerce. 20 years of business experience. Joined: Poush 30, 2082</p>
                            </div>
                            <div className="card member">
                                <div className="img-holder">RK</div>
                                <h3>Mr. Ramesh Kumar Karmacharya</h3>
                                <h4>Director</h4>
                                <p>Bachelor’s in Commerce. 20 years of business experience. Joined: Poush 30, 2082</p>
                            </div>
                            <div className="card member">
                                <div className="img-holder">ST</div>
                                <h3>Advocate Shashi Timalsina</h3>
                                <h4>Director</h4>
                                <p>Master’s in Rural Development. 13 years of financial experience. Joined: Poush 30, 2082</p>
                            </div>
                            <div className="card member">
                                <div className="img-holder">PK</div>
                                <h3>Mrs. Parva Khanal</h3>
                                <h4>Director</h4>
                                <p>Bachelor’s in Business Studies. Business owner. Joined: Poush 28, 2080</p>
                            </div>
                            <div className="card member">
                                <div className="img-holder">MPB</div>
                                <h3>Mr. Mukunda Prasad Bhattarai</h3>
                                <h4>Director</h4>
                            </div>
                            <div className="card member">
                                <div className="img-holder">MPJ</div>
                                <h3>Mr. Maheshwar Prasad Joshi</h3>
                                <h4>Independent Director</h4>
                                <p>37 years of banking sector experience. Joined: Ashoj 7, 2079</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- CEO MESSAGE --- */}
                {activeTab === 'ceo' && (
                    <div className="ceo-flex animated">
                        <div className="ceo-img-side">
                            <div className="ceo-image">
                                <img src={ceoImg} alt="CEO Gyanishor Panta" className="ceo-profile-img" />
                            </div>
                        </div>
                        <div className="ceo-text-side">
                            <h2>Message from CEO</h2>
                            <h3>Gyanishor Panta</h3>
                            <p>At Infinity Laghubitta Bittiya Sanstha Limited (ILBSL), our mission is clear: to bridge the financial inclusion gap for Nepal’s rural and marginalized communities and to empower them toward sustainable economic growth. In a time marked by global economic shifts and evolving local regulations, ILBSL remains a steadfast partner, committed to enhancing livelihoods and fostering financial stability across the nation. The microfinance sector faces unprecedented challenges, but at ILBSL we see these not as obstacles but as opportunities to innovate and transform. By embracing digitization through mobile banking and digital lending, we are making our services seamless, accessible, and cost-effective for every client, no matter where they are. Our vision for sustainable growth rests on three foundational pillars: Digital Excellence, ESG Integration, and Talent Development. As we continue to expand our customer-centric products, we are deeply grateful to the Government of Nepal, Nepal Rastra Bank, and our dedicated staff for their unwavering support. As CEO, I am honored to lead ILBSL into this next chapter, confident that together we are creating lasting pathways to prosperity.</p>
                        </div>
                    </div>
                )}

                {/* --- MANAGEMENT TEAM --- */}
                {activeTab === 'management' && (
                    <div id="management-section" className="management-wrapper animated">
                        <h2 className="title">Management Team</h2>
                        <div className="management-layout">
                            <div className="card member">
                                <img src={ceoImg} alt="Gyanishor Panta" className="profile-img" />
                                <h3>Gyanishor Panta</h3>
                                <h4>Chief Executive Officer</h4>
                            </div>
                            <div className="team-section">
                                <div className="card member">
                                    <img src={kpkImg} alt="Krishna Prasad Khanal" className="KPK-img" />
                                    <h3>Krishna Prasad Khanal</h3>
                                    <h4>Head Risk & Recovery Department</h4>
                                </div>
                                <div className="card member">
                                    <img src={AsImage} alt="Amarnath Sedhai" className="AS-img" />
                                    <h3>AmarNath Sedhai</h3>
                                    <h4>Head Credit Department</h4>
                                </div>
                                <div className="card member">
                                     <img src={SKGImage} alt="Subash Kumar Gupta" className="SKG-img" />
                                    <h3>Subash Kumar Gupta</h3>
                                    <h4>Head IT Department</h4>
                                </div>
                                <div className="card member">
                                    <div className="img-holder">KK</div>
                                    <h3>Kushal Khanal</h3>
                                    <h4>Head Monitoring Department</h4>
                                </div>
                                <div className="card member">
                                    <img src={RBImage} alt="Ritu Baniya" className="RB-img" />
                                    <h3>Ritu Baniya</h3>
                                    <h4>Head Finance and Operation</h4>
                                </div>
                                <div className="card member">
                                    <div className="img-holder">DN</div>
                                    <h3>Deepak Neupane</h3>
                                    <h4>Head Internal Audit Department</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SUPPORT TAB --- */}
                {activeTab === 'support' && (
                    <div className="support-container">
                        <h1 className="section-title">Our Departments</h1>
                        <div className="department-grid">
                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/906/906175.png" alt="IT Logo" />
                                    IT Department
                                </h2>
                                <div className="member">
                                    <strong>Prabin Kafle</strong><br />
                                    Contact: 078-503301 Ext-109<br />
                                    Email: prabin.kafle@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Susmita Adhikari</strong><br />
                                    Contact: 078-503301 Ext-107<br />
                                    Email: susmita.adhikari@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Sujit Dhakal</strong><br />
                                    Contact: 078-503301 Ext-107<br />
                                    Email: sujit.dhakal@infinitylbsl.com.np
                                </div>
                            </div>

                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2950/2950225.png" alt="Finance Logo" />
                                    Finance Department
                                </h2>
                                <div className="member">
                                    <strong>Padam Raj Sigdel</strong><br />
                                    Contact: 078-503301 Ext-104<br />
                                    Email: padam.sigdel@infnitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Dhiraj Chaudhary</strong><br />
                                    Contact: 078-503301 Ext-102<br />
                                    Email: dhiraj.chaudhary@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Kamala Acharya</strong><br />
                                    Contact: 078-503301 Ext-103<br />
                                    Email: kamala.acharya@infinitylbsl.com.np
                                </div>
                            </div>

                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Operation Logo" />
                                    Operation Department
                                </h2>
                                <div className="member">
                                    <strong>Padam Raj Sigdel</strong><br />
                                    Contact: 078-503301 Ext-104<br />
                                    Email: padam.sigdel@infnitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Krishna Poudel</strong><br />
                                    Contact: 078-503301 Ext-105<br />
                                    Email: krishna.poudel@infinitylbsl.com.np
                                </div>
                            </div>

                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="Credit Logo" />
                                    Credit Department
                                </h2>
                                <div className="member">
                                    <strong>Madhu Krishna Neupane</strong><br />
                                    Contact: 078-503301 Ext-111<br />
                                    Email: madhu.neupane@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Smritee Pandey</strong><br />
                                    Contact: 078-503301 Ext-112<br />
                                    Email: smritee.pandey@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Parbati Kunwar</strong><br />
                                    Contact: 078-503301 Ext-114<br />
                                    Email: parbati.kunwar@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Pramila Subedi</strong><br />
                                    Contact: 078-503301 Ext-114<br />
                                    Email: pramila.subedi@infinitylbsl.com.np
                                </div>
                            </div>

                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135710.png" alt="HR Logo" />
                                    HR Department
                                </h2>
                                <div className="member">
                                    <strong>Prakash Shrestha (Unit Head)</strong><br />
                                    Contact: 078-503301 Ext-119<br />
                                    Email: prakash.shrestha@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Sarita Kumari Bista</strong><br />
                                    Contact: 078-503301 Ext-119<br />
                                    Email: sarita.bista@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Mun Prasad Devkota</strong><br />
                                    Contact: 9855047838<br />
                                    Email: mun.devkota@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Kala Nepal</strong><br />
                                    Contact: 078-503301 Ext-101<br />
                                    Email: kala.nepal@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Mahesh Bhattarai</strong><br />
                                    Contact: 078-503301 Ext-101<br />
                                    Email: info@infinitylbsl.com.np
                                </div>
                            </div>

                            <div className="department-card">
                                <h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910763.png" alt="Monitoring Logo" />
                                    Risk, Monitoring & Recovery
                                </h2>
                                <div className="member">
                                    <strong>Bishnu Basyal (Unit Head)</strong><br />
                                    Contact: 078-503301 Ext-124<br />
                                    Email: bishnu.basyal@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Usha Shrestha</strong><br />
                                    Contact: 078-503301 Ext-128<br />
                                    Email: usha.shrestha@infinitylbsl.com.np
                                </div>
                                <div className="member">
                                    <strong>Sudika Thapa</strong><br />
                                    Contact: 078-503301 Ext-106<br />
                                    Email: sudika.thapa@infinitylbsl.com.np
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;