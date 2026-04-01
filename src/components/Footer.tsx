import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Certification */}
          <div className="footer-brand reveal">
            <h3 className="title-serif text-accent" style={{display:'flex',alignItems:'center',marginBottom:'1.5rem'}}>
              <img src="/assets/logo.png" alt="Logo" style={{height:'48px',marginRight:'15px',filter:'drop-shadow(0 2px 5px var(--accent-glow))'}} />
              VCT Platform
            </h3>
            <p style={{marginBottom:'1.5rem',fontSize:'0.95rem'}}>{t('ft_brand_desc')}</p>
            <div style={{display:'inline-block',border:'1px solid var(--border-accent)',padding:'8px 15px',color:'var(--text-main)',fontSize:'0.8rem',borderRadius:'6px',background:'rgba(13, 148, 136, 0.1)'}}>
              <i className="fas fa-check-circle text-accent"></i> <span>{t('ft_bct_noti')}</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="footer-links-col reveal" style={{transitionDelay:'100ms'}}>
            <h4 className="footer-title">{t('ft_col2_title')}</h4>
            <ul className="footer-links">
              <li><Link to="/giai-phap/lien-doan"><i className="fas fa-angle-right" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_sol_b2g')}</span></Link></li>
              <li><Link to="/giai-phap/cau-lac-bo"><i className="fas fa-angle-right" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_sol_b2b')}</span></Link></li>
              <li><Link to="/giai-phap/vo-sinh"><i className="fas fa-angle-right" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_sol_b2c')}</span></Link></li>
              <li><Link to="/giai-phap/giai-dau"><i className="fas fa-angle-right" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_sol_b2b2c')}</span></Link></li>
              <li><Link to="/bang-gia"><i className="fas fa-angle-right" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_sol_pricing')}</span></Link></li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="footer-links-col reveal" style={{transitionDelay:'200ms'}}>
            <h4 className="footer-title">{t('ft_col3_title')}</h4>
            <ul className="footer-links">
              <li><Link to="/chinh-sach/bao-mat"><i className="fas fa-shield-alt" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_pol_privacy')}</span></Link></li>
              <li><Link to="/chinh-sach/dieu-khoan"><i className="fas fa-file-contract" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_pol_terms')}</span></Link></li>
              <li><Link to="/ve-chung-toi"><i className="fas fa-globe" style={{marginRight:'8px',fontSize:'0.8rem',color:'var(--cyan-accent)'}}></i><span>{t('ft_pol_about')}</span></Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-links-col reveal" style={{transitionDelay:'300ms'}}>
            <h4 className="footer-title">{t('ft_col4_title')}</h4>
            <p style={{color:'var(--text-main)',fontSize:'0.95rem',marginBottom:'0.8rem',fontWeight:500}}>{t('ft_col4_corp')}</p>
            <div style={{color:'var(--text-muted)',fontSize:'0.9rem',marginBottom:'1.5rem',lineHeight:1.8}}>
              <p style={{display:'flex',alignItems:'flex-start',marginBottom:'0.5rem'}}><i className="fas fa-id-card text-accent" style={{marginTop:'5px',marginRight:'10px',width:'15px',textAlign:'center'}}></i> <strong>{t('ft_col4_mst_label')}</strong>&nbsp;<span>{t('ft_col4_mst')}</span></p>
              <p style={{display:'flex',alignItems:'flex-start',marginBottom:'0.5rem'}}><i className="fas fa-map-marker-alt text-accent" style={{marginTop:'5px',marginRight:'10px',width:'15px',textAlign:'center'}}></i> <span style={{flex:1}}>{t('ft_col4_addr')}</span></p>
              <p style={{display:'flex',alignItems:'center',marginBottom:'0.5rem'}}><i className="fas fa-phone text-accent" style={{marginRight:'10px',width:'15px',textAlign:'center'}}></i> 0981.10.80.78</p>
              <p style={{display:'flex',alignItems:'center'}}><i className="fas fa-envelope text-accent" style={{marginRight:'10px',width:'15px',textAlign:'center'}}></i> hbtung.vct@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom reveal">
          <p>&copy; 2026 VCT Platform Vietnam. All Rights Reserved.</p>
          <div className="social-links" style={{fontSize:'1.2rem',gap:'15px',display:'flex'}}>
            <a href="https://www.facebook.com/vctplatform.official" target="_blank" rel="noreferrer" style={{color:'var(--text-muted)'}}><i className="fab fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@vctplatform" target="_blank" rel="noreferrer" style={{color:'var(--text-muted)'}}><i className="fab fa-tiktok"></i></a>
            <a href="https://www.instagram.com/vct_platform" target="_blank" rel="noreferrer" style={{color:'var(--text-muted)'}}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
