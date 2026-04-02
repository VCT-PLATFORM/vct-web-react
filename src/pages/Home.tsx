import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "VCT Platform | Hệ Sinh Thái Số Hóa Võ Cổ Truyền Việt Nam";
    // Reveal animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    mainRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="infographic-canvas hero-infographic-home" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* 1. S1: Ultra Premium Hero */}
      <header className="hero">
        <div className="container relative">
          <div className="hero-split">
            <div className="hero-text-content reveal active">
              <div className="hero-badge">
                <i className="fa-solid fa-earth-americas"></i> <span>{t('home_badge')}</span>
              </div>
              <h1 className="hero-title text-chrome" dangerouslySetInnerHTML={{ __html: t('home_title') }}></h1>
              <p className="hero-subtitle" style={{marginLeft:0,maxWidth:'90%',fontSize:'1.25rem'}} dangerouslySetInnerHTML={{ __html: t('home_subtitle') }}></p>
              <div className="hero-actions left-align">
                <Link to="/giai-phap/cau-lac-bo" className="btn btn-primary" style={{padding:'14px 32px',fontSize:'1.1rem'}}><i className="fas fa-rocket" style={{marginRight:'8px'}}></i> <span>{t('hero_btn_start')}</span></Link>
                <Link to="/giai-phap/lien-doan" className="btn btn-outline" style={{padding:'14px 32px',fontSize:'1.1rem'}}><i className="fas fa-play-circle" style={{marginRight:'8px'}}></i> <span>{t('hero_btn_explore')}</span></Link>
              </div>
            </div>
            <div className="hero-mockup-content reveal active" style={{transitionDelay:'200ms',textAlign:'center',position:'relative'}}>
              <img src="/assets/images/hero-hologram.webp" className="floating-mockup cyber-hologram" alt="VCT Platform Hologram Tech" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. S2: Trust Metrics */}
      <section className="module-section" style={{padding:'4rem 0',borderBottom:'1px solid rgba(255,255,255,0.05)',background:'#020617',position:'relative',overflow:'hidden'}}>
        <div className="metrics-bg" style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)',zIndex:0}}></div>
        <div className="container relative z-10">
          <div className="metrics-grid" style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:'2rem',textAlign:'center',marginBottom:'4rem'}}>
            {[
              { num: '100%', cls: 'text-emerald', key: 'metric_federation' },
              { num: '< 3s', cls: 'text-cyan', key: 'metric_club' },
              { num: '99.9%', cls: 'text-chrome', key: 'metric_member' },
              { num: '100%', cls: 'text-accent', key: 'metric_security' },
            ].map((m, i) => (
              <div key={i} className="metric-item glass-panel" style={{padding:'2rem',borderRadius:'16px',background:'rgba(5, 7, 10, 0.6)',backdropFilter:'blur(10px)',border:'1px solid rgba(20, 184, 166, 0.1)'}}>
                <div className={`metric-number ${m.cls}`} style={{fontSize:'3rem',fontWeight:800,fontFamily:'var(--font-sans)'}} dangerouslySetInnerHTML={{__html: m.num}}></div>
                <div className="metric-label text-muted" style={{textTransform:'uppercase',letterSpacing:'1px',fontSize:'0.85rem',marginTop:'10px'}}>{t(m.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. S3: Core Module - B2G Dashboard (Image Left) */}
      <section className="module-section" id="solution-b2g">
        <div className="container">
          <div className="module-row">
            <div className="module-visual reveal">
              <img loading="lazy" src="/assets/images/dashboard-b2g.webp" alt="Trung tâm chỉ huy Liên đoàn VCT" />
            </div>
            <div className="module-text reveal" style={{transitionDelay:'200ms'}}>
              <span className="module-badge"><i className="fas fa-sitemap"></i> Giải pháp Liên Đoàn</span>
              <h2 className="module-title text-chrome">Trung tâm Chỉ huy<br/>Dữ liệu Vĩ Mô</h2>
              <p className="module-desc text-muted-delicate">Theo dõi mọi biến động của hàng vạn võ sinh, câu lạc bộ trên toàn quốc thông qua biểu đồ Real-time. Xóa sổ hoàn toàn báo cáo thống kê qua giấy tờ, Excel truyền thống.</p>
              <ul className="module-features">
                <li><i className="fas fa-check-circle"></i> <span>Dữ liệu tập trung chống phân mảnh rủi ro.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Quản lý hồ sơ thi nâng cấp đai, HLV, Trọng tài điện tử.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Cấp phát chứng chỉ số (Digital Certificate) nhanh chóng.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. S4: Core Module - FinTech (Image Right) */}
      <section className="module-section" id="solution-finance">
        <div className="container">
          <div className="module-row reverse">
            <div className="module-visual reveal">
              <img loading="lazy" src="/assets/images/finance-qr.webp" alt="Gạch nợ học phí VietQR tự động" />
            </div>
            <div className="module-text reveal" style={{transitionDelay:'200ms'}}>
              <span className="module-badge"><i className="fas fa-qrcode"></i> Fintech Integration</span>
              <h2 className="module-title text-emerald">Gạch Nợ Học Phí<br/>Tự Động 100%</h2>
              <p className="module-desc text-muted-delicate">Chấm dứt cảnh Võ Sư phải thu tiền tay từng tháng. VCT Platform tích hợp cổng CASS VietQR, tự động gán mã thanh toán riêng cho từng võ sinh.</p>
              <ul className="module-features">
                <li><i className="fas fa-check-circle"></i> <span>Võ sinh quét mã QR -&gt; Hệ thống báo Ting Ting tức thì.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Trạng thái "Đã nộp tiền" xanh liền trên App mà không cần người soi đối soát.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Hỗ trợ gửi tin nhắn Zalo/SMS nhắc nợ tự động 24/7.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. S6: Ecosystem Mobile App (Image Left) */}
      <section className="module-section" id="solution-ecosystem" style={{borderBottom:'none'}}>
        <div className="container">
          <div className="module-row">
            <div className="module-visual reveal">
              <img loading="lazy" src="/assets/images/mobile-app.webp" alt="Ứng dụng Mobile VCT Platform" />
            </div>
            <div className="module-text reveal" style={{transitionDelay:'200ms'}}>
              <span className="module-badge"><i className="fas fa-mobile-alt"></i> Mobile App Ecosystem</span>
              <h2 className="module-title text-chrome">Ứng Dụng Điện Thoại<br/>Dành Riêng Cho Bạn</h2>
              <p className="module-desc text-muted-delicate">Quyền lực trao tay! Hệ sinh thái VCT App kết nối trực tiếp Phụ huynh, Võ sinh với Võ đường thông qua một giao diện App siêu mượt trên iOS &amp; Android.</p>
              <ul className="module-features">
                <li><i className="fas fa-check-circle"></i> <span>Xem lịch tập, Lịch sử thăng đai mọi lúc.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Mã QR vệ tinh giúp vào cửa điểm danh siêu tốc tại võ đường.</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Thông báo đẩy tới tận tay Phụ huynh tình hình học tập.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. S7: Security & Infrastructure */}
      <section className="infra-block reveal" id="infrastructure">
        <div className="container">
          <h2 className="title-serif text-chrome" style={{fontSize:'2.5rem',marginBottom:'20px'}}>Hạ Tầng Điện Toán<br/>Đạt Chuẩn Tối Cấp</h2>
          <p className="text-muted-delicate" style={{maxWidth:'700px',margin:'0 auto'}}>VCT Platform hợp tác cùng các đối tác hạ tầng hàng đầu khu vực để đảm bảo tính sẵn sàng, toàn vẹn và bảo mật dữ liệu môn phái.</p>
          <div className="infra-grid">
            <div className="infra-card">
              <i className="fas fa-server" style={{fontSize:'2.5rem',color:'var(--cyan-accent)',marginBottom:'1.5rem'}}></i>
              <h4 style={{fontSize:'1.25rem',marginBottom:'10px'}}>Lưu Trữ Nội Địa</h4>
              <p style={{color:'var(--text-muted)',fontSize:'0.95rem'}}>Máy chủ trung tâm đặt tại Viettel IDC (Việt Nam) đảm bảo tốc độ Ping &lt; 5ms.</p>
            </div>
            <div className="infra-card">
              <i className="fas fa-shield-alt" style={{fontSize:'2.5rem',color:'var(--accent-primary)',marginBottom:'1.5rem'}}></i>
              <h4 style={{fontSize:'1.25rem',marginBottom:'10px'}}>Tuân thủ Pháp Lý</h4>
              <p style={{color:'var(--text-muted)',fontSize:'0.95rem'}}>Hệ thống đạt chuẩn an toàn bảo mật dữ liệu định danh theo NĐ 13/2023 Chính Phủ.</p>
            </div>
            <div className="infra-card">
              <i className="fas fa-cloud-download-alt" style={{fontSize:'2.5rem',color:'var(--text-main)',marginBottom:'1.5rem'}}></i>
              <h4 style={{fontSize:'1.25rem',marginBottom:'10px'}}>Backup Thời Gian Thực</h4>
              <p style={{color:'var(--text-muted)',fontSize:'0.95rem'}}>Dự phòng thảm họa (Disaster Recovery). Không bao giờ đánh mất dù chỉ 1 điểm dữ liệu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="module-section" id="faq" style={{background:'var(--bg-deep)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <div className="text-center" style={{marginBottom:'3rem'}}>
            <h2 className="title-serif text-chrome" style={{fontSize:'2.5rem',marginBottom:'10px'}}>Câu Hỏi Thường Gặp</h2>
            <p className="text-muted-delicate">Mọi thắc mắc của bạn về Hệ sinh thái VCT Platform</p>
          </div>
          <div className="faq-list">
            {[
              { q: 'VCT Platform có phù hợp với võ đường quy mô nhỏ không?', a: 'Hoàn toàn phù hợp. Chúng tôi có Gói Miễn Phí (Starter) cho phép quản lý dưới 50 võ sinh hệ thống và tự động hóa điểm danh toàn diện, giúp CLB tiết kiệm 80% thời gian sổ sách.' },
              { q: 'Gạch nợ học phí tự động hoạt động như thế nào?', a: 'Chúng tôi tích hợp Cổng thanh toán VietQR (CASS), cấp mỗi võ đường và võ sinh 1 mã QR tĩnh riêng biệt. Khi phụ huynh chuyển khoản, hệ thống sẽ báo \'Ting Ting\' trên App và tự động gạch nợ trên phần mềm (sổ cái) mà không cần con người tra cứu mã GD.' },
              { q: 'Cấp Vĩ Mô (B2G - Liên Đoàn Mức Tỉnh/Quốc Gia) có đảm bảo bảo mật không?', a: 'Chắc chắn. Hệ thống cho khối B2G dùng công nghệ Private Cloud triển khai độc lập từ Viettel IDC, máy chủ vật lý đặt tại Việt Nam. Tuân thủ chặt chẽ Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân và tích hợp luồng Phê duyệt Văn bản, Ký số quốc gia.' },
            ].map((faq, i) => (
              <details key={i} className="faq-item" style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',padding:'1.5rem',borderRadius:'8px',marginBottom:'1rem',cursor:'pointer'}}>
                <summary style={{fontFamily:'var(--font-sans)',fontSize:'1.1rem',color:'#fff',fontWeight:600,outline:'none'}}>{faq.q}</summary>
                <p className="text-muted-delicate" style={{marginTop:'1rem',lineHeight:1.6}}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Quy Trình 3 Bước */}
      <section className="module-section" style={{background:'#020617',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container text-center">
          <h2 className="title-serif text-chrome" style={{fontSize:'2.5rem',marginBottom:'15px'}}>Khởi Tạo Chỉ Trong 3 Bước</h2>
          <p className="text-muted-delicate" style={{maxWidth:'600px',margin:'0 auto 4rem auto'}}>Từ số 0 đến vận hành chuyên nghiệp — không cần kiến thức IT.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'2rem'}}>
            {[
              { n: '1', title: 'Đăng Ký Tài Khoản', desc: 'Tạo tài khoản miễn phí bằng số điện thoại hoặc email trong 30 giây.' },
              { n: '2', title: 'Nhập Dữ Liệu Võ Đường', desc: 'Import danh sách học viên từ Excel hoặc nhập tay. Đội ngũ VCT hỗ trợ miễn phí.' },
              { n: '3', title: 'Vận Hành Tự Động', desc: 'Điểm danh QR, thu phí VietQR, báo cáo tài chính — tất cả chạy tự động 24/7.' },
            ].map((step, i) => (
              <div key={i} className="glass-card" style={{padding:'2.5rem',textAlign:'center'}}>
                <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'rgba(6,182,212,0.15)',border:'1px solid rgba(6,182,212,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem auto',fontSize:'1.5rem',fontWeight:800,color:'var(--cyan-accent)'}}>{step.n}</div>
                <h3 style={{fontSize:'1.2rem',marginBottom:'10px'}}>{step.title}</h3>
                <p className="text-muted" style={{fontSize:'0.95rem'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Cuối Trang */}
      <section style={{padding:'6rem 0',background:'linear-gradient(180deg, #020617 0%, rgba(6,182,212,0.08) 100%)',textAlign:'center'}}>
        <div className="container">
          <h2 className="title-serif text-chrome" style={{fontSize:'2.8rem',marginBottom:'15px'}}>Bắt Đầu Số Hóa Võ Đường<br/>Ngay Hôm Nay.</h2>
          <p className="text-muted-delicate" style={{fontSize:'1.2rem',maxWidth:'600px',margin:'0 auto 3rem auto'}}>Miễn phí trọn đời cho CLB quy mô nhỏ. Không ràng buộc hợp đồng.</p>
          <div style={{display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap'}}>
            <a href="https://app.vctplatform.vn/register" className="btn btn-primary" style={{padding:'16px 40px',fontSize:'1.15rem'}}><i className="fas fa-rocket" style={{marginRight:'8px'}}></i> Đăng Ký Miễn Phí</a>
            <a href="tel:0981108078" className="btn btn-outline" style={{padding:'16px 40px',fontSize:'1.15rem'}}><i className="fas fa-phone-alt" style={{marginRight:'8px'}}></i> Hotline: 0981.10.80.78</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
