import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LastVisited.css';

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

        // 1. Check if we have data from a previous page
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Only prepare the popup data if we aren't currently on the saved path
            if (parsedData.path !== currentPath) {
                setLastData(parsedData);
                setIsVisible(true);
            }
        }

        // 2. ALWAYS record the current page, so the NEXT time they go home, it's updated
        const visitDetails = {
            path: currentPath,
            title: routeNames[currentPath] || 'Previous Page',
            time: new Date().toLocaleString([], { 
                month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
            })
        };
        localStorage.setItem('userLastVisit', JSON.stringify(visitDetails));
    }, [location.pathname]);

    // FIX: Only render the visual card if we are on the Home page ('/')
    // If path is anything else (like /about), return null to hide it.
    if (!isVisible || !lastData || location.pathname !== '/') {
        return null;
    }

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