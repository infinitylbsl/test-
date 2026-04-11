import React, { useState, useEffect } from 'react'; // Added useEffect
import './Career.css';

const Career = () => {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual domain URL
        fetch("https://yourwebsite.com/api/get_vacancies.php")
            .then(response => response.json())
            .then(data => {
                setVacancies(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching vacancies:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="career-page"><p style={{textAlign:'center'}}>Loading...</p></div>;

    // Logic: If the array from PHP has items, show the vacancy
    const hasVacancy = vacancies.length > 0;
    const portalUrl = hasVacancy ? vacancies[0].portal_url : "";

    return (
        <div className="career-page">
            <div className="career-hero">
                <h1>Work With Infinity</h1>
                <p>Build your career in the microfinance sector of Nepal.</p>
            </div>

            <div className="career-container">
                {!hasVacancy ? (
                    <div className="no-vacancy animated">
                        <div className="icon">📢</div>
                        <h2>Current Vacancies</h2>
                        <p>There are no open positions at the moment. However, we are always looking for talented individuals. Please send your CV to <strong>hr@infinity.com.np</strong> for future consideration.</p>
                    </div>
                ) : (
                    <div className="vacancy-portal-card animated">
                        <div className="badge">We Are Hiring!</div>
                        <h2>{vacancies[0].title}</h2> {/* Shows title from Database */}
                        <p>
                            We are looking for passionate individuals to join our growing team. 
                            Click the button below to view current openings and submit your 
                            application through our official recruitment portal.
                        </p>
                        
                        <div className="portal-action">
                            <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="portal-button">
                                Apply via Online Portal
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Career;