import React, { useEffect, useRef } from 'react';

const SolutionVoSinh: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "App Quản Lý Võ Sinh & Giao Tiếp Phụ Huynh | VCT Platform";
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')), { threshold: 0.1 });
    mainRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const FeatureIcon = ({ icon, title, sub }: { icon: string; title: string; sub: string }) => (<div style={{background:'rgba(6,182,212,0.05)',border:'1px solid rgba(6,182,212,0.15)',borderRadius:'20px',padding:'3rem',textAlign:'center'}}><i className={`fas ${icon}`} style={{fontSize:'5rem',color:'var(--cyan-accent)',marginBottom:'1.5rem',display:'block'}}></i><p style={{color:'#F8FAFC',fontSize:'1.3rem',fontWeight:600}}>{title}<br/><span style={{color:'var(--cyan-accent)',fontSize:'0.9rem'}}>{sub}</span></p></div>);

  return (
    <div ref={mainRef} className="infographic-canvas hero-infographic-b2c">
      <header className="solution-hero relative" style={{padding:'180px 0 100px 0',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container relative z-10 text-center">
          <span className="module-badge" style={{color:'var(--cyan-accent)',borderColor:'rgba(6,182,212,0.3)',background:'rgba(6,182,212,0.1)',marginBottom:'2rem'}}><i className="fas fa-user-graduate"></i> Khối Cá Nhân (B2C)</span>
          <h1 className="title-serif text-chrome" style={{fontSize:'3.5rem',marginBottom:'1.5rem'}}>Cổng Gamification Thành Tích<br/><span style={{color:'var(--cyan-accent)'}}>Võ Sĩ VCT.</span></h1>
          <p className="text-muted-delicate" style={{maxWidth:'800px',margin:'0 auto 3rem auto',fontSize:'1.25rem'}}>Hành trình rèn luyện võ đạo chưa bao giờ số hóa đến thế. Tạm biệt thẻ giấy nhàu nát mờ chữ, mỗi võ sinh sẽ được "Mint" một thẻ NFT Định Danh Kỹ Thuật Số để theo dõi điểm số, số nợ và kỹ năng chiến đấu.</p>
          <div className="hero-actions" style={{display:'flex',justifyContent:'center',gap:'15px'}}>
            <a href="#features-b2c" className="btn btn-primary" style={{background:'var(--cyan-accent)',borderColor:'var(--cyan-accent)',padding:'14px 32px',color:'#fff'}}><i className="fas fa-mobile-alt" style={{color:'#fff'}}></i> Khám phá Thẻ Điện Tử</a>
          </div>
        </div>
      </header>

      <section id="features-b2c" style={{padding:'100px 0'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-visual"><img src="/assets/images/solution-b2c.png" alt="NFT Membership" style={{width:'100%',borderRadius:'20px',boxShadow:'0 0 40px rgba(6,182,212,0.2)',border:'1px solid rgba(6,182,212,0.3)'}} /></div>
        <div className="feature-text text-left feature-glass-wrap">
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>NFT Hóa Quyền Hội Viên</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Công nghệ NFT giả lập, chống làm giả mã QR và định danh võ sinh xuyên suốt sự nghiệp từ khi mới đeo Đai Trắng đến mức chuẩn HLV Quốc Gia.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Tra cứu Chứng Nhận và Đai Đẳng chống giả mạo.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Nộp điểm rèn luyện (Workout Tracking) tại nhà qua App.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Kết nối mượt mà tới điện thoại của Phụ Huynh để báo tin tốt.</li>
          </ul>
        </div>
      </div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-text text-left feature-glass-wrap">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-road"></i> Nỗi Đau #2</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Lộ Trình Đai Đẳng Minh Bạch — Xem Tiến Trình Trên App</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Tập võ 2 năm rồi nhưng không biết khi nào được thi lên đai. Mọi điều kiện thăng cấp được hiển thị rõ ràng trên App — giống thanh kinh nghiệm (XP Bar) trong trò chơi điện tử.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Thanh tiến trình thăng đai trực quan: 70% hoàn thành → còn 12 buổi.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Thông báo khi đủ điều kiện thi — đăng ký ngay trên App.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Lịch sử thành tích từ Đai Trắng đến HLV — như CV võ thuật số.</li>
          </ul>
        </div>
        <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-medal" title="Lộ Trình Thăng Đai" sub="Minh bạch — Gamification — Công bằng" /></div>
      </div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-play-circle" title="Thư Viện Bài Quyền" sub="Video HD — Tập luyện mọi lúc mọi nơi" /></div>
        <div className="feature-text text-left feature-glass-wrap">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-video"></i> Nỗi Đau #3</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Thư Viện Bài Quyền Video — Tập Luyện Mọi Lúc Mọi Nơi</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>VCT Platform xây dựng Thư viện Video bài tập theo từng cấp đai — võ sinh mở App, xem video chuẩn HLV thị phạm, và tự luyện tập tại nhà.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Video bài quyền theo cấp đai — từ cơ bản đến nâng cao.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> HLV tải video thị phạm lên cho CLB riêng của mình.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Chấm điểm rèn luyện tại nhà khi nộp video hoàn thành bài tập.</li>
          </ul>
        </div>
      </div></div></section>

      {/* Workflow + Testimonials + FAQ + CTA */}
      <section style={{padding:'60px 0',borderTop:'1px solid rgba(255,255,255,0.05)',textAlign:'center'}}><div className="container"><p className="text-muted-delicate" style={{fontSize:'1rem',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'2rem'}}>Hành Trang Sổ Tay Võ Thuật Thế Hệ Mới</p><div className="logo-cloud">{[{i:'fab fa-apple',t:'Sẵn Sàng Trên iOS'},{i:'fab fa-google-play',t:'Hệ Sinh Thái Android'},{i:'fas fa-id-badge',t:'Chứng Chỉ Điện Tử NFT'}].map((b,i)=>(<div key={i} style={{fontSize:'1.5rem',fontWeight:'bold',color:'#fff'}}><i className={`${b.i} text-cyan`}></i> {b.t}</div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container text-center"><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-magic"></i> Cài Đặt Siêu Tốc</span><h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'3rem'}}>3 Bước Để Gia Nhập Meta-Dojo</h2><div className="workflow-grid mt-5">{[{n:'1',t:'Tải App VCT',d:'Ứng dụng có sẵn miễn phí trên iOS và Android. Cài đặt vỏn vẹn trong 1 phút.'},{n:'2',t:'Kích Hoạt Thẻ NFT',d:'Nhập mã định danh do Thầy Chủ nhiệm cấp để "Mint" thẻ bài điện tử riêng của bạn.'},{n:'3',t:'Tích Lũy Kinh Nghiệm',d:'Quét mã QR mỗi lần lên thảm để nhận XP, xem video bài quyền và chuẩn bị thi lên đai.'}].map((s,i)=>(<div key={i} className="workflow-step"><div className="step-number">{s.n}</div><h3 style={{color:'#fff',marginBottom:'15px',fontSize:'1.3rem'}}>{s.t}</h3><p className="text-muted-delicate" style={{fontSize:'1rem',lineHeight:1.6}}>{s.d}</p></div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container text-center"><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-heart"></i> Đánh Giá</span><h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'3rem'}}>Phụ Huynh & Võ Sinh Nói Gì?</h2><div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'2rem',maxWidth:'900px',margin:'0 auto'}}>{[{q:'"Bé nhà tôi đi tập võ nhưng không bao giờ nhớ bài. Dùng App VCT có video thầy quay sẵn, cháu về nhà mở lên tự ôn bài quyền để thi lên đai rất tiện."',n:'Chị Lan Trần',r:'Phụ huynh bé Hoàng Quân (Đai Vàng)'},{q:'"Cái thẻ NFT nhìn ngầu thật sự. Lên võ đường rút điện thoại ra quét QR cái tít là dính điểm XP như chơi game online. Tự nhiên có động lực đi tập ghê."',n:'Tuấn Anh (17 tuổi)',r:'Môn sinh Karate Do'}].map((t,i)=>(<div key={i} className="feature-glass-wrap" style={{padding:'2rem'}}><i className="fas fa-quote-left" style={{color:'rgba(6,182,212,0.5)',fontSize:'2rem',marginBottom:'15px',display:'block'}}></i><p style={{color:'var(--text-muted)',fontStyle:'italic',marginBottom:'20px'}}>{t.q}</p><h4 style={{color:'var(--cyan-accent)',marginBottom:'5px'}}>{t.n}</h4><span style={{fontSize:'0.9rem',color:'#64748b'}}>{t.r}</span></div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="text-center" style={{marginBottom:'3rem'}}><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-question-circle"></i> Giải Đáp Thắc Mắc</span><h2 className="title-serif text-cyan" style={{fontSize:'2.2rem'}}>Hỏi Nhanh Đáp Gọn</h2></div><div className="faq-accordion" style={{maxWidth:'800px',margin:'0 auto'}}>{[{q:'Làm sao để tôi có được tài khoản đăng nhập App VCT?',a:'App dành cho võ sinh hoàn toàn miễn phí, nhưng bạn chỉ đăng nhập được khi CLB của bạn đang sử dụng VCT Platform. Khi thầy tạo hồ sơ, bạn sẽ nhận được SMS chứa ID và Mật khẩu.'},{q:'Phụ huynh và học sinh có dùng chung 1 App không?',a:'Có. Ứng dụng VCT có chế độ "Parent Mode" (Chế độ phụ huynh). Ba mẹ có thể quản lý nhiều bé học ở nhiều võ đường khác nhau trên cùng 1 App.'},{q:'App bị lỗi không quét được QR điểm danh thì phải làm sao?',a:'Bạn có thể đọc Số ID thẻ cho HLV nhập tay, hoặc check-in thông qua FaceID / Vân tay. Mọi thứ đều Đồng bộ thời gian thực.'}].map((f,i)=>(<details key={i}><summary>{f.q}</summary><div className="faq-content">{f.a}</div></details>))}</div></div></section>

      <section style={{padding:'80px 0',background:'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.08) 100%)',textAlign:'center'}}><div className="container">
        <h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'15px'}}>Tải App VCT Ngay — Biến Luyện Tập Thành Hành Trình</h2>
        <p className="text-muted-delicate" style={{maxWidth:'550px',margin:'0 auto 2.5rem auto'}}>Miễn phí trên iOS & Android. Theo dõi tiến trình, lộ trình đai đẳng và thư viện bài quyền.</p>
        <div style={{display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap'}}>
          <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding:'12px 30px',display:'inline-flex',alignItems:'center',gap:'10px'}}><i className="fab fa-apple" style={{fontSize:'1.5rem'}}></i><div style={{textAlign:'left',lineHeight:1}}><span style={{fontSize:'0.7rem',display:'block',opacity:0.8}}>Download on the</span><strong style={{fontSize:'1.1rem',display:'block'}}>App Store</strong></div></a>
          <a href="https://play.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding:'12px 30px',display:'inline-flex',alignItems:'center',gap:'10px'}}><i className="fab fa-google-play" style={{fontSize:'1.5rem'}}></i><div style={{textAlign:'left',lineHeight:1}}><span style={{fontSize:'0.7rem',display:'block',opacity:0.8}}>GET IT ON</span><strong style={{fontSize:'1.1rem',display:'block'}}>Google Play</strong></div></a>
        </div>
      </div></section>
    </div>
  );
};
export default SolutionVoSinh;
