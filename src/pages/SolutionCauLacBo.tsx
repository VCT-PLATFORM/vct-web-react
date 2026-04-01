import React, { useEffect, useRef } from 'react';

const SolutionCauLacBo: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "Phần Mềm Quản Lý Võ Đường & CLB Số Hóa | VCT Platform";
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')), { threshold: 0.1 });
    mainRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const FeatureIcon = ({ icon, title, sub }: { icon: string; title: string; sub: string }) => (
    <div style={{background:'rgba(6,182,212,0.05)',border:'1px solid rgba(6,182,212,0.15)',borderRadius:'20px',padding:'3rem',textAlign:'center'}}>
      <i className={`fas ${icon}`} style={{fontSize:'5rem',color:'var(--cyan-accent)',marginBottom:'1.5rem',display:'block'}}></i>
      <p style={{color:'#F8FAFC',fontSize:'1.3rem',fontWeight:600}}>{title}<br/><span style={{color:'var(--cyan-accent)',fontSize:'0.9rem'}}>{sub}</span></p>
    </div>
  );

  return (
    <div ref={mainRef} className="infographic-canvas hero-infographic-b2b">
      <header className="solution-hero relative" style={{padding:'180px 0 100px 0',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container relative z-10 text-center">
          <span className="module-badge" style={{color:'var(--cyan-accent)',borderColor:'rgba(6,182,212,0.3)',background:'rgba(6,182,212,0.1)',marginBottom:'2rem'}}><i className="fas fa-store"></i> Khối Kinh Doanh (B2B)</span>
          <h1 className="title-serif text-chrome" style={{fontSize:'3.5rem',marginBottom:'1.5rem'}}>Hệ Thống Thu Phí Tự Động<br/><span style={{color:'var(--cyan-accent)'}}>Cho Võ Đường & CLB.</span></h1>
          <p className="text-muted-delicate" style={{maxWidth:'800px',margin:'0 auto 3rem auto',fontSize:'1.25rem'}}>Tạm biệt những ngày mòn mỏi dò tìm tin nhắn Zalo, rà soát sao kê cực nhọc xem Võ sinh nào đã nộp học phí. Mọi quy trình dòng tiền nay được Tự Động Hóa 100% qua chuẩn CASS Fintech VietQR.</p>
          <div className="hero-actions" style={{display:'flex',justifyContent:'center',gap:'15px'}}>
            <a href="#features-b2b" className="btn btn-primary" style={{background:'var(--cyan-accent)',borderColor:'var(--cyan-accent)',padding:'14px 32px'}}><i className="fas fa-bolt"></i> Khởi chạy Ngay</a>
          </div>
        </div>
      </header>

      {/* S2: Sổ cái */}
      <section id="features-b2b" style={{padding:'100px 0'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-text text-left feature-glass-wrap">
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Sổ Cái Gạch Nợ Thông Minh</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Công nghệ cốt lõi giúp HLV không bao giờ sót doanh thu. Mỗi võ sinh được cấp 1 mã định danh Virtual Account (Tài khoản ảo VietQR). Phụ huynh chuyển tiền từ bất kỳ ngân hàng nào, App điện thoại của Sư phụ sẽ Báo "Ting Ting" ngay lập tức.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Gạch nợ học phí siêu tốc (Latency &lt; 3s).</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Điểm danh tự động qua camera quét mã vạch thẻ NFT.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Push thông báo Zalo đòi nợ tự động đến Phụ huynh nếu quá hạn.</li>
              </ul>
            </div>
            <div className="feature-visual"><img src="/assets/images/solution-b2b.png" alt="Fintech Dashboard" style={{width:'100%',borderRadius:'20px',boxShadow:'0 0 40px rgba(6,182,212,0.2)',border:'1px solid rgba(6,182,212,0.3)'}} /></div>
          </div>
        </div>
      </section>

      {/* S3: Điểm danh */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-qrcode" title="Quét QR Vào Cửa" sub="Dưới 1 giây — Không sờ giấy" /></div>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-clipboard-check"></i> Nỗi Đau #2</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Điểm Danh Vệ Tinh — Quét QR Vào Cửa 1 Giây</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Gọi tên từng học viên mất 15 phút đầu buổi tập, nhỡ một ngày vắng không biết ai nghỉ. VCT Platform cấp mỗi võ sinh một mã QR cá nhân — quét qua camera điện thoại là tự động check-in, HLV chỉ việc mở lớp và dạy.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Check-in tự động bằng QR hoặc Face ID (nếu có).</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Báo cáo tỷ lệ chuyên cần theo tuần/tháng/năm.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Tự động gửi cảnh báo khi võ sinh vắng 3 buổi liên tiếp.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Cloud */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-database"></i> Nỗi Đau #3</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Lưu Trữ Đám Mây Vĩnh Viễn — Không Bao Giờ Mất Data</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Laptop hỏng, USB mất, sổ giấy ướt mưa — bao nhiêu năm dữ liệu học viên bay sạch. VCT Platform lưu trữ toàn bộ hồ sơ trên hệ thống Đám Mây (Cloud) có Backup tự động hàng ngày.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Backup tự động hàng ngày — Disaster Recovery sẵn sàng.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Truy cập dữ liệu mọi lúc mọi nơi — chỉ cần điện thoại.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Máy chủ đặt tại Viettel IDC Việt Nam — tốc độ & an toàn tối ưu.</li>
              </ul>
            </div>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-cloud-upload-alt" title="Cloud Backup" sub="Tự động mỗi ngày — Không mất 1 byte" /></div>
          </div>
        </div>
      </section>

      {/* S5: Phụ huynh */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-users" title="Cổng Phụ Huynh" sub="Cập nhật con em — Mọi lúc mọi nơi" /></div>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-heart"></i> Nỗi Đau #4</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Cổng Phụ Huynh — Báo Cáo Tình Hình Con Em Tự Động</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Phụ huynh đưa con đi học võ nhưng không biết hôm nay con có đến lớp không. VCT Platform tự động gửi thông báo đến điện thoại phụ huynh: con đã check-in, kết quả buổi tập, và lịch nộp học phí sắp tới.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Push thông báo Zalo/App khi con check-in/check-out.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Bảng điểm rèn luyện theo tháng — giống sổ liên lạc điện tử.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Nhắc nộp học phí tự động — Phụ huynh quét QR trả tiền liền.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + Workflow + Testimonials + FAQ + CTA — same pattern */}
      <section style={{padding:'60px 0',borderTop:'1px solid rgba(255,255,255,0.05)',textAlign:'center'}}>
        <div className="container">
          <p className="text-muted-delicate" style={{fontSize:'1rem',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'2rem'}}>Hạ Tầng Công Nghệ Đạt Chuẩn Ngân Hàng - Xử Lý Hàng Triệu Giao Dịch</p>
          <div className="logo-cloud">
            {[{i:'fa-shield-alt',t:'Mã Hóa AES-256'},{i:'fa-server',t:'AWS Cloud Server'},{i:'fa-money-check-alt',t:'CASS System'},{i:'fa-qrcode',t:'VietQR Ready'}].map((b,i)=>(<div key={i} style={{fontSize:'1.5rem',fontWeight:'bold',color:'#fff'}}><i className={`fas ${b.i} text-cyan`}></i> {b.t}</div>))}
          </div>
        </div>
      </section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container text-center">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-cogs"></i> Triển Khai Dễ Dàng</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'3rem'}}>Chỉ Mất 3 Bước Đưa Võ Đường Lên Mây</h2>
          <div className="workflow-grid mt-5">
            {[{n:'1',t:'Khởi Tạo Hồ Sơ',d:'Nhập thông tin Võ đường và Tải tệp Excel danh sách Võ sinh cũ lên hệ thống chỉ trong 3 giây.'},{n:'2',t:'Kích Hoạt VietQR',d:'Hệ thống tự động sinh tài khoản ảo Virtual Account cho từng môn sinh. Phụ huynh sẵn sàng nạp học phí.'},{n:'3',t:'Phát Thể Điện Tử',d:'Cấp ngay mã QR cho học viên tự động check-in tại nhà thi đấu, giải phóng 100% thời gian điểm danh.'}].map((s,i)=>(
              <div key={i} className="workflow-step"><div className="step-number">{s.n}</div><h3 style={{color:'#fff',marginBottom:'15px',fontSize:'1.3rem'}}>{s.t}</h3><p className="text-muted-delicate" style={{fontSize:'1rem',lineHeight:1.6}}>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container text-center">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-quote-left"></i> Lời Giới Thiệu</span>
          <h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'3rem'}}>Quyết Định Thay Đổi Cục Diện</h2>
          <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'2rem',maxWidth:'900px',margin:'0 auto'}}>
            {[{q:'"Kể từ khi xài VCT, tôi đuổi luôn bà cô kế toán! Tiền học phí phụ huynh ting ting lúc nửa đêm hệ thống cũng báo đã gạch nợ. Quá nhàn cho một người dạy võ nghệ như tôi."',n:'Thầy HLV. Nguyễn Văn Tấn',r:'Chủ nhiệm CLB Taekwondo Quốc Gia'},{q:'"Dịch bệnh xong phụ huynh ít cho con đi học. Tính năng nhắc nộp nợ tự động qua Zalo của VCT đã cứu vớt doanh thu CLB, tôi không cần phải đòi nợ từng nhà nữa."',n:'Thầy Vũ Ngọc Hùng',r:'CEO Hệ thống Vovinam Kids'}].map((t,i)=>(
              <div key={i} className="feature-glass-wrap" style={{padding:'2rem'}}><i className="fas fa-star" style={{color:'#fbbf24',marginBottom:'15px',display:'block'}}></i><p style={{color:'var(--text-muted)',fontStyle:'italic',marginBottom:'20px'}}>{t.q}</p><h4 style={{color:'var(--cyan-accent)',marginBottom:'5px'}}>{t.n}</h4><span style={{fontSize:'0.9rem',color:'#64748b'}}>{t.r}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'3rem'}}>
            <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-question-circle"></i> Câu Hỏi Thường Gặp</span>
            <h2 className="title-serif text-cyan" style={{fontSize:'2.2rem'}}>Khai Cốt Giải Nghi</h2>
          </div>
          <div className="faq-accordion" style={{maxWidth:'800px',margin:'0 auto'}}>
            {[{q:'Phần mềm quản lý võ đường VCT có dễ sử dụng cho người mù công nghệ không?',a:'Giao diện của VCT Platform được thiết kế chuyên biệt cho Thầy Dạy Võ chứ không phải dân IT. Các nút bấm được tự động hoá và tinh lược tối đa (One-click). Chỉ cần Thầy biết xài Zalo, là chắc chắn biết dùng VCT.'},{q:'Hệ thống Gạch Nợ VietQR có tính phí phụ thu/% giao dịch của phụ huynh không?',a:'Tuyệt đối không. Phụ huynh chuyển khoản 500,000đ học phí, tiền vào thẳng tài khoản ngân hàng của Võ Đường đúng 500,000đ. Hệ thống chỉ đọc biến động số dư để gạch nợ trên app.'},{q:'Dữ liệu thẻ NFT và danh sách Võ sinh có được bảo mật chống trộm không?',a:'100% dữ liệu được lưu trữ trên Server đám mây (Cloud) đạt chuẩn ngân hàng với giao thức mã hóa AES-256 đầu cuối. VCT cam kết tuyệt đối không buôn bán Data.'}].map((f,i)=>(
              <details key={i}><summary>{f.q}</summary><div className="faq-content">{f.a}</div></details>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0',background:'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.08) 100%)',textAlign:'center'}}>
        <div className="container">
          <h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'15px'}}>Số Hóa Võ Đường Của Bạn<br/>Ngay Hôm Nay</h2>
          <p className="text-muted-delicate" style={{maxWidth:'550px',margin:'0 auto 2.5rem auto'}}>Miễn phí trọn đời cho CLB dưới 50 võ sinh. Đăng ký trong 30 giây.</p>
          <div style={{display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap'}}>
            <a href="https://app.vctplatform.vn/register" className="btn btn-primary" style={{padding:'14px 36px'}}><i className="fas fa-rocket" style={{marginRight:'8px'}}></i> Đăng Ký Miễn Phí</a>
            <a href="tel:0981108078" className="btn btn-outline" style={{padding:'14px 36px'}}><i className="fas fa-phone-alt" style={{marginRight:'8px'}}></i> Hotline: 0981.10.80.78</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SolutionCauLacBo;
