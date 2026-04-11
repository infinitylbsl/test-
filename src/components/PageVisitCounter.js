import React, { useState, useEffect } from 'react';

const PageVisitCounter = () => {
    const [visits, setVisits] = useState('...');

    useEffect(() => {
        // We use a simple, modern hit counter API
        // This tracks visits specifically for your domain
        const domain = "infinitylbsl.com.np";

        fetch(`https://api.countapi.it/hit/${domain}/visits`)
            .then((res) => res.json())
            .then((data) => {
                // Formatting the number with commas (e.g., 1,250 instead of 1250)
                setVisits(data.value.toLocaleString());
            })
            .catch((err) => {
                console.error("Counter Error:", err);
                setVisits('Active'); // Fallback text
            });
    }, []);

    const style = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#f4f7f9',
        border: '1px solid #d1d9e0',
        borderRadius: '6px',
        color: '#333',
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const countStyle = {
        color: '#004a99', // Banking Blue
        fontWeight: 'bold',
        marginLeft: '8px',
        fontSize: '16px'
    };

    return (
        <div style={style}>
            <span>Total Visitors:</span>
            <span style={countStyle}>{visits}</span>
        </div>
    );
};

export default PageVisitCounter;