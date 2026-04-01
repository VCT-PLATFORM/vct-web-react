import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const prevPathname = React.useRef(location.pathname);
  if (prevPathname.current !== location.pathname) {
    prevPathname.current = location.pathname;
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    if (isMobileDropdownOpen) setIsMobileDropdownOpen(false);
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('vct_lang', lng);
  };

  const currentLang = i18n.language;

  return (
    <>
      <a href="#main-content" className="skip-link" style={{position:'absolute',left:'-9999px',top:'auto',width:'1px',height:'1px',overflow:'hidden',zIndex:999,padding:'10px 20px',background:'var(--accent-primary)',color:'#fff',fontWeight:600,textDecoration:'none',borderRadius:'0 0 8px 0'}}>
        Chuyển đến nội dung chính
      </a>
      <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} id="site-navbar" aria-label="Điều hướng chính">
        <div className="container nav-container">
          <Link to="/" className="nav-logo text-accent">
            <img src="/assets/logo.png" alt="VCT Platform Logo" />
            VCT Platform
          </Link>

          {/* Language Switcher */}
          <div className="lang-switcher" style={{display:'flex',background:'rgba(255,255,255,0.05)',borderRadius:'50px',border:'1px solid rgba(255,255,255,0.1)',padding:'3px',position:'relative'}}>
            <button
              className={`lang-btn${currentLang === 'vi' ? ' active' : ''}`}
              onClick={() => changeLanguage('vi')}
              aria-label="Tiếng Việt"
              style={{background:'none',border:'none',padding:'6px 12px',borderRadius:'50px',fontWeight:700,color:currentLang === 'vi' ? '#fff' : 'var(--text-muted)',fontSize:'0.85rem',cursor:'pointer',transition:'0.3s',position:'relative',zIndex:1}}
            >VN</button>
            <button
              className={`lang-btn${currentLang === 'en' ? ' active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-label="English"
              style={{background:'none',border:'none',padding:'6px 12px',borderRadius:'50px',fontWeight:700,color:currentLang === 'en' ? '#fff' : 'var(--text-muted)',fontSize:'0.85rem',cursor:'pointer',transition:'0.3s',position:'relative',zIndex:1}}
            >EN</button>
            <div className="lang-pill" style={{
              position:'absolute',top:'3px',left:'3px',bottom:'3px',width:'44px',
              background:'var(--accent-primary)',borderRadius:'50px',
              transition:'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              zIndex:0,boxShadow:'0 0 10px rgba(13,148,136,0.3)',
              transform: currentLang === 'en' ? 'translateX(40px)' : 'translateX(0)'
            }}></div>
          </div>

          <button
            className="mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <div className={`nav-links${isMobileMenuOpen ? ' show' : ''}`}>
            <Link to="/">{t('nav_home')}</Link>
            <div className={`nav-dropdown${isMobileDropdownOpen ? ' mobile-open' : ''}`}>
              <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={isMobileDropdownOpen} style={{display:'flex',alignItems:'center',gap:'6px'}}
                onClick={(e) => { e.preventDefault(); setIsMobileDropdownOpen(!isMobileDropdownOpen); }}>
                <span>{t('nav_solutions')}</span> <i className="fas fa-chevron-down" style={{fontSize:'0.8rem'}}></i>
              </a>
              <div className="dropdown-menu">
                <Link to="/giai-phap/lien-doan" className="dropdown-item"><i className="fas fa-sitemap"></i> <span>{t('nav_b2g')}</span></Link>
                <Link to="/giai-phap/cau-lac-bo" className="dropdown-item"><i className="fas fa-store"></i> <span>{t('nav_b2b')}</span></Link>
                <Link to="/giai-phap/vo-sinh" className="dropdown-item"><i className="fas fa-user-graduate"></i> <span>{t('nav_b2c')}</span></Link>
                <Link to="/giai-phap/giai-dau" className="dropdown-item"><i className="fas fa-trophy"></i> <span>{t('nav_b2b2c')}</span></Link>
              </div>
            </div>
            <Link to="/bang-gia">{t('nav_pricing')}</Link>
            <Link to="/tin-tuc">{t('nav_news')}</Link>
            <div className="nav-auth-inline">
              <a href="https://app.vctplatform.vn/login" className="btn btn-primary" style={{padding:'10px 24px',fontWeight:600,fontSize:'0.95rem',boxShadow:'0 0 15px rgba(13,148,136,0.4)'}}>
                <span>{t('nav_login')}</span> <i className="fas fa-sign-in-alt" style={{marginLeft:'5px'}}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
