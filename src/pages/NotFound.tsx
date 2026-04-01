import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => { document.title = "404 — Trang Không Tồn Tại | VCT Platform"; }, []);

  return (
    <main id="main-content">
      <section style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',paddingTop:'100px'}}>
        <div className="container">
          <div style={{fontSize:'8rem',fontWeight:800,background:'linear-gradient(135deg, var(--cyan-accent), var(--accent-primary))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1,marginBottom:'1rem'}}>404</div>
          <h1 className="title-serif" style={{fontSize:'2.5rem',marginBottom:'1.5rem'}}>Trang Bạn Tìm Không Tồn Tại</h1>
          <p style={{color:'var(--text-muted)',fontSize:'1.15rem',maxWidth:'500px',margin:'0 auto 2.5rem'}}>Đường dẫn này đã bị xóa, di chuyển, hoặc chưa bao giờ tồn tại trên hệ thống VCT Platform.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/" className="btn btn-primary" style={{padding:'14px 32px',fontSize:'1.1rem'}}>
              <i className="fas fa-home" style={{marginRight:'8px'}}></i> Về Trang Chủ
            </Link>
            <Link to="/tin-tuc" className="btn btn-outline" style={{padding:'14px 32px',fontSize:'1.1rem'}}>
              <i className="fas fa-newspaper" style={{marginRight:'8px'}}></i> Đọc Tin Tức
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default NotFound;
