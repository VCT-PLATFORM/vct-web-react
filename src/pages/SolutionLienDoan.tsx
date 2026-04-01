import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SolutionLienDoan: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "Phần Mềm Quản Lý & Số Hóa Liên Đoàn | VCT Platform";
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
    <div ref={mainRef} className="infographic-canvas hero-infographic-b2g">
      {/* Hero */}
      <header className="solution-hero relative" style={{padding:'180px 0 100px 0',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container relative z-10 text-center">
          <span className="module-badge" style={{color:'var(--cyan-accent)',borderColor:'rgba(6,182,212,0.3)',background:'rgba(6,182,212,0.1)',marginBottom:'2rem'}}><i className="fas fa-satellite-dish"></i> Khối Chính Phủ & Liên Đoàn (B2G)</span>
          <h1 className="title-serif text-chrome" style={{fontSize:'3.5rem',marginBottom:'1.5rem'}}>Trung Tâm Chỉ Huy<br/><span style={{color:'var(--cyan-accent)'}}>Hệ Sinh Thái.</span></h1>
          <p className="text-muted-delicate" style={{maxWidth:'800px',margin:'0 auto 3rem auto',fontSize:'1.25rem'}}>Xóa bỏ hoàn toàn quy trình báo cáo Excel / Cuốn sổ dày cộp. Chỉ bằng 1 cú Click, <strong>Chủ tịch Liên đoàn</strong> có thể Mapping toàn bộ dữ liệu Võ đường, Võ sinh và Tài chính vĩ mô trên một Sa bàn kỹ thuật số (Command Center).</p>
          <div className="hero-actions" style={{display:'flex',justifyContent:'center',gap:'15px'}}>
            <a href="#features-b2g" className="btn btn-primary" style={{background:'var(--cyan-accent)',borderColor:'var(--cyan-accent)',padding:'14px 32px'}}><i className="fas fa-radar"></i> Quét Rada Giải Pháp</a>
            <Link to="/bang-gia" className="btn btn-outline" style={{padding:'14px 32px'}}><i className="fas fa-credit-card"></i> Xem Báo Giá Tham Khảo</Link>
          </div>
        </div>
      </header>

      {/* S2: Macro View */}
      <section id="features-b2g" style={{padding:'100px 0'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-visual"><img src="/assets/images/solution-b2g.png" alt="Command Center" style={{width:'100%',borderRadius:'20px',boxShadow:'0 0 40px rgba(6,182,212,0.2)',border:'1px solid rgba(6,182,212,0.3)'}} /></div>
            <div className="feature-text text-left feature-glass-wrap">
              <h2 className="title-serif text-cyan" style={{fontSize:'2.2rem',marginBottom:'20px'}}>Kiểm Soát Vĩ Mô (Macro-View)</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Liên đoàn không còn phải đợi báo cáo điểm danh file Word chạy bằng Fax. Hệ thống thu thập tín hiệu Data theo thời gian thực (Real-time). Biết chính xác tỉnh thành X, huyện Y hôm nay có bao nhiêu võ đường đang mở cửa tập, bao nhiêu võ sinh điểm danh.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Quản lý toàn vẹn Hồ sơ Trọng tài, HLV Cấp Quốc Gia.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Ký duyệt điện tử văn bản thăng đai cực kỳ nhanh gọn.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Nhúng hệ sinh thái chuẩn quy định Của Tổng Cục TDTT.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S3: Chứng chỉ giả mạo */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-file-signature"></i> Nỗi Đau #2</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Chấm Dứt Chứng Chỉ Giả Mạo — Ký Số Quốc Gia</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Hồ sơ thăng đai bằng giấy có thể bị thất lạc, photocopy tràn lan, thậm chí giả mạo đẳng cấp. VCT Platform số hóa toàn bộ quy trình cấp chứng chỉ — mỗi văn bản được gắn mã QR xác thực chống giả mạo và lưu trữ trên cơ sở dữ liệu vĩnh viễn.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Mỗi chứng chỉ gắn mã QR — quét là biết thật/giả.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Luồng phê duyệt điện tử Chủ tịch → Tổng thư ký → Trưởng ban chuyên môn.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Tra cứu lịch sử đai đẳng của bất kỳ HLV/Võ sinh nào trên toàn quốc.</li>
              </ul>
            </div>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-certificate" title="Chứng Chỉ Điện Tử" sub="Xác thực bằng QR — Không thể giả mạo" /></div>
          </div>
        </div>
      </section>

      {/* S4: Tài chính */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-chart-pie" title="Bảng Cân Đối Kế Toán" sub="Real-time — Minh bạch từng đồng" /></div>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-coins"></i> Nỗi Đau #3</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Dòng Tiền Minh Bạch — Bảng Cân Đối Kế Toán Liên Đoàn</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Liên đoàn quản lý hàng trăm CLB trực thuộc nhưng không có cách nào biết dòng tiền học phí mỗi tháng là bao nhiêu. VCT Platform tập trung hóa tài chính — từ mức phí từng võ sinh cho đến tổng thu toàn Tỉnh — lên một Dashboard tài chính theo thời gian thực.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Tổng hợp doanh thu toàn bộ CLB trực thuộc tự động.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Xuất báo cáo tài chính theo Quý cho Ban Thanh tra.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Phát hiện CLB chậm nộp hội phí — Cảnh báo ngay.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Công văn */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
            <div className="feature-text text-left feature-glass-wrap">
              <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-paper-plane"></i> Nỗi Đau #4</span>
              <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'20px'}}>Hệ Thống Công Văn Điện Tử & Phân Quyền Đa Cấp</h2>
              <p className="text-muted-delicate" style={{marginBottom:'30px',fontSize:'1.1rem',lineHeight:1.8}}>Chủ tịch Liên đoàn gửi công văn bằng Zalo rồi mất trong biển tin nhắn. Không ai biết ai đã đọc, ai đã thực hiện. VCT Platform xây dựng kênh Công văn số với trạng thái theo dõi: Đã gửi → Đã nhận → Đã hoàn thành — đảm bảo không sót lệnh nào.</p>
              <ul className="module-features" style={{listStyle:'none',padding:0}}>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Phân quyền 4 cấp: Chủ tịch / Ban chuyên môn / Chủ CLB / HLV.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Theo dõi trạng thái thực hiện công văn theo thời gian thực.</li>
                <li style={{marginBottom:'15px'}}><i className="fas fa-check-circle" style={{color:'var(--cyan-accent)',marginRight:'10px'}}></i> Lưu trữ toàn bộ lịch sử ra quyết định — phục vụ kiểm toán.</li>
              </ul>
            </div>
            <div className="feature-visual" style={{textAlign:'center'}}><FeatureIcon icon="fa-network-wired" title="Phân Quyền Đa Cấp" sub="Chủ tịch → CLB → HLV → Võ sinh" /></div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{padding:'60px 0',borderTop:'1px solid rgba(255,255,255,0.05)',textAlign:'center'}}>
        <div className="container">
          <p className="text-muted-delicate" style={{fontSize:'1rem',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'2rem'}}>Hạ Tầng Lõi Sẵn Sàng Vận Hành Cơ Sở Dữ Liệu Cấp Sở/Ban/Ngành</p>
          <div className="logo-cloud">
            {[{i:'fa-server',t:'Data Sovereignty'},{i:'fa-network-wired',t:'Phân Cấp Đa Tầng'},{i:'fa-file-signature',t:'Ký Số Điện Tử'},{i:'fa-chart-pie',t:'Real-time Analytics'}].map((b,i)=>(<div key={i} style={{fontSize:'1.5rem',fontWeight:'bold',color:'#fff'}}><i className={`fas ${b.i} text-cyan`}></i> {b.t}</div>))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container text-center">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-project-diagram"></i> Quy Trình Tích Hợp</span>
          <h2 className="title-serif" style={{color:'var(--cyan-accent)',fontSize:'2.2rem',marginBottom:'3rem'}}>Chuyển Đổi Số Liên Đoàn Trong 3 Giai Đoạn</h2>
          <div className="workflow-grid mt-5">
            {[{n:'1',t:'Bản Đồ Hóa (Mapping)',d:'Đội ngũ kỹ sư VCT sẽ số hóa cấu trúc phân cấp: Liên Đoàn -> Hội Nhánh Tỉnh -> Võ Đường Trực Thuộc lên Server.'},{n:'2',t:'Cấp Quyền Phân Định',d:'Khởi tạo tài khoản Quản trị cấp cao (Admin) cho Chủ tịch để theo dõi Bảng điều khiển vĩ mô ngay trên iPad.'},{n:'3',t:'Ban Hành QR Ký Số',d:'Áp dụng hệ thống cấp chứng chỉ điện tử cho đợt thi thăng đai quốc gia gần nhất để nghiệm thu hệ thống.'}].map((s,i)=>(
              <div key={i} className="workflow-step"><div className="step-number">{s.n}</div><h3 style={{color:'#fff',marginBottom:'15px',fontSize:'1.3rem'}}>{s.t}</h3><p className="text-muted-delicate" style={{fontSize:'1rem',lineHeight:1.6}}>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container text-center">
          <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-landmark"></i> Góc Nhìn Quản Trị</span>
          <h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'3rem'}}>Tiếng Nói Từ Cấp Lãnh Đạo</h2>
          <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'2rem',maxWidth:'900px',margin:'0 auto'}}>
            {[{q:'"Quản lý hơn 200 CLB nhánh trên toàn tỉnh bằng báo cáo giấy là một thảm họa kiểm toán. Hệ thống Command Center của VCT giúp tôi nắm rõ dòng tiền hội phí và nhân sự chỉ với 1 cú click."',n:'Ông Lê Văn H.',r:'Chủ Tịch Liên Đoàn Võ Thuật Tỉnh'},{q:'"Việc áp dụng Chứng chỉ điện tử gắn mã QR không chỉ giúp cắt giảm 80% chi phí in ấn mà còn dẹp bỏ triệt để nạn làm giả giấy chứng nhận đai đẳng tràn lan."',n:'Master Nguyễn T.',r:'Trưởng Ban Chuyên Môn Quốc Gia'}].map((t,i)=>(
              <div key={i} className="feature-glass-wrap" style={{padding:'2rem'}}><i className="fas fa-file-contract" style={{color:'rgba(6,182,212,0.5)',fontSize:'2rem',marginBottom:'15px',display:'block'}}></i><p style={{color:'var(--text-muted)',fontStyle:'italic',marginBottom:'20px'}}>{t.q}</p><h4 style={{color:'var(--cyan-accent)',marginBottom:'5px'}}>{t.n}</h4><span style={{fontSize:'0.9rem',color:'#64748b'}}>{t.r}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'100px 0',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'3rem'}}>
            <span className="module-badge" style={{marginBottom:'1.5rem'}}><i className="fas fa-shield-alt"></i> Giải Đáp Bảo Mật</span>
            <h2 className="title-serif text-cyan" style={{fontSize:'2.2rem'}}>Hỏi Đáp Khối Doanh Nghiệp & Chính Phủ</h2>
          </div>
          <div className="faq-accordion" style={{maxWidth:'800px',margin:'0 auto'}}>
            {[{q:'Dữ liệu của Liên đoàn có đảm bảo tính An Ninh Quốc Gia (Data Sovereignty) không?',a:'Tuyệt đối. Toàn bộ cơ sở dữ liệu của khối B2G được VCT Platform triển khai trên các cụm máy chủ vật lý đặt tại lãnh thổ Việt Nam, tuân thủ nghiêm ngặt Luật An Ninh Mạng. Hạ tầng mạng được mã hóa Private Link chống bọc lót IP từ nước ngoài.'},{q:'Hệ thống có khả năng tương thích ngược với dữ liệu Excel cũ kéo dài 10 năm không?',a:'Có. Đội ngũ Data Engineer của chúng tôi có công cụ ETL chuyên biệt. Hệ thống hỗ trợ Import hàng chục ngàn dòng lịch sử thăng đai, chứng chỉ từ các file Excel hay Access cũ để tái kiến thiết (Reverse Mapping) lên cơ sở dữ liệu số hoàn hảo.'},{q:'Chi phí triển khai tính theo đầu Võ sinh hay theo Gói Server?',a:'Đối với Liên đoàn và tổ chức cấp Chính phủ, VCT áp dụng mô hình Giấy phép sử dụng B2G (Enterprise License) bao trọn gói toàn bộ hệ sinh thái (Không giới hạn Võ sinh). Để có báo giá hạ tầng, đội ngũ kiến trúc sư của chúng tôi cần khảo sát quy mô trực tiếp.'}].map((f,i)=>(
              <details key={i}><summary>{f.q}</summary><div className="faq-content">{f.a}</div></details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0',background:'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.08) 100%)',textAlign:'center'}}>
        <div className="container">
          <h2 className="title-serif text-chrome" style={{fontSize:'2.2rem',marginBottom:'15px'}}>Số Hóa Liên Đoàn Ngay Hôm Nay</h2>
          <p className="text-muted-delicate" style={{maxWidth:'550px',margin:'0 auto 2.5rem auto'}}>Liên hệ đội ngũ VCT Platform để được tư vấn riêng giải pháp cấp Tỉnh / Quốc gia.</p>
          <div style={{display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap'}}>
            <a href="tel:0981108078" className="btn btn-primary" style={{padding:'14px 36px'}}><i className="fas fa-phone-alt" style={{marginRight:'8px'}}></i> Hotline: 0981.10.80.78</a>
            <a href="https://m.me/vctplatform.official" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding:'14px 36px'}}><i className="fab fa-facebook-messenger" style={{marginRight:'8px'}}></i> Chat Messenger</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SolutionLienDoan;
