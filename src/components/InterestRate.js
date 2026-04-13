"use client";
import { useState, useEffect } from "react";
import "./InterestRate.css";
import { FaFilePdf, FaDownload, FaCalendarAlt, FaEye } from "react-icons/fa";

export default function InterestRate() {
  // 1. STATE MANAGEMENT
  const [currentRates, setCurrentRates] = useState({
    effectiveDate: "2082/09/30", 
    baseRate: "12.52%",           
    savings: [
      { name: "Asal Bachat (असल वचत)", rate: "7.20%" }, 
      { name: "Special Bachat (विशेष बचत)", rate: "7.50%" }, 
      { name: "Sunaulo Bhawishya (सुनौलो भविष्य)", rate: "7.99%" },
      { name: "Individual/Group/Daily", rate: "7.20%" }, 
    ],
    loans: [
      { name: "General/Micro-Enterprise (Fixed)", rate: "14.38%" },
      { name: "Business/Seasonal (Fixed)", rate: "14.38%" }, 
      { name: "Adjustable Rate", rate: "Base + 1.86%" }, 
    ],
  });

  const pdfArchive = [
    { year: "2082/83", months: ["Shrawan", "Ashoj", "Poush", "Chaitra", "Magh"] },
    { year: "2081/82", months: ["Full Year Archive"] },
    { year: "2080/81", months: ["Full Year Archive"] },
  ];

  const [selectedYear, setSelectedYear] = useState(pdfArchive[0].year);

  // 2. FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://infinitylbsl.com.np/api/rates');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        if (data.length > 0) {
          const savings = data.filter(r => r.category === 'saving');
          const loans = data.filter(r => r.category === 'loan');
          setCurrentRates({
            effectiveDate: data[0].effective_date,
            baseRate: "12.52%", // You can also put this in the DB
            savings: savings.length > 0 ? savings : currentRates.savings,
            loans: loans.length > 0 ? loans : currentRates.loans,
          });
        }
      } catch (error) {
        console.error("Error fetching rates, using fallback data:", error);
      }
    };
    fetchRates();
  }, []);

  const activeYearData = pdfArchive.find((a) => a.year === selectedYear);

  return (
    <div className="interest-page">
      <div className="interest-hero">
        <h1>Rates & Charges</h1>
        <p>Official interest rates for Infinity Laghubitta Bittiya Sanstha Ltd.</p>
      </div>

      <div className="interest-content">
        <aside className="archive-sidebar">
          <h3><FaCalendarAlt /> Archive</h3>
          <ul>
            {pdfArchive.map((item) => (
              <li
                key={item.year}
                className={selectedYear === item.year ? "active" : ""}
                onClick={() => setSelectedYear(item.year)}
              >
                F.Y. {item.year}
              </li>
            ))}
          </ul>
        </aside>

        <main className="details-main">
          <div className="current-summary">
            <h2>Interest Rates (Effective: {currentRates.effectiveDate})</h2>
            <div className="rate-brief-grid">
              <div className="brief-box">
                <span>Avg. Base Rate</span>
                <h4>{currentRates.baseRate}</h4>
              </div>
              <div className="brief-box">
                <span>Loan (Fixed Rate)</span>
                <h4>14.38%</h4>
              </div>
            </div>
          </div>

          <div className="details-table">
            <h3>Detailed Interest Breakdown</h3>
            <div className="table-grid">
              <div className="table-box">
                <h4>Savings</h4>
                <ul>
                  {currentRates.savings.map((item, i) => (
                    <li key={i}>
                      <span>{item.name}</span>
                      <span className="text-green">{item.rate}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="table-box">
                <h4>Loans</h4>
                <ul>
                  {currentRates.loans.map((item, i) => (
                    <li key={i}>
                      <span>{item.name}</span>
                      <span className="text-blue">{item.rate}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pdf-section">
            <h3>Official Notices ({selectedYear})</h3>
            <div className="pdf-list">
              {activeYearData?.months.map((month, index) => {
                const yearFile = selectedYear.replace("/", "-");
                const monthFile = month.toLowerCase().replace(/\s+/g, "-");
                const filePath = `/assets/pdf/interest/rate-${yearFile}-${monthFile}.pdf`;
                
                return (
                  <div key={index} className="pdf-card">
                    <div className="pdf-info">
                      <FaFilePdf className="pdf-icon-blue" />
                      <span>{month} Notice</span>
                    </div>
                    <div className="action-buttons">
                      <a href={filePath} target="_blank" rel="noopener noreferrer" className="btn-view">
                        <FaEye /> View
                      </a>
                      <a href={filePath} download={`Rate_${yearFile}_${monthFile}.pdf`} className="btn-download">
                        <FaDownload /> Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}