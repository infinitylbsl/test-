import React from 'react';
import { useNavigate } from 'react-router-dom';
import './News&Notice.css';

const NewsNotices = () => {
    const navigate = useNavigate();

    return (
        <div className="news-notice-container">
            <div className="news-notice-header">
                <h1>News & Notices</h1>
                <p>Stay updated with the latest happenings and official announcements from Infinity Laghubitta.</p>
            </div>

            <div className="selection-grid">
                {/* News Section */}
                <div className="selection-card news-card" onClick={() => navigate('/news')}>
                    <div className="card-icon">📰</div>
                    <h2>Latest News</h2>
                    <p>Read about our recent events, press releases, and community engagement activities.</p>
                    <button className="view-btn">View All News</button>
                </div>

                {/* Notice Section */}
                <div className="selection-card notice-card" onClick={() => navigate('/notices')}>
                    <div className="card-icon">🔔</div>
                    <h2>Official Notices</h2>
                    <p>Check for AGM updates, interest rate changes, and other official announcements.</p>
                    <button className="view-btn">View All Notices</button>
                </div>
            </div>
        </div>
    );
};

export default NewsNotices;