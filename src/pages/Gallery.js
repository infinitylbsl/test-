import React from 'react';
import './Gallery.css'; // Make sure this matches your CSS filename exactly

const Gallery = () => {
    // Ensure these files actually exist in src/assets/gallery/
    const images = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',

       
    ];

    return (
        <div className="gallery-wrapper">
            <div className="gallery-header">
                <h1>Our Gallery</h1>
                <p>Capturing moments of impact and community growth</p>
            </div>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className="gallery-item" key={index}>
                        <img 
                            // This path assumes Gallery.js is in src/pages/
                            // and images are in src/assets/gallery/
                            src={require(`../assets/gallery/${img}`)} 
                            alt={`Gallery ${index}`} 
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;