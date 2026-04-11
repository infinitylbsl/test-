import React from 'react';
import { Link } from 'react-router-dom';
import './InvestorRelation.css';


const Reports = () => {
    // Content extracted from your reports.html file
    const reportCategories = [
        {
            title: "Annual Report",
            description: "View audited financial statements and yearly growth reports.",
            icon: "📊",
            link: "/annual-reports",
            bgColor: "#e3f2fd"
        },
        {
            title: "Quarterly Report",
            description: "Access mid-year financial disclosures and performance reviews.",
            icon: "📉",
            link: "/quarterly-reports",
            bgColor: "#e8f5e9"
        },
        {
            title: "AGM Minutes",
            description: "Records and resolutions from our Annual General Meetings.",
            icon: "⚖️",
            link: "/agm-minutes",
            bgColor: "#fff3e0"
        },
        {
            title: "Black/White List",
            description: "Official lists and regulatory compliance documents.",
            icon: "📋",
            link: "/listing",
            bgColor: "#f3e5f5"
        }
    ];

    return (
        <div className="investor-wrapper">
            <h1 className="investor-header">Investor Relations</h1>

            <div className="investor-grid">
                {reportCategories.map((item, index) => (
                    <Link to={item.link} key={index} className="investor-card">
                        <div className="card-icon-box" style={{ backgroundColor: item.bgColor }}>
                            {item.icon}
                        </div>
                        <div className="card-text">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Reports;