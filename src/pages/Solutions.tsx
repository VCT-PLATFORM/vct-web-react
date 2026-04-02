import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  useEffect(() => {
    document.title = "Hệ Sinh Thái Giải Pháp | VCT Platform";
    
    // Reveal animation logic
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('active');
        }
      }), 
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      to: "/giai-phap/lien-doan",
      icon: "fa-project-diagram",
      title: "Giải Pháp Liên Đoàn (B2G)",
      desc: "Trung tâm quản trị vĩ mô, số hóa quy trình quản lý giải đấu, cấp phát chứng chỉ số và quản lý hội viên cấp tỉnh/thành phố, quốc gia.",
      color: "var(--cyan-accent)"
    },
    {
      to: "/giai-phap/cau-lac-bo",
      icon: "fa-store",
      title: "Giải Pháp Câu Lạc Bộ (B2B)",
      desc: "Hệ thống quản lý phòng tập, võ đường toàn diện từ điểm danh, thu chi học phí đến đánh giá chất lượng võ sinh tự động.",
      color: "var(--accent-primary)"
    },
    {
      to: "/giai-phap/vo-sinh",
      icon: "fa-user-graduate",
      title: "Giải Pháp Võ Sinh (B2C)",
      desc: "Trải nghiệm tập luyện số hóa với ứng dụng cá nhân. Lưu trữ hồ sơ luyện tập, chứng chỉ và kết nối trực tiếp với huấn luyện viên.",
      color: "#f59e0b" // target color
    },
    {
      to: "/giai-phap/giai-dau",
      icon: "fa-trophy",
      title: "Giải Pháp Giải Đấu (B2B2C)",
      desc: "Công cụ tổ chức giải pháp chuyên nghiệp, từ bốc thăm lịch thi đấu, quản lý trọng tài đến trực tiếp kết quả theo thời gian thực.",
      color: "#ef4444" // target color
    }
  ];

  return (
    <div className="solutions-hub">
      {/* Hero Section */}
      <header className="hero relative text-center" style={{ padding: '160px 0 80px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container relative z-10 reveal">
          <span className="module-badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <i className="fas fa-layer-group"></i> Hệ Sinh Thái VCT
          </span>
          <h1 className="title-serif text-chrome" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Giải Pháp <span className="text-accent">Chuyển Đổi Số</span><br />Toàn Diện
          </h1>
          <p className="text-muted-delicate" style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
            VCT Platform cung cấp các giải pháp công nghệ chuyên biệt, được thiết kế riêng cho từng phân khúc trong hệ sinh thái Võ thuật và Thể thao, kết nối liền mạch từ vĩ mô đến vi mô.
          </p>
        </div>
      </header>

      {/* Solutions Grid */}
      <section style={{ padding: '80px 0 120px 0' }}>
        <div className="container">
          <div className="grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {solutions.map((item, index) => (
              <Link 
                to={item.to} 
                key={index} 
                className="solution-card feature-glass-wrap" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  padding: '3rem 2rem', 
                  textDecoration: 'none', 
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.5), 0 0 20px ${item.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: `${item.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '2.5rem',
                  color: item.color,
                  border: `1px solid ${item.color}30`
                }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.title}
                  <i className="fas fa-arrow-right" style={{ fontSize: '1rem', color: item.color, opacity: 0.7 }}></i>
                </h3>
                <p className="text-muted-delicate" style={{ fontSize: '1rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(13,148,136,0.05) 100%)', textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="title-serif text-chrome" style={{ fontSize: '2.2rem', marginBottom: '15px' }}>
            Bạn chưa biết chọn giải pháp nào?
          </h2>
          <p className="text-muted-delicate" style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Hãy để chuyên gia của chúng tôi tư vấn chi tiết giáp pháp phù hợp nhất với mô hình hoạt động của bạn.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/ve-chung-toi" className="btn btn-outline" style={{ padding: '12px 30px' }}>
              <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i> Tìm Hiểu Thêm
            </Link>
            <Link to="/bang-gia" className="btn btn-primary" style={{ padding: '12px 30px' }}>
              <i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i> Xem Bảng Giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
