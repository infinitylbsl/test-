import React, { useState, useEffect } from 'react';
import './Popup.css';

// Fixed path: Up two levels to src, then into assets
import popupImage from '../../assets/Popup.png'; 

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a 2-second delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    
    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" onClick={() => setShowPopup(false)}>
      {/* stopPropagation prevents closing when clicking inside the white box */}
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setShowPopup(false)}>
          &times;
        </button>
        
        {/* THE PHOTO */}
        <img src={popupImage} alt="Notice" className="popup-photo" />
        
        
        
       
      </div>
    </div>
  );
};

export default Popup;