import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa'; // Install react-icons if you haven't
import './InterestRate.css';

const InterestRate = () => {
    // Current active rates (Update these monthly)
    const currentRates = {
        effectiveDate: "2082-12-01 (March 2026)",
        baseRate: "11.23%",
        savings: "7.50% - 10.00%",
        loans: "Base Rate + Up to 5% (Max 15%)"
    };

    // PDF Archive - Add your year-wise files here
    const rateNotices = [
        { year: "2082/83", month: "Chaitra", link: "/assets/pdf/rates/2082-chaitra.pdf" },
        { year: "2082/83", month: "Falgun", link: "/assets/pdf/rates/2082-falgun.pdf" },
        { year: "2081/82", month: "Annual Archive", link: "/assets/pdf/rates/2081-full.pdf" },
        { year: "2080/81", month: "Annual Archive", link: "/assets/pdf/rates/2080-full.pdf" },
    ];

    return (
        <div className="interest-container">
            <div className="interest-card">
                <h2>Current Interest Rates</h2>
                <p className="effective-date">Effective Date: {currentRates.effectiveDate}</p>
                
                <div className="quick-stats">
                    <div className="stat-box">
                        <span>Base Rate</span>
                        <h3>{currentRates.baseRate}</h3>
                    </div>
                    <div className="stat-box">
                        <span>Savings Rate</span>
                        <h3>{currentRates.savings}</h3>
                    </div>
                </div>

                <hr />

                <h3>Year-wise Official Notices (PDF)</h3>
                <div className="pdf-grid">
                    {rateNotices.map((notice, index) => (
                        <div key={index} className="pdf-item">
                            <div className="pdf-info">
                                <FaFilePdf className="pdf-icon" />
                                <div>
                                    <p className="fiscal-year">F.Y. {notice.year}</p>
                                    <p className="notice-month">{notice.month} Notice</p>
                                </div>
                            </div>
                            <a href={notice.link} target="_blank" rel="noreferrer" className="download-btn">
                                <FaDownload /> Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterestRate;