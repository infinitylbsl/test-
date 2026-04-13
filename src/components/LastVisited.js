import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LastVisited.css';

// Move this OUTSIDE the component to fix the ESLint warning
const routeNames = {
    '/': 'Home',
    '/about': 'About Us',
    '/services': 'Services',
    '/investor-relations': 'Investor Relations',
    '/gallery': 'Gallery',
    '/branches': 'Branches',
    '/contact': 'Contact',
    '/career': 'Career',
    '/support': 'Support Team',
    '/grievance': 'Grievance',
    '/news-notices': 'News & Notices',
    '/interest-rates': 'Interest Rates'
};

const LastVisited = () => {
    const [lastData, setLastData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const savedData = localStorage.getItem('userLastVisit');
        const currentPath = location.pathname;

        if (savedData) {
            const parsedData = JSON.parse(savedData);
            if (parsedData.path !== currentPath) {
                setLastData(parsedData);
                setIsVisible(true);
            }
        }

        const visitDetails = {
            path: currentPath,
            title: routeNames[currentPath] || 'Previous Page',
            time: new Date().toLocaleString([], { 
                month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
            })
        };
        localStorage.setItem('userLastVisit', JSON.stringify(visitDetails));
    }, [location.pathname]); // No warning now!

    if (!isVisible || !lastData) return null;

    return (
        <div className="lv-card">
            <div className="lv-top-bar">
                <span>Last visited: {lastData.time}</span>
                <button className="lv-close-btn" onClick={() => setIsVisible(false)}>×</button>
            </div>
            <div className="lv-content">
                <Link to={lastData.path} className="lv-action-link" onClick={() => setIsVisible(false)}>
                    Return to {lastData.title}
                </Link>
            </div>
        </div>
    );
};

export default LastVisited;