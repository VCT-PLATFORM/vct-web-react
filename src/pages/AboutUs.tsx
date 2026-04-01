import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Sứ Mệnh Tổ Chức - VCT Platform";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    mainRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef}>
      <header className="hero" style={{minHeight:'50vh',paddingTop:'120px'}}>
        <div className="hero-bg" style={{background:'radial-gradient(circle at center, rgba(13, 148, 136, 0.05) 0%, transparent 80%)'}}></div>
        <div className="container relative text-center">
          <h1 className="title-serif text-accent" style={{fontSize:'3.5rem',marginBottom:'20px'}} dangerouslySetInnerHTML={{__html: t('vc_hero_title')}}></h1>
          <p className="hero-subtitle" style={{maxWidth:'800px',margin:'0 auto'}} dangerouslySetInnerHTML={{__html: t('vc_hero_subtitle')}}></p>
        </div>
      </header>

      <section className="features" style={{paddingTop:'4rem'}}>
        <div className="container">
          {/* Tầm Nhìn & Sứ Mệnh */}
          <div className="features-grid" style={{marginBottom:'3rem'}}>
            <div className="glass-card reveal" style={{padding:'3rem',textAlign:'left',borderLeft:'4px solid var(--cyan-accent)'}}>
              <div style={{fontSize:'2.5rem',marginBottom:'20px',color:'var(--cyan-accent)'}}><i className="fas fa-eye"></i></div>
              <h2 className="title-serif text-accent" style={{fontSize:'1.8rem',marginBottom:'15px'}} dangerouslySetInnerHTML={{__html: t('vc_vis_title')}}></h2>
              <p style={{color:'var(--text-muted)',fontSize:'1.1rem',lineHeight:1.8}} dangerouslySetInnerHTML={{__html: t('vc_vis_desc')}}></p>
            </div>
            <div className="glass-card reveal" style={{padding:'3rem',textAlign:'left',borderLeft:'4px solid var(--accent-secondary)',transitionDelay:'100ms'}}>
              <div style={{fontSize:'2.5rem',marginBottom:'20px',color:'var(--accent-secondary)'}}><i className="fas fa-bullseye"></i></div>
              <h2 className="title-serif text-accent" style={{fontSize:'1.8rem',marginBottom:'15px'}} dangerouslySetInnerHTML={{__html: t('vc_mis_title')}}></h2>
              <p style={{color:'var(--text-muted)',fontSize:'1.1rem',lineHeight:1.8}} dangerouslySetInnerHTML={{__html: t('vc_mis_desc')}}></p>
            </div>
          </div>

          {/* Câu Chuyện Sáng Lập */}
          <div className="glass-card reveal" style={{padding:'4rem',marginBottom:'4rem',background:'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(6,182,212,0.05) 100%)',border:'1px solid rgba(6,182,212,0.1)'}}>
            <h2 className="title-serif text-cyan" style={{fontSize:'2.5rem',marginBottom:'2rem'}}>
              <i className="fas fa-book-open" style={{marginRight:'15px',fontSize:'2rem'}}></i>
              <span dangerouslySetInnerHTML={{__html: t('vc_story_title')}}></span>
            </h2>
            <div style={{display:'flex',flexWrap:'wrap',gap:'3rem'}}>
              <div style={{flex:1,minWidth:'300px'}}>
                <p style={{color:'var(--text-light)',fontSize:'1.15rem',lineHeight:1.8,textAlign:'justify',marginBottom:'1.5rem'}} dangerouslySetInnerHTML={{__html: t('vc_story_p1')}}></p>
                <p style={{color:'var(--text-light)',fontSize:'1.15rem',lineHeight:1.8,textAlign:'justify'}} dangerouslySetInnerHTML={{__html: t('vc_story_p2')}}></p>
              </div>
              <div style={{flex:1,minWidth:'300px',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.2)',padding:'2rem',borderRadius:'12px',borderLeft:'3px solid var(--cyan-accent)'}}>
                <blockquote style={{fontSize:'1.4rem',fontStyle:'italic',color:'#fff',lineHeight:1.6}} dangerouslySetInnerHTML={{__html: t('vc_story_quote')}}></blockquote>
              </div>
            </div>
          </div>

          {/* Core Values Header */}
          <div style={{textAlign:'center',marginBottom:'3rem'}} className="reveal">
            <h2 className="title-serif text-accent" style={{fontSize:'2.8rem',marginBottom:'10px'}} dangerouslySetInnerHTML={{__html: t('vc_val_title')}}></h2>
            <p className="text-muted-delicate" style={{fontSize:'1.1rem',letterSpacing:'2px',textTransform:'uppercase'}} dangerouslySetInnerHTML={{__html: t('vc_val_subtitle')}}></p>
          </div>

          {/* Core Values Grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:'24px',marginBottom:'5rem'}}>
            {[
              { icon: 'fa-layer-group', color: '#fff', borderColor: '#fff', titleKey: 'vc_val1_title', descKey: 'vc_val1_desc', titleClass: 'text-chrome' },
              { icon: 'fa-balance-scale', color: 'var(--cyan-accent)', borderColor: 'var(--cyan-accent)', titleKey: 'vc_val2_title', descKey: 'vc_val2_desc', titleClass: 'text-cyan' },
              { icon: 'fa-gem', color: 'var(--accent-secondary)', borderColor: 'var(--accent-secondary)', titleKey: 'vc_val3_title', descKey: 'vc_val3_desc', titleClass: 'text-emerald' },
              { icon: 'fa-heart', color: '#f59e0b', borderColor: '#f59e0b', titleKey: 'vc_val4_title', descKey: 'vc_val4_desc', titleClass: '' },
            ].map((v, i) => (
              <div key={i} className="glass-card reveal text-center" style={{padding:'2.5rem 1.5rem',borderTop:`2px solid ${v.borderColor}`,transitionDelay:`${i*100}ms`}}>
                <div style={{fontSize:'2.5rem',color:v.color,marginBottom:'20px'}}><i className={`fas ${v.icon}`}></i></div>
                <h3 className={v.titleClass} style={{fontSize:'1.4rem',marginBottom:'15px',color: v.titleClass ? undefined : v.color}} dangerouslySetInnerHTML={{__html: t(v.titleKey)}}></h3>
                <p className="text-muted" style={{fontSize:'1rem',lineHeight:1.6}} dangerouslySetInnerHTML={{__html: t(v.descKey)}}></p>
              </div>
            ))}
          </div>

          {/* Positioning & Infrastructure */}
          <div className="features-grid">
            <div className="glass-card reveal text-center" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'2rem'}}>
              <h3 className="text-accent" style={{fontSize:'1.5rem',marginBottom:'15px'}} dangerouslySetInnerHTML={{__html: t('vc_pos_title')}}></h3>
              <p className="text-muted" style={{fontSize:'1.05rem',maxWidth:'400px',margin:'0 auto',lineHeight:1.6}} dangerouslySetInnerHTML={{__html: t('vc_pos_desc')}}></p>
            </div>
            <div className="glass-card reveal text-center" style={{transitionDelay:'100ms',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'2rem'}}>
              <h3 className="text-accent" style={{fontSize:'1.5rem',marginBottom:'15px'}} dangerouslySetInnerHTML={{__html: t('vc_infra_title')}}></h3>
              <p className="text-muted" style={{fontSize:'1.05rem',maxWidth:'400px',margin:'0 auto',lineHeight:1.6}} dangerouslySetInnerHTML={{__html: t('vc_infra_desc')}}></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
