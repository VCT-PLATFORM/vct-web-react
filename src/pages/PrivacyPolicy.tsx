import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => { document.title = "Chính Sách Bảo Mật Dữ Liệu - VCT Platform"; }, []);

  return (
    <main id="main-content">
      <section className="legal-page" style={{padding:'150px 0 80px 0',backgroundColor:'var(--bg-deep)'}}>
        <div className="container" style={{maxWidth:'900px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',padding:'50px',borderRadius:'16px'}}>
          <div className="legal-header reveal active" style={{textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.1)',paddingBottom:'30px',marginBottom:'40px'}}>
            <h1 className="title-serif text-cyan" style={{fontSize:'2.5rem',marginBottom:'15px'}}>Chính Sách Bảo Vệ Dữ Liệu</h1>
            <p className="legal-updated" style={{fontSize:'1.1rem',color:'var(--text-muted)'}}>Bản quy định tuân thủ theo <strong>Nghị định 13/2023/NĐ-CP</strong> về Bảo vệ Dữ liệu cá nhân (MDP).</p>
            <div style={{display:'inline-block',marginTop:'20px',fontSize:'12px',padding:'6px 15px',borderRadius:'30px',border:'1px solid var(--cyan-accent)',color:'var(--cyan-accent)'}}>
              <i className="fas fa-shield-alt"></i> Bảo mật cấp Quốc Gia
            </div>
          </div>

          <div className="legal-content text-left text-muted-delicate" style={{lineHeight:1.8}}>
            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>1. Vị Trí Của Chúng Tôi Trong Xử Lý Dữ Liệu</h2>
            <p style={{marginBottom:'15px'}}>Theo định nghĩa của NĐ 13/2023, <strong>Chủ nhiệm Câu lạc bộ / Liên Đoàn</strong> là "Bên Kiểm Soát Dữ Liệu" hoặc "Bên Kiểm Soát và Xử Lý Dữ Liệu" của các Võ sinh trực thuộc.</p>
            <p style={{marginBottom:'15px'}}><strong>Công ty TNHH VCT Platform</strong> (đơn vị chủ quản nền tảng) hoạt động đóng vai trò là cơ sở hạt nhân phần mềm (SaaS), được xếp loại là <strong>"Bên Xử Lý Dữ Liệu"</strong> theo hợp đồng đại lý hoặc ủy quyền tự nguyện từ phía Câu lạc bộ khi nhập thông tin lên hệ thống.</p>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>2. Các Dữ Liệu Nào Bị Thu Thập?</h2>
            <p style={{marginBottom:'15px'}}>Để phục vụ tốt đặc thù nghiệp vụ quản trị Võ thuật, hệ thống chỉ lưu trữ máy học các trường dữ liệu được <strong>Nhập vào bởi Chủ nhiệm Câu lạc bộ</strong> hoặc <strong>Chính bản thân Võ sinh/Phụ huynh (Self-registration)</strong> bao gồm:</p>
            <ul style={{marginBottom:'15px',paddingLeft:'20px'}}>
              <li style={{marginBottom:'10px'}}>Cơ bản: Tên, Tuổi, Hình Thẻ Điểm danh.</li>
              <li style={{marginBottom:'10px'}}>Lịch sử thi nâng cấp Đại điểm, Nhánh đấu Huy chương.</li>
              <li style={{marginBottom:'10px'}}>Dữ liệu thanh toán học phí (Giao dịch CASS VietQR không chứa thông tin thẻ Tín Dụng).</li>
            </ul>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>3. Cơ Chế Báo Cáo Xóa Theo Yêu Cầu (Right to Erasure)</h2>
            <p style={{marginBottom:'15px'}}>Bất cứ võ sinh hoặc tổ chức nào muốn rút quân và xóa toàn bộ dữ liệu máy chủ của mình khỏi VCT Platform, xin hãy soạn quyền yêu cầu (Request right to erasure) tới <strong>hbtung.vct@gmail.com</strong>. VCT Platform trong vòng 72 giờ sẽ tiêu hủy File dữ liệu Master gốc trên Cloud.</p>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>4. Cơ Chế Mã Hoá Và Bảo Vệ Đám Mây</h2>
            <p style={{marginBottom:'15px'}}>Dữ liệu được mã hóa chuẩn và đặt tại các Server cấu trúc Tier-III, Datacenter trong mạng lưới của Vietnam (Ví dụ như Viettel IDC) để tuân thủ Tuyệt đối <strong>Luật An Ninh Mạng 2018</strong> về Lưu Trữ Dữ Liệu Nội Địa.</p>

            <div style={{textAlign:'center',marginTop:'4rem',paddingTop:'2rem',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
              <Link to="/chinh-sach/dieu-khoan" className="btn btn-outline" style={{borderColor:'#fff',color:'#fff',marginRight:'15px'}}>Xem Điều Khoản Dịch Vụ</Link>
              <a href="mailto:hbtung.vct@gmail.com" className="btn btn-primary"><i className="fas fa-headset"></i> Yêu cầu Xóa Dữ Liệu</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PrivacyPolicy;
