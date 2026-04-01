import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SolutionLienDoan from './pages/SolutionLienDoan';
import SolutionCauLacBo from './pages/SolutionCauLacBo';
import SolutionVoSinh from './pages/SolutionVoSinh';
import SolutionGiaiDau from './pages/SolutionGiaiDau';
import Pricing from './pages/Pricing';
import News from './pages/News';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NewsArticle from './pages/NewsArticle';
import NotFound from './pages/NotFound';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Global reveal animation observer (replaces legacy app.js)
const RevealObserver: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all .reveal elements
    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observeAll();
    // Re-observe on DOM changes (for lazy-loaded content)
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ve-chung-toi" element={<AboutUs />} />
        <Route path="/giai-phap/lien-doan" element={<SolutionLienDoan />} />
        <Route path="/giai-phap/cau-lac-bo" element={<SolutionCauLacBo />} />
        <Route path="/giai-phap/vo-sinh" element={<SolutionVoSinh />} />
        <Route path="/giai-phap/giai-dau" element={<SolutionGiaiDau />} />
        <Route path="/bang-gia" element={<Pricing />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/chinh-sach/bao-mat" element={<PrivacyPolicy />} />
        <Route path="/chinh-sach/dieu-khoan" element={<TermsOfService />} />
        <Route path="/tin-tuc/bai-viet" element={<NewsArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default App;
