import React, { useEffect, useRef } from 'react';

const SolutionGiaiDau: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "Phần Mềm Quản Lý & Tổ Chức Giải Đấu | VCT Platform";
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')), { threshold: 0.1 });
    mainRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const FI = ({ icon, title, sub }: { icon: string; title: string; sub: string }) => (<div style={{background:'rgba(6,182,212,0.05)',border:'1px solid rgba(6,182,212,0.15)',borderRadius:'20px',padding:'3rem',textAlign:'center'}}><i className={`fas ${icon}`} style={{fontSize:'5rem',color:'var(--cyan-accent)',marginBottom:'1.5rem',display:'block'}}></i><p style={{color:'#F8FAFC',fontSize:'1.3rem',fontWeight:600}}>{title}<br/><span style={{color:'var(--cyan-accent)',fontSize:'0.9rem'}}>{sub}</span></p></div>);

  return (
    <div ref={mainRef} className="infographic-canvas hero-infographic-tourney">
      <header className="solution-hero relative" style={{padding:'180px 0 100px 0',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container relative z-10 text-center">
          <span className="module-badge" style={{color:'var(--cyan-accent)',borderColor:'rgba(6,182,212,0.3)',background:'rgba(6,182,212,0.1)',marginBottom:'2rem'}}><i className="fas fa-trophy"></i> Khối Chuyên Môn Sự Kiện</span>
          <h1 className="title-serif text-chrome" style={{fontSize:'3.5rem',marginBottom:'1.5rem'}}>Cỗ Máy Vận Hành<br/><span style={{color:'var(--cyan-accent)'}}>Giải Đấu Điện Tử.</span></h1>
          <p className="text-muted-delicate" style={{maxWidth:'800px',margin:'0 auto 3rem auto',fontSize:'1.25rem'}}>Nỗi ám ảnh xếp lịch thi đấu thủ công và đối soát tiền lệ phí hàng tháng trời nay đã chấm dứt. VCT Platform giúp Ban Tổ Chức (BTC) Số Hóa 100% quy trình từ Khâu Đăng Ký đến Bục Nhận Huy Chương.</p>
          <div className="hero-actions" style={{display:'flex',justifyContent:'center',gap:'15px'}}>
            <a href="#features-tournament" className="btn btn-primary" style={{background:'var(--cyan-accent)',borderColor:'var(--cyan-accent)',padding:'14px 32px'}}><i className="fas fa-sitemap"></i> Trải Nghiệm Bốc Thăm</a>
          </div>
        </div>
      </header>

      <section id="features-tournament" style={{padding:'100px 0'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-text text-left feature-glass-wrap">
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Chia Nhánh (Bracket) Không Sai Sót</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Công nghệ bốc thăm theo hạt giống (Seeding) siêu tốc trong 3 giây. Trọng tài sử dụng Smartphone hoặc Ipad chấm điểm ngay trên thảm thi đấu. Hệ thống Real-time phản chiếu điểm số lên màn hình LED lớn ngoài sân đấu giống chuẩn Olympic.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Tự Động Hóa Xếp Lịch: Random hoặc theo Hạt giống phân cấp.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Cổng Đăng Ký VietQR: Thu lệ phí thi đấu mượt mà.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Trọng Tài Điện Tử: Bảng số điện tử hiển thị lỗi, điểm, thời gian bù giờ.</li>
          </ul>
        </div>
        <div className="feature-visual"><img src="/assets/images/solution-tournament.png" alt="Tournament Bracket" style={{width:'100%',borderRadius:'20px',boxShadow:'0 0 40px rgba(6,182,212,0.2)',border:'1px solid rgba(6,182,212,0.3)'}} /></div>
      </div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-visual" style={{textAlign:'center'}}><FI icon="fa-cash-register" title="Cổng Thu Lệ Phí" sub="VietQR — Đóng tiền mới lên danh sách" /></div>
        <div className="feature-text text-left feature-glass-wrap">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-hand-holding-usd"></i> Nỗi Đau #2</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Cổng Thu Lệ Phí VietQR — Đóng Tiền Mới Lên Danh Sách</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>BTC giải đấu thu tiền bằng chuyển khoản cá nhân rồi đối soát thủ công cả tuần. VCT Platform cấp mỗi đoàn thi đấu một mã VietQR riêng — hệ thống tự động kiểm tra thanh toán → chốt danh sách VĐV → in thẻ thi đấu.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Mỗi đoàn 1 mã QR — tự động khớp tiền với danh sách VĐV.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Xuất hóa đơn điện tử cho từng đoàn ngay sau khi thanh toán.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Dashboard tài chính tổng hợp — BTC nắm rõ số tiền thu được.</li>
          </ul>
        </div>
      </div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
        <div className="feature-text text-left feature-glass-wrap">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-tv"></i> Nỗi Đau #3</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Bảng Điểm LED Real-time — Trọng Tài Chấm, Khán Giả Thấy</h2>
          <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>VCT Platform biến mọi thiết bị Smartphone/iPad thành bàn chấm điểm điện tử — kết quả tự động hiển thị trên màn hình LED lớn giống chuẩn quốc tế SEA Games.</p>
          <ul className="module-features" style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Trọng tài chấm điểm qua Smartphone — điểm hiện ngay màn hình sân.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Hỗ trợ nhiều thảm thi đấu song song — mỗi thảm 1 bảng số.</li>
            <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Xuất kết quả & Bảng xếp hạng tức thời sau mỗi nội dung thi.</li>
          </ul>
        </div>
        <div className="feature-visual" style={{textAlign:'center'}}><FI icon="fa-digital-tachograph" title="Bảng Điểm LED" sub="Real-time — Chuẩn quốc tế" /></div>
      </div></div></section>

      <section style={{padding:'60px 0',borderTop:'1px solid rgba(255,255,255,0.05)',textAlign:'center'}}><div className="container"><p className="text-muted-delicate" style={{fontSize:'1rem',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'2rem'}}>Công Nghệ Lõi Được Thiết Kế Cho Các Thể Thức Tiêu Chuẩn Quốc Tế</p><div className="logo-cloud">{[{i:'fa-sitemap',t:'Khung Đấu Kép (Double Elimination)'},{i:'fa-sync-alt',t:'Đấu Vòng Tròn (Round Robin)'},{i:'fa-wifi',t:'Chấm Điểm Real-time Websocket'}].map((b,i)=>(<div key={i} style={{fontSize:'1.5rem',fontWeight:'bold',color:'#fff'}}><i className={`fas ${b.i} text-cyan`}></i> {b.t}</div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container text-center"><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-tachometer-alt"></i> Tốc Độ Tổ Chức</span><h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'3rem'}}>Tổ Chức Giải Đấu Trong Tích Tắc</h2><div className="workflow-grid mt-5">{[{n:'1',t:'Mở Cổng Đăng Ký',d:'Tạo Link gửi cho các Trưởng Đoàn. Họ sẽ tự điền danh sách VĐV, hệ thống tự động chốt đơn khi VietQR báo có tiền.'},{n:'2',t:'Bốc Thăm Nhánh Đấu',d:'Sử dụng thuật toán Seeding (hạt giống) để chia nhánh (Bracket). Tránh việc gà nhà đá nhau ở vòng loại chỉ với 1 Click.'},{n:'3',t:'Chấm Điểm Live',d:'Vào lưới đấu, Trọng tài cầm iPad bấm điểm. Kết quả cập nhật Real-time lên Màn hình LED lớn ngoài sân đấu.'}].map((s,i)=>(<div key={i} className="workflow-step"><div className="step-number">{s.n}</div><h3 style={{color:'#fff',marginBottom:'15px',fontSize:'1.3rem'}}>{s.t}</h3><p className="text-muted-delicate" style={{fontSize:'1rem',lineHeight:1.6}}>{s.d}</p></div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container text-center"><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-comment-dots"></i> Nhận Xét Từ Trọng Tài</span><h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'3rem'}}>Chấm Dứt Thời Kỳ Làm Giải Thủ Công</h2><div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'2rem',maxWidth:'900px',margin:'0 auto'}}>{[{q:'"Hồi xưa bốc thăm tay mất cả buổi sáng. Cầm VCT Platform bấm phát ra luôn 64 nhánh đấu chuẩn chỉ."',n:'Thầy Trần N.',r:'Tổng Trọng Tài Giải Trẻ'},{q:'"Khoái nhất là vụ thu tiền. Trưởng đoàn quét mã QR 1 phát, hệ thống cạch tick xanh là chốt danh sách."',n:'Cô Tâm',r:'Trưởng Ban Tổ Chức Giải Đấu Mở Rộng'}].map((t,i)=>(<div key={i} className="feature-glass-wrap" style={{padding:'2rem'}}><i className="fas fa-stopwatch" style={{color:'rgba(6,182,212,0.5)',fontSize:'2rem',marginBottom:'15px',display:'block'}}></i><p style={{color:'var(--text-muted)',fontStyle:'italic',marginBottom:'20px'}}>{t.q}</p><h4 style={{color:'var(--cyan-accent)',marginBottom:'5px'}}>{t.n}</h4><span style={{fontSize:'0.9rem',color:'#64748b'}}>{t.r}</span></div>))}</div></div></section>

      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}><div className="container"><div className="text-center" style={{marginBottom:'3rem'}}><span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-clipboard-list"></i> Thiết Lập Kỹ Thuật</span><h2 className="title-serif text-cyan" style={{fontSize:'2.2rem'}}>Hỏi Đáp Về Vận Hành Giải Đấu</h2></div><div className="faq-accordion" style={{maxWidth:'800px',margin:'0 auto'}}>{[{q:'Nền tảng này hỗ trợ các thể thức thi đấu (Bracket Type) nào?',a:'VCT Engine hỗ trợ: Loại trực tiếp (Single Elimination), Loại nhánh thua (Double Elimination), và Vòng tròn tính điểm (Round Robin). Có kèm tính năng chia Hạt giống (Seeding).'},{q:'Làm sao để kết nối điện thoại của Trọng tài với Màn hình LED lớn?',a:'Chỉ cần Tivi hoặc Màn hình LED có kết nối Wifi. Mở link bảng điểm Real-time trên trình duyệt. Trọng tài dùng điện thoại 4G chấm, điểm trên Tivi nhảy tức thì do sử dụng WebSockets.'},{q:'Nếu giữa giải có VĐV bỏ cuộc hoặc bị truất quyền thi đấu?',a:'Tổng trọng tài có quyền can thiệp vào Nhánh đấu bất cứ lúc nào qua tài khoản Root. Chọn VĐV và đánh dấu "Hủy tư cách", hệ thống tự động đẩy đối thủ đi tiếp.'}].map((f,i)=>(<details key={i}><summary>{f.q}</summary><div className="faq-content">{f.a}</div></details>))}</div></div></section>

      <section style={{padding:'80px 0',background:'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.08) 100%)',textAlign:'center'}}><div className="container"><h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'15px'}}>Tổ Chức Giải Đấu Chuyên Nghiệp<br/>Với VCT Platform</h2><p className="text-muted-delicate" style={{maxWidth:'550px',margin:'0 auto 2.5rem auto'}}>Từ đăng ký VĐV, bốc thăm, chấm điểm đến xếp hạng — tất cả trên 1 nền tảng.</p><div style={{display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap'}}><a href="tel:0981108078" className="btn btn-primary" style={{padding:'14px 36px'}}><i className="fas fa-phone-alt" style={{marginRight:'8px'}}></i> Hotline: 0981.10.80.78</a><a href="https://m.me/vctplatform.official" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding:'14px 36px'}}><i className="fab fa-facebook-messenger" style={{marginRight:'8px'}}></i> Chat Messenger</a></div></div></section>
    </div>
  );
};
export default SolutionGiaiDau;
