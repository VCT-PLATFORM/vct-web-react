import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  useEffect(() => { document.title = "Bảng Giá Nền Tảng - VCT Platform"; }, []);

  return (
    <main id="main-content">
      <header className="hero" style={{minHeight:'40vh',paddingTop:'150px'}}>
        <div className="hero-bg" style={{background:'radial-gradient(circle at center, rgba(13,148,136,0.15) 0%, transparent 80%)'}}></div>
        <div className="container relative text-center">
          <h1 className="title-serif text-accent" style={{fontSize:'3.5rem',marginBottom:'20px'}}>Đầu Tư 1 Lần, <span className="gradient-text">Giá Trị Mãi Mãi</span></h1>
          <p className="hero-subtitle">Mô hình Subscription linh hoạt (SaaS), đồng hành cùng từ các võ quán non trẻ cho đến Hệ thống Liên đoàn quy mô lớn.</p>
        </div>
      </header>

      <section className="pricing-section" style={{paddingBottom:'8rem',position:'relative',backgroundColor:'#020617'}}>
        <div className="pricing-glow-orb"></div>
        <div className="container relative z-10">
          <div className="pricing-grid reveal active">
            {/* Free */}
            <div className="pricing-card">
              <h3 className="text-chrome" style={{fontSize:'1.5rem',marginBottom:'2px'}}>GÓI MIỄN PHÍ</h3>
              <p style={{color:'var(--text-muted)',fontSize:'0.9rem',marginBottom:'2rem'}}>Dành cho cá nhân, CLB, võ đường</p>
              <div style={{fontSize:'3.5rem',fontWeight:700,fontFamily:'var(--font-sans)',letterSpacing:'-2px',color:'#fff'}}>Miễn phí</div>
              <ul className="pricing-features">
                <li><i className="fas fa-check text-accent"></i> Quản lý hồ sơ võ sinh & thăng đẳng</li>
                <li><i className="fas fa-check text-accent"></i> Điểm danh tự động bằng Barcode/QR</li>
                <li><i className="fas fa-check text-accent"></i> Tổ chức thi thăng cấp cơ sở</li>
                <li><i className="fas fa-times text-muted" style={{opacity:0.3}}></i> Không tích hợp luồng phê duyệt tỉnh</li>
                <li><i className="fas fa-times text-muted" style={{opacity:0.3}}></i> Không báo cáo kế toán đa chi nhánh</li>
              </ul>
              <a href="https://app.vctplatform.vn/register" className="btn btn-outline" style={{width:'100%'}}>Tạo Tài Khoản Free</a>
            </div>

            {/* Premium */}
            <div className="pricing-card premium">
              <div className="pricing-badge">🔥 TỐT NHẤT CHO LIÊN ĐOÀN TỈNH</div>
              <h3 className="text-emerald" style={{fontSize:'1.8rem',marginBottom:'2px',marginTop:'5px'}}>LIÊN ĐOÀN TỈNH</h3>
              <p style={{color:'var(--text-muted)',fontSize:'0.9rem',marginBottom:'2rem'}}>Quản lý toàn bộ Võ đường, CLB trực thuộc</p>
              <div style={{fontSize:'4rem',fontWeight:700,fontFamily:'var(--font-sans)',letterSpacing:'-3px',color:'#fff',lineHeight:1}}>Từ 2 Tr<span style={{fontSize:'1.2rem',color:'var(--text-muted)',fontWeight:'normal',fontFamily:'var(--font-sans)',letterSpacing:0}}> / tháng</span></div>
              <ul className="pricing-features">
                <li><i className="fas fa-check text-accent"></i> <strong style={{color:'#fff'}}>2.000.000đ/tháng</strong> với quy mô &lt; 5.000 võ sinh</li>
                <li><i className="fas fa-check text-accent"></i> <strong style={{color:'var(--cyan-accent)'}}>5.000.000đ/tháng</strong> với quy mô ≥ 5.000 võ sinh</li>
                <li><i className="fas fa-check text-accent"></i> Quy hoạch Dữ liệu toàn Tỉnh/Thành phố</li>
                <li><i className="fas fa-check text-accent"></i> Tự động hóa Khai báo Giải đấu / Kỳ thi cấp Tỉnh</li>
                <li><i className="fas fa-check text-accent"></i> Báo cáo Bảng Cân đối kế toán thời gian thực</li>
              </ul>
              <a href="https://app.vctplatform.vn/register" className="btn btn-primary" style={{width:'100%',boxShadow:'0 5px 20px rgba(13,148,136,0.4)'}}>Đăng Ký Khởi Tạo</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card b2g-block">
              <h3 className="text-chrome" style={{fontSize:'1.5rem',marginBottom:'2px'}}>LIÊN ĐOÀN QUỐC GIA</h3>
              <p style={{color:'var(--text-muted)',fontSize:'0.9rem',marginBottom:'2rem'}}>Hệ thống lõi cho Sở, Ban Ngành Cấp Cao</p>
              <div style={{fontSize:'2.2rem',fontWeight:700,fontFamily:'var(--font-sans)',letterSpacing:'-1px',color:'#fff',lineHeight:1.3,marginTop:'25px'}}>Liên Hệ Tư Vấn<span style={{fontSize:'1rem',color:'var(--cyan-accent)',fontWeight:500,fontFamily:'var(--font-sans)',display:'block',letterSpacing:'2px',textTransform:'uppercase',marginTop:'10px'}}>Báo Giá Thiết Kế</span></div>
              <p className="b2g-seo-desc" style={{color:'rgba(255,255,255,0.7)',fontSize:'0.95rem',fontWeight:300,lineHeight:1.6,textAlign:'left',margin:'2rem 0',borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:'2rem'}}>Phát triển phiên bản Platform Độc quyền Nhãn Trắng (White-label). Tích hợp kiến trúc lưu trữ Server nội bộ và Phân quyền Vĩ Mô.</p>
              <ul className="pricing-features" style={{marginTop:0,paddingTop:0,borderTop:'none'}}>
                <li><i className="fas fa-project-diagram text-accent"></i> Hạ tầng Cục Bộ Private Cloud nguyên lý Đóng.</li>
                <li><i className="fas fa-shield-alt text-cyan"></i> Tích hợp luồng Phê duyệt Ký số cấp Quốc gia.</li>
                <li><i className="fas fa-file-contract text-accent"></i> API Cổng thông tin đồng bộ dữ liệu đặc thù.</li>
              </ul>
              <a href="mailto:gov@vctplatform.vn" className="btn btn-glass" style={{width:'100%'}}>Tư Vấn Dịch Vụ Core</a>
            </div>
          </div>
        </div>
      </section>

      <section className="infra-block" style={{borderTop:'1px solid rgba(255,255,255,0.05)',padding:'8rem 0',backgroundColor:'#020617'}}>
        <div className="container reveal active">
          <h2 className="title-serif text-accent" style={{fontSize:'3.5rem',marginBottom:'20px'}}>Hỗ Trợ Triển Khai Miễn Phí 100%</h2>
          <p style={{color:'var(--text-muted)',fontSize:'1.2rem',marginBottom:'40px',maxWidth:'600px',marginLeft:'auto',marginRight:'auto'}}>Mọi Gói Cước từ Premium trở lên đều được đội ngũ VCT hỗ trợ Chuyển Đổi Số. Từ nhập liệu học viên, thiết lập VietQR đến hướng dẫn huấn luyện viên tận tay.</p>
        </div>
      </section>
    </main>
  );
};
export default Pricing;
