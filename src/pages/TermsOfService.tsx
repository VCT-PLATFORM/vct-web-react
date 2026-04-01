import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => { document.title = "Điều Khoản Dịch Vụ - VCT Platform"; }, []);

  return (
    <main id="main-content">
      <section className="legal-page" style={{padding:'150px 0 80px 0',backgroundColor:'var(--bg-deep)'}}>
        <div className="container" style={{maxWidth:'900px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',padding:'50px',borderRadius:'16px'}}>
          <div className="legal-header reveal active" style={{textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.1)',paddingBottom:'30px',marginBottom:'40px'}}>
            <h1 className="title-serif text-chrome" style={{fontSize:'2.5rem',marginBottom:'15px'}}>Điều Khoản Sử Dụng (TOS)</h1>
            <p className="text-muted-delicate" style={{fontSize:'1.1rem'}}>Có hiệu lực từ: Ngày 01.04.2026 | Công ty TNHH VCT Platform</p>
          </div>

          <div className="legal-content text-left text-muted-delicate" style={{lineHeight:1.8}}>
            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>1. Xác nhận chấp thuận</h2>
            <p style={{marginBottom:'15px'}}>Bằng việc truy cập, đăng ký tài khoản và sử dụng hệ sinh thái <strong>VCT Platform</strong> (Bao gồm Website, Web App và Mobile App), Quý khách hàng (Bao gồm Liên đoàn, Câu lạc bộ, Võ đường, Phụ huynh và Võ sinh) đồng ý chịu sự ràng buộc của các Điều kiện & Điều khoản này.</p>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>2. Mô hình cung cấp dịch vụ (SaaS)</h2>
            <p style={{marginBottom:'15px'}}>Nền tảng của chúng tôi là Phần mềm dạng Dịch vụ (Software as a Service). Việc cấp quyền sử dụng phụ thuộc vào gói cước (Dịch vụ Miễn phí, Trả phí CLB, Tư Vấn Liên Đoàn). VCT Platform có quyền tạm ngưng cung cấp API/Dịch vụ trong trường hợp phát hiện gian lận hoặc vi phạm an ninh.</p>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>3. Tích hợp Thanh toán VietQR & Cổng Gạch Nợ</h2>
            <p style={{marginBottom:'15px'}}>Đối với các tài khoản đăng ký sử dụng tính năng <strong>Gạch nợ học phí tự động</strong>:</p>
            <ul style={{marginBottom:'15px',paddingLeft:'20px'}}>
              <li style={{marginBottom:'10px'}}>Hệ thống VCT Platform sử dụng dịch vụ cổng thanh toán qua đối tác ngân hàng do NHNN cấp phép <em>(Mặc định thông qua hệ thống định danh Napas/CASS VietQR)</em>.</li>
              <li style={{marginBottom:'10px'}}>Dòng tiền học phí được <strong>TRUYỀN TRỰC TIẾP</strong> từ tài khoản Phụ huynh sang thiết chế Tài khoản của Võ đường/Câu Lạc Bộ. <strong>VCT Platform KHÔNG GIỮ TIỀN</strong> và không đóng vai trò là tổ chức Trung gian thanh toán giữ vốn.</li>
            </ul>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>4. Trách nhiệm Dữ liệu Dân sự</h2>
            <p style={{marginBottom:'15px'}}>Các Câu lạc bộ / Võ đường chịu hoàn toàn trách nhiệm trước Pháp luật Việt Nam về tính xác thực của dữ liệu Võ sinh (Hồ sơ thi thăng đai, lý lịch) khi tự tay đưa lên hệ thống. VCT Platform là Đơn vị bảo hộ Kỹ thuật lưu trữ.</p>

            <h2 style={{color:'var(--cyan-accent)',fontSize:'1.5rem',margin:'30px 0 15px 0'}}>5. Thông tin Liên hệ</h2>
            <p style={{marginBottom:'15px'}}>Nếu có tranh chấp hoặc cần gửi văn bản pháp lý, vui lòng liên hệ Bộ phận Đối Ngoại của <strong>Công ty TNHH VCT Platform</strong>, Hotline 0981.10.80.78, địa chỉ Số 142 Đường Lê Minh Công, KP16, Phước Hội, Tỉnh Lâm Đồng.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default TermsOfService;
