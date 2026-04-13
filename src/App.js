import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import NoticeBar from './components/NoticeBar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Investor from './pages/InvestorRelation'; 
import Gallery from './pages/Gallery'; 
import Branches from './pages/Branches';
import Contact from './components/Contact';
import Career from './components/Career';
import SupportTeam from './pages/SupportTeam';
import Grievance from './pages/Grievance';
import NewsNotices from './pages/News&Notice';
import ContentListView from './pages/ContentListView';
import InterestRate from './components/InterestRate';
import PaymentPartner from './components/PaymentPartner';

// 1. IMPORT THE NEW COMPONENT
import LastVisited from './components/LastVisited';
import Popup from './components/Popup/Popup';

// Wrapper to handle the home-page-only logic
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Popup />
      <LastVisited />
      <ScrollToHandler />
      <Navbar />
      <NoticeBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/investor-relations" element={<Investor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/support" element={<SupportTeam />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/news-notices" element={<NewsNotices />} />
        <Route path="/news" element={<ContentListView title="Latest News" type="News" />} />
        <Route path="/notices" element={<ContentListView title="Official Notices" type="Notice" />} />
        <Route path="/interest-rates" element={<InterestRate />} />
      </Routes>

      {/* Show PaymentPartner ONLY on the home page */}
      {isHomePage && <PaymentPartner />}
      
      <Footer />
    </div>
  );
}

function ScrollToHandler() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
      }, 150); 
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;