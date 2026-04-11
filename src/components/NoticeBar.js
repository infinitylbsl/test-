import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './NoticeBar.css';

const NoticeBar = () => {
  const location = useLocation();

  // ONLY SHOW ON HOMEPAGE
  // This checks if the current URL path is exactly "/"
  if (location.pathname !== "/") {
    return null; 
  }

  const noticeData = {
    badge: "LATEST NOTICE",
    message: "We’re currently improving our website to serve you better. Thank you for your patience.",
   
   
  };




  return (
    <div className="notice-bar-container">
      <div className="notice-wrapper">
        <span className="notice-badge">{noticeData.badge}</span>
        <div className="marquee-container">
          <div className="scrolling-text">
            {noticeData.message} &nbsp;&nbsp;
            <a href={noticeData.linkUrl} className="notice-link">{noticeData.linkText}</a>
            {/* Repeat for seamless loop */}
            &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
            {noticeData.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;