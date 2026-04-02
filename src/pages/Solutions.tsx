import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Hệ Sinh Thái Giải Pháp | VCT Platform";
    
    // Smooth reveal animation
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

  const solutions = [
    {
      to: "/giai-phap/lien-doan",
      icon: "fa-project-diagram",
      title: "Giải Pháp Liên Đoàn",
      badge: "B2G / Government",
      desc: "Trung tâm quản lý vĩ mô dành cho Liên đoàn Thể thao. Số hóa hệ thống phát hành chứng chỉ, điểm danh và quản trị hàng ngàn Câu lạc bộ trực thuộc theo thời gian thực.",
      color: "var(--cyan-accent)",
      colorRgba: "6, 182, 212"
    },
    {
      to: "/giai-phap/cau-lac-bo",
      icon: "fa-store",
      title: "Giải Pháp Câu Lạc Bộ",
      badge: "B2B / Business",
      desc: "Phần mềm quản lý phòng tập hoàn chỉnh với tính năng Điểm danh QR siêu tốc, Tự động thu Gạch nợ học phí (VietQR) và Báo cáo tài chính thu chi minh bạch.",
      color: "var(--emerald)",
      colorRgba: "16, 185, 129"
    },
    {
      to: "/giai-phap/vo-sinh",
      icon: "fa-user-graduate",
      title: "Giải Pháp Võ Sinh",
      badge: "B2C / Consumer",
      desc: "Ứng dụng di động chuyên biệt cho môn sinh. Lưu trữ Hồ sơ thi thăng đai số, Lịch tập luyện và nhận tin nhắn thông báo đẩy từ Huấn Luyện Viên 24/7.",
      color: "var(--accent-primary)",
      colorRgba: "13, 148, 136"
    },
    {
      to: "/giai-phap/giai-dau",
      icon: "fa-trophy",
      title: "Giải Pháp Giải Đấu",
      badge: "B2B2C / Event",
      desc: "Sa bàn kỹ thuật số tổ chức Thi đấu Thể thao. Bốc thăm đối kháng tự động định tuyến, hệ thống Máy chấm điểm Trọng tài điện tử chống gian lận.",
      color: "#ef4444",
      colorRgba: "239, 68, 68"
    }
  ];

  return (
    <div ref={mainRef} style={{ background: 'var(--bg-deep)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* 1. Ultra Premium Hero */}
      <header className="hero" style={{ padding: '160px 0 100px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        {/* Dynamic Background Overlays */}
        <div className="hero-bg" style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          opacity: 0.15, 
          backgroundImage: 'url("/assets/images/hero_bg_b2g_infographic_1775032455843.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          mixBlendMode: 'normal'
        }}></div>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, transparent 0%, var(--bg-deep) 100%)', position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', zIndex: 1 }}></div>
        
        <div className="container relative z-10 reveal text-center">
          <span className="module-badge" style={{ marginBottom: '1.5rem', display: 'inline-block', border: '1px solid rgba(13,148,136,0.3)', background: 'rgba(13,148,136,0.1)', color: 'var(--accent-primary)' }}>
            <i className="fas fa-microchip"></i> Hệ Sinh Thái Digital
          </span>
          <h1 className="title-serif text-chrome" style={{ fontSize: '3.8rem', lineHeight: '1.2', marginBottom: '1.5rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            Lựa Chọn Giải Pháp <br />
            <span style={{ color: 'var(--cyan-accent)' }}>Chuyển Đổi Số Toàn Diện</span>
          </h1>
          <p className="text-muted-delicate" style={{ maxWidth: '850px', margin: '0 auto 3.5rem auto', fontSize: '1.25rem', lineHeight: 1.7 }}>
            Thiết kế kiến trúc hướng dịch vụ (Microservices). Dù bạn là Chủ Trương Võ Đường, Lãnh Đạo Liên Đoàn hay Võ Sinh, <strong>VCT Platform</strong> luôn có mô-đun công nghệ phù hợp với nhu cầu phát triển của bạn.
          </p>
        </div>
      </header>

      {/* 2. Solutions Grid Showcase */}
      <section style={{ padding: '100px 0 120px 0', position: 'relative' }}>
        {/* Ambient background grid lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 0 }}></div>
        
        <div className="container relative z-10">
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {solutions.map((item, index) => (
              <div 
                key={index} 
                className="solution-card glass-card reveal" 
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  display: 'flex', 
                  flexDirection: 'column', 
                  padding: '3.5rem 2.5rem', 
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  background: 'rgba(5, 7, 10, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.borderColor = `rgba(${item.colorRgba}, 0.5)`;
                  e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(${item.colorRgba}, 0.2)`;
                  const iconwrap = e.currentTarget.querySelector('.icon-wrapper') as HTMLElement;
                  if(iconwrap) {
                    iconwrap.style.transform = 'scale(1.1) rotate(5deg)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                  const iconwrap = e.currentTarget.querySelector('.icon-wrapper') as HTMLElement;
                  if(iconwrap) {
                    iconwrap.style.transform = 'scale(1) rotate(0)';
                  }
                }}
              >
                {/* Glow effect inside card */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: `radial-gradient(circle, rgba(${item.colorRgba}, 0.2) 0%, transparent 70%)`, filter: 'blur(20px)', zIndex: 0, pointerEvents: 'none' }}></div>
                
                <div className="icon-wrapper" style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  background: `linear-gradient(135deg, rgba(${item.colorRgba},0.2) 0%, rgba(${item.colorRgba},0.05) 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                  fontSize: '3rem',
                  color: item.color,
                  border: `1px solid rgba(${item.colorRgba}, 0.3)`,
                  boxShadow: `inset 0 0 20px rgba(${item.colorRgba}, 0.1)`,
                  transition: 'transform 0.4s ease',
                  zIndex: 1,
                  position: 'relative'
                }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '10px', display: 'block', fontWeight: 600 }}>
                    {item.badge}
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-delicate" style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    {item.desc}
                  </p>
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                  <Link 
                    to={item.to} 
                    className="btn" 
                    style={{ 
                      width: '100%', 
                      padding: '16px', 
                      textAlign: 'center', 
                      background: `rgba(${item.colorRgba}, 0.1)`, 
                      color: item.color, 
                      border: `1px solid rgba(${item.colorRgba}, 0.3)`, 
                      borderRadius: '12px',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `rgba(${item.colorRgba}, 0.2)`; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = `rgba(${item.colorRgba}, 0.6)`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `rgba(${item.colorRgba}, 0.1)`; e.currentTarget.style.color = item.color; e.currentTarget.style.borderColor = `rgba(${item.colorRgba}, 0.3)`; }}
                  >
                    Khám Phá Chi Tiết <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.9rem' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(6,182,212,0.02) 0%, rgba(13,148,136,0.08) 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)', transform: 'translate(-50%, -50%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div className="container relative z-10 reveal">
          <i className="fas fa-headset" style={{ fontSize: '3rem', color: 'var(--cyan-accent)', marginBottom: '1.5rem', opacity: 0.8 }}></i>
          <h2 className="title-serif text-chrome" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Kết Nối Cùng Đội Ngũ Chuyên Gia
          </h2>
          <p className="text-muted-delicate" style={{ maxWidth: '650px', margin: '0 auto 3rem auto', fontSize: '1.15rem' }}>
            Đặt lịch demo 1-1 miễn phí. Đội ngũ Kỹ sư giải pháp của VCT Platform sẽ tư vấn trực tiếp vào mô hình đặc thù của Liên đoàn hoặc Võ đường của bạn.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/ve-chung-toi" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
              <i className="fas fa-book" style={{ marginRight: '8px' }}></i> Hồ Sơ Năng Lực
            </Link>
            <Link to="/bang-gia" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', background: 'var(--cyan-accent)', borderColor: 'var(--cyan-accent)' }}>
              <i className="fas fa-file-invoice-dollar" style={{ marginRight: '8px' }}></i> Xem Bảng Giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
