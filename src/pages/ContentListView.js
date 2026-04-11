import React from 'react';
import { Link } from 'react-router-dom'; // Added for navigation
import './News&Notice.css'; 

const ContentListView = ({ title, type }) => {
    const items = [
        { id: 1, title: `${type}: Yearly Progress Report`, date: "2026-04-01", fileUrl: "#" },
        { id: 2, title: `${type}: Interest Rate Update`, date: "2026-03-20", fileUrl: "#" },
    ];

    return (
        <div className="content-view-container">
            <div className="content-header">
                {/* Back Button to return to the main News & Notices Hub */}
                <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <Link to="/news-notices" className="back-link">
                        ← Back to News & Notices
                    </Link>
                </div>
                
                <h2>{title}</h2>
                <p>Official {type} documents from Infinity Laghubitta Bittiya Sanstha Ltd.</p>
            </div>

            <div className="item-list">
                {items.length > 0 ? (
                    items.map(item => (
                        <div key={item.id} className="content-item">
                            <div className="item-info">
                                <span className="item-date">{item.date}</span>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="item-actions">
                                <a href={item.fileUrl} target="_blank" rel="noreferrer" className="action-btn view">View</a>
                                <a href={item.fileUrl} download className="action-btn download">Download</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-data">
                        <p>Currently, there are no {type.toLowerCase()} to display.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentListView;