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
import NewsNotices from './pages/News&Notice'; // Corrected import
import ContentListView from './pages/ContentListView';

// 1. IMPORT THE POPUP COMPONENT
import Popup from './components/Popup/Popup';

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
      <div className="App">
        {/* 2. ADD THE POPUP COMPONENT HERE */}
        <Popup />

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;