import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { i18n } = useTranslation();
  const [overrideLang, setOverrideLang] = useState<'vi' | 'en' | null>(null);
  const lang = overrideLang ?? (i18n.language === 'en' ? 'en' : 'vi');

  const switchLanguage = (targetLang: 'vi' | 'en') => {
    setOverrideLang(targetLang);
    i18n.changeLanguage(targetLang);
    localStorage.setItem('vct_lang', targetLang);
  };

  useEffect(() => {
    document.title = lang === 'vi'
      ? "Điều Khoản Dịch Vụ - VCT Platform"
      : "Terms of Service - VCT Platform";
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <main id="main-content">
      <section className="legal-page" style={{ padding: '140px 0 80px 0', backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>

          {/* Header Card */}
          <div className="legal-header reveal active" style={{
            background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            marginBottom: '35px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(20, 184, 166, 0.12)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>
              <i className="fas fa-file-contract"></i>
              <span>{lang === 'vi' ? 'Hợp đồng Dịch vụ Phần mềm SaaS & Nền tảng' : 'SaaS Software & Platform Service Agreement'}</span>
            </div>

            <h1 className="title-serif text-chrome" style={{ fontSize: '2.5rem', marginBottom: '15px', lineHeight: 1.3 }}>
              {lang === 'vi' ? 'Điều Khoản Dịch Vụ (Terms of Service)' : 'Terms of Service (TOS)'}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500, marginBottom: '8px' }}>
              <strong>VCT Platform</strong> &mdash; {lang === 'vi' ? 'CÔNG TY TNHH VCT PLATFORM' : 'VCT PLATFORM CO., LTD'}
            </p>
            <p className="legal-updated" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
              {lang === 'vi' ? 'Có hiệu lực từ: Ngày 01 tháng 04 năm 2026 | Phiên bản 3.0' : 'Effective Date: April 1, 2026 | Version 3.0'}
            </p>

            {/* Quick Language Toggle */}
            <div style={{ display: 'inline-flex', background: 'rgba(0, 0, 0, 0.4)', padding: '4px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => switchLanguage('vi')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: lang === 'vi' ? 'var(--cyan-accent)' : 'transparent',
                  color: lang === 'vi' ? '#0f172a' : 'var(--text-muted)',
                  transition: '0.3s'
                }}
              >
                🇻🇳 Tiếng Việt (Chính thức)
              </button>
              <button
                onClick={() => switchLanguage('en')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: lang === 'en' ? 'var(--cyan-accent)' : 'transparent',
                  color: lang === 'en' ? '#0f172a' : 'var(--text-muted)',
                  transition: '0.3s'
                }}
              >
                🇬🇧 English Translation
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="legal-content" style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '45px 35px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}>

            {lang === 'vi' ? (
              /* ======================= VIETNAMESE VERSION ======================= */
              <>
                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '1.2rem' }}></i>
                    1. Chấp Thuận Điều Khoản
                  </h2>
                  <p>
                    Chào mừng Quý khách đến với <strong>VCT Platform</strong>. Bằng việc truy cập trang web <strong>https://vctplatform.vn</strong>, khởi tạo tài khoản hoặc sử dụng bất kỳ phần mềm, công cụ, ứng dụng di động hoặc dịch vụ nào trong hệ sinh thái của <strong>Công ty TNHH VCT Platform</strong> (sau đây gọi tắt là <strong>"VCT Platform"</strong>, <strong>"Chúng tôi"</strong>), Quý khách (bao gồm Liên đoàn, Câu lạc bộ, Võ đường, Huấn luyện viên, Võ sinh, Phụ huynh và Người dùng cá nhân) xác nhận rằng đã đọc, hiểu rõ và đồng ý chịu sự ràng buộc bởi các Điều khoản Dịch vụ này.
                  </p>
                  <p>
                    Nếu Quý khách không đồng ý với bất kỳ điều khoản nào, vui lòng ngưng truy cập và ngừng sử dụng các dịch vụ của VCT Platform ngay lập tức.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-cubes" style={{ fontSize: '1.2rem' }}></i>
                    2. Mô Hình Dịch Vụ SaaS Quản Trị Võ Thuật
                  </h2>
                  <p>
                    VCT Platform cung cấp giải pháp Phần mềm dạng Dịch vụ (Software-as-a-Service - SaaS) chuyên biệt nhằm số hóa toàn diện quy trình vận hành của Hệ sinh thái Võ thuật Việt Nam, bao gồm nhưng không giới hạn:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Quản lý Câu lạc bộ & Võ đường:</strong> Quản lý danh sách võ sinh, điểm danh nhận diện khuôn mặt/thẻ, theo dõi chuyên cần, lịch học và phân bổ lớp võ.</li>
                    <li><strong>Hệ thống Thăng đai & Chứng nhận:</strong> Quản trị lộ trình chuyên môn, tổ chức kỳ thi nâng đai, lưu trữ lịch sử thi thăng đẳng và tích hợp xác thực số hóa cấp Liên đoàn.</li>
                    <li><strong>Giải pháp Điều hành Giải đấu:</strong> Xếp nhánh đấu tự động, chấm điểm điện tử trực tuyến (Real-time Websocket scoring) và bảng xếp hạng huy chương thời gian thực.</li>
                    <li><strong>Báo cáo & Tối ưu Tuyển sinh:</strong> Tích hợp các báo cáo tiếp thị, đo lường chi phí tuyển sinh võ sinh mới thông qua các công cụ kết nối số liệu như Google Ads API.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-user-lock" style={{ fontSize: '1.2rem' }}></i>
                    3. Đăng Ký Tài Khoản & Nghĩa Vụ Bảo Mật
                  </h2>
                  <p>
                    Khi khởi tạo tài khoản trên VCT Platform:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Quý khách cam kết cung cấp thông tin chính xác, đầy đủ và cập nhật hồ sơ khi có sự thay đổi.</li>
                    <li>Quý khách chịu hoàn toàn trách nhiệm về việc bảo mật mật khẩu, mã xác thực hai lớp (2FA) và mọi hoạt động diễn ra dưới tài khoản của mình.</li>
                    <li>Quý khách phải thông báo ngay cho VCT Platform qua email <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a> nếu phát hiện tài khoản bị xâm nhập trái phép hoặc có lỗ hổng bảo mật.</li>
                  </ul>
                </section>

                {/* ================= GOOGLE APIS & THIRD-PARTY INTEGRATION ================= */}
                <section style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(20, 184, 166, 0.12) 100%)',
                  border: '2px solid var(--cyan-accent)',
                  borderRadius: '16px',
                  padding: '30px',
                  margin: '40px 0',
                  boxShadow: '0 15px 35px rgba(6, 182, 212, 0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4285F4', fontSize: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                      <i className="fab fa-google"></i>
                    </div>
                    <div>
                      <h2 style={{ color: '#fff', fontSize: '1.5rem', margin: 0, fontFamily: 'var(--font-serif)' }}>
                        4. Tích Hợp Dịch Vụ Bên Thứ Ba & Google APIs (Google Ads)
                      </h2>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cyan-accent)', fontWeight: 600 }}>
                        (Quy định về kết nối tài khoản quảng cáo và API đối tác)
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '16px' }}>
                    VCT Platform cung cấp các tính năng cho phép Người dùng liên kết dịch vụ từ các đối tác công nghệ quốc tế, bao gồm Google APIs và Google Ads API:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Ủy quyền truy cập tối thiểu:</strong> Bằng việc chủ động kết nối tài khoản Google Ads vào VCT Platform, Quý khách ủy quyền cho VCT Platform truy cập thông qua giao thức Google OAuth để đọc các chỉ số hiệu suất quảng cáo (lượt hiển thị, số lượt nhấp, chi phí chi tiêu, số lượt chuyển đổi) phục vụ duy nhất mục đích hiển thị báo cáo hiệu quả tuyển sinh và truyền thông sự kiện trên giao diện VCT Platform.</li>
                    <li><strong>Tuân thủ Điều khoản của Google:</strong> Người dùng khi tích hợp xác nhận tuân thủ đầy đủ Điều khoản dịch vụ của Google (Google Terms of Service) và Chính sách quảng cáo của Google.</li>
                    <li><strong>Cam kết Không Bán - Không Chia Sẻ Dữ liệu Google:</strong> VCT Platform cam kết tuyệt đối KHÔNG bán, cho thuê, trao đổi hay cung cấp dữ liệu Google Ads của Quý khách cho bất kỳ bên thứ ba nào. Toàn bộ dữ liệu được bảo vệ theo Chính sách Dữ liệu Người dùng Dịch vụ Google API (bao gồm cả các yêu cầu về Sử dụng có giới hạn - Limited Use).</li>
                    <li><strong>Quyền ngắt kết nối:</strong> Quý khách có thể ngắt kết nối dịch vụ Google Ads trực tiếp trong VCT Platform hoặc thu hồi quyền truy cập bất kỳ lúc nào tại <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://myaccount.google.com/permissions</a> mà không ảnh hưởng đến các tính năng quản lý võ thuật cốt lõi khác của nền tảng.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-qrcode" style={{ fontSize: '1.2rem' }}></i>
                    5. Tích Hợp Thanh Toán Học Phí Tự Động (VietQR)
                  </h2>
                  <p>Đối với các đơn vị sử dụng tính năng gạch nợ học phí tự động qua VietQR:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Hệ thống VCT Platform sử dụng dịch vụ cổng định danh Napas/CASS VietQR qua đối tác ngân hàng thương mại được Ngân hàng Nhà nước Việt Nam cấp phép.</li>
                    <li><strong>VCT Platform KHÔNG GIỮ TIỀN:</strong> Dòng tiền học phí được truyền trực tiếp từ tài khoản ngân hàng của Phụ huynh / Võ sinh sang tài khoản định danh của Võ đường / Câu lạc bộ. VCT Platform không đóng vai trò tổ chức trung gian thanh toán giữ vốn và không can thiệp vào tài chính giữa hai bên.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-ban" style={{ fontSize: '1.2rem' }}></i>
                    6. Hành Vi Bị Nghiêm Cấm
                  </h2>
                  <p>Khi sử dụng nền tảng VCT Platform, Quý khách cam kết KHÔNG thực hiện các hành vi sau:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Sử dụng nền tảng vào bất kỳ mục đích bất hợp pháp nào, xâm phạm an ninh quốc gia hoặc vi phạm thuần phong mỹ tục.</li>
                    <li>Cố ý quét lỗ hổng bảo mật, tấn công từ chối dịch vụ (DDoS), phát tán virus, trojan hoặc mã độc vào hạ tầng máy chủ của VCT Platform.</li>
                    <li>Dịch ngược mã nguồn (reverse engineering), sao chép trái phép giao diện hoặc cấu trúc dữ liệu của VCT Platform.</li>
                    <li>Thu thập hoặc khai thác trái phép dữ liệu võ sinh của các câu lạc bộ khác mà không có sự ủy quyền bằng văn bản.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-copyright" style={{ fontSize: '1.2rem' }}></i>
                    7. Quyền Sở Hữu Trí Tuệ
                  </h2>
                  <p>
                    Toàn bộ nhãn hiệu, logo, giao diện người dùng, mã nguồn, thuật toán xếp nhánh đấu, tài liệu hướng dẫn và cơ sở dữ liệu hệ thống thuộc quyền sở hữu trí tuệ hợp pháp độc quyền của <strong>Công ty TNHH VCT Platform</strong>.
                  </p>
                  <p>
                    Dữ liệu võ sinh, tư liệu ảnh và thông tin chuyên môn do Câu lạc bộ nhập lên hệ thống thuộc quyền sở hữu nội dung của Câu lạc bộ/Võ sinh đó. VCT Platform chỉ đóng vai trò là bên xử lý và lưu trữ dữ liệu an toàn theo ủy quyền.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: '1.2rem' }}></i>
                    8. Bảo Vệ Dữ Liệu & Quyền Riêng Tư
                  </h2>
                  <p>
                    VCT Platform coi trọng quyền riêng tư của người dùng. Mọi hoạt động thu thập, xử lý và lưu trữ dữ liệu được thực hiện nghiêm ngặt theo <strong>Chính Sách Bảo Mật</strong> công khai tại <Link to="/privacy" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://vctplatform.vn/privacy</Link>.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-balance-scale" style={{ fontSize: '1.2rem' }}></i>
                    9. Giới Hạn Trách Nhiệm & Cam Kết Uptime
                  </h2>
                  <p>
                    VCT Platform cam kết nỗ lực tối đa để duy trì độ sẵn sàng hệ thống (SLA) đạt mức <strong>99.9%</strong>. Tuy nhiên, Chúng tôi được miễn trừ trách nhiệm trong các tình huống bất khả kháng ngoài tầm kiểm soát hợp lý (sự cố đứt cáp quang biển quốc tế, thiên tai, hỏa hoạn, lỗi hạ tầng mạng viễn thông quốc gia hoặc sự cố gián đoạn từ các nhà cung cấp dịch vụ hạ tầng đám mây toàn cầu).
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-gavel" style={{ fontSize: '1.2rem' }}></i>
                    10. Luật Điều Chỉnh & Giải Quyết Tranh Chấp
                  </h2>
                  <p>
                    Điều khoản Dịch vụ này được giải thích và điều chỉnh theo <strong>Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>.
                  </p>
                  <p>
                    Mọi tranh chấp phát sinh từ hoặc liên quan đến thỏa thuận này trước hết sẽ được giải quyết thông qua thương lượng hòa giải thiện chí. Trường hợp không đạt được thỏa thuận trong vòng ba mươi (30) ngày, tranh chấp sẽ được đưa ra giải quyết tại Tòa án nhân dân có thẩm quyền tại Việt Nam.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-id-card" style={{ fontSize: '1.2rem' }}></i>
                    11. Thông Tin Đơn Vị Chủ Quản & Pháp Lý
                  </h2>
                  <div style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ margin: '0 0 8px 0', color: 'var(--text-main)', fontWeight: 600 }}>CÔNG TY TNHH VCT PLATFORM</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-file-invoice" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Mã số thuế: 3401284869</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Địa chỉ: Số 142 Đường Lê Minh Công, Khu Phố 16, Phường Phước Hội, Tỉnh Lâm Đồng, Việt Nam</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-phone" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Hotline hỗ trợ: 0981.10.80.78</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-envelope" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Email tiếp nhận: <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></p>
                    <p style={{ margin: 0 }}><i className="fas fa-globe" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Cổng thông tin: <a href="https://vctplatform.vn" style={{ color: 'var(--cyan-accent)' }}>https://vctplatform.vn</a></p>
                  </div>
                </section>
              </>
            ) : (
              /* ======================= ENGLISH VERSION ======================= */
              <>
                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '1.2rem' }}></i>
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    Welcome to <strong>VCT Platform</strong>. By accessing our website at <strong>https://vctplatform.vn</strong>, creating an account, or utilizing any software, tools, mobile applications, or digital services provided by <strong>VCT PLATFORM CO., LTD</strong> (hereinafter referred to as <strong>"VCT Platform"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>), you (including Federations, Clubs, Dojos, Coaches, Students, Parents, and Individual Users) acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
                  </p>
                  <p>
                    If you disagree with any part of these terms, please immediately discontinue access and refrain from using VCT Platform services.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-cubes" style={{ fontSize: '1.2rem' }}></i>
                    2. SaaS Martial Arts Platform Services
                  </h2>
                  <p>
                    VCT Platform provides specialized Software-as-a-Service (SaaS) solutions designed to completely digitize the operations of the Vietnamese Martial Arts ecosystem, including but not limited to:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Club & Dojo Administration:</strong> Student roster management, automated card/facial attendance check-in, class schedules, and attendance tracking.</li>
                    <li><strong>Belt Promotion & Certification:</strong> Technical curriculum progression, examination management, rank history storage, and federation-level digital verification.</li>
                    <li><strong>Tournament Management:</strong> Automated tournament brackets, real-time electronic match scoring (Websocket-based), and live medal tallies.</li>
                    <li><strong>Marketing & Recruitment Analytics:</strong> Integrated reporting to measure student recruitment ROI and marketing efficiency via external API integrations such as the Google Ads API.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-user-lock" style={{ fontSize: '1.2rem' }}></i>
                    3. Account Registration & Security Obligations
                  </h2>
                  <p>When registering an account on VCT Platform:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>You warrant that all information provided is accurate, current, and complete.</li>
                    <li>You are solely responsible for maintaining the confidentiality of your login credentials, two-factor authentication (2FA) tokens, and all activities under your account.</li>
                    <li>You must immediately notify VCT Platform at <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a> upon detecting any unauthorized access or security breach.</li>
                  </ul>
                </section>

                {/* ================= GOOGLE APIS INTEGRATION (ENGLISH) ================= */}
                <section style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(20, 184, 166, 0.12) 100%)',
                  border: '2px solid var(--cyan-accent)',
                  borderRadius: '16px',
                  padding: '30px',
                  margin: '40px 0',
                  boxShadow: '0 15px 35px rgba(6, 182, 212, 0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4285F4', fontSize: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                      <i className="fab fa-google"></i>
                    </div>
                    <div>
                      <h2 style={{ color: '#fff', fontSize: '1.5rem', margin: 0, fontFamily: 'var(--font-serif)' }}>
                        4. Third-Party Integrations & Google APIs (Google Ads)
                      </h2>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cyan-accent)', fontWeight: 600 }}>
                        (Terms Governing Advertising Integrations and Partner APIs)
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '16px' }}>
                    VCT Platform enables integrations with trusted third-party technology providers, including Google APIs and the Google Ads API:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Limited Scope Authorization:</strong> By linking your Google Ads account to VCT Platform, you grant us authorization via Google OAuth to query advertising performance statistics (impressions, clicks, ad spend, conversions) strictly to display student recruitment and event promotion analytics on your VCT Platform dashboard.</li>
                    <li><strong>Google Policies Compliance:</strong> You agree to abide by Google's Terms of Service and applicable Google Ads Policies when utilizing advertising features.</li>
                    <li><strong>No Selling or Sharing of Google Data:</strong> VCT Platform strictly adheres to the Google API Services User Data Policy (including Limited Use requirements). We never sell, lease, transfer, or disclose any Google Ads data to third parties.</li>
                    <li><strong>Right to Disconnect:</strong> You may unlink your Google Ads account at any time in VCT Platform settings or revoke permissions directly via Google at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://myaccount.google.com/permissions</a> without degrading other core platform features.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-qrcode" style={{ fontSize: '1.2rem' }}></i>
                    5. VietQR Automated Tuition Reconciliation
                  </h2>
                  <p>For clubs utilizing our automated tuition settlement via VietQR:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Tuition payment processing operates through Napas/CASS VietQR protocols connected to licensed commercial banking partners.</li>
                    <li><strong>VCT Platform DOES NOT HOLD FUNDS:</strong> Tuition payments flow directly from the student/parent bank account to the Dojo/Club designated bank account. VCT Platform is not a payment intermediary holding capital.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-ban" style={{ fontSize: '1.2rem' }}></i>
                    6. Prohibited Activities
                  </h2>
                  <p>Users are strictly prohibited from:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Using the platform for any unlawful purpose or in violation of cybersecurity regulations.</li>
                    <li>Attempting unauthorized vulnerability scanning, DDoS attacks, or introducing malicious code into our cloud infrastructure.</li>
                    <li>Reverse-engineering, decompiling, or copying VCT Platform proprietary source code, bracket algorithms, or UI assets.</li>
                    <li>Scraping or harvesting confidential student or club records without verified authorization.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-copyright" style={{ fontSize: '1.2rem' }}></i>
                    7. Intellectual Property Rights
                  </h2>
                  <p>
                    All trademarks, logos, user interfaces, codebases, tournament bracket engines, and system documentation are the exclusive intellectual property of <strong>VCT PLATFORM CO., LTD</strong>.
                  </p>
                  <p>
                    Data and media uploaded by clubs remain the proprietary property of the respective club and its students. VCT Platform acts strictly as an authorized, secure data processor.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: '1.2rem' }}></i>
                    8. Privacy & Data Protection
                  </h2>
                  <p>
                    Data processing and protection practices are governed comprehensively by our <strong>Privacy Policy</strong>, accessible at <Link to="/privacy" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://vctplatform.vn/privacy</Link>.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-balance-scale" style={{ fontSize: '1.2rem' }}></i>
                    9. Limitation of Liability & Service Availability (SLA)
                  </h2>
                  <p>
                    VCT Platform targets a <strong>99.9%</strong> system uptime service level. However, we shall not be liable for service disruptions caused by force majeure events beyond reasonable control (undersea cable disruptions, natural disasters, telco failures, or global cloud provider outages).
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-gavel" style={{ fontSize: '1.2rem' }}></i>
                    10. Governing Law & Dispute Resolution
                  </h2>
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of the <strong>Socialist Republic of Vietnam</strong>. Any disputes shall be resolved primarily through amicable negotiations, failing which the matter shall be submitted to the competent courts of Vietnam.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-id-card" style={{ fontSize: '1.2rem' }}></i>
                    11. Corporate Information & Legal Contact
                  </h2>
                  <div style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ margin: '0 0 8px 0', color: 'var(--text-main)', fontWeight: 600 }}>VCT PLATFORM CO., LTD</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-file-invoice" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Tax Code: 3401284869</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Address: 142 Le Minh Cong Street, Ward 16, Phuoc Hoi, Lam Dong, Vietnam</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-phone" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Hotline: (+84) 981.10.80.78</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-envelope" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Legal Email: <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></p>
                    <p style={{ margin: 0 }}><i className="fas fa-globe" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Official Portal: <a href="https://vctplatform.vn" style={{ color: 'var(--cyan-accent)' }}>https://vctplatform.vn</a></p>
                  </div>
                </section>
              </>
            )}

            {/* Bottom Actions */}
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link to="/privacy" className="btn btn-outline" style={{ borderColor: 'var(--cyan-accent)', color: 'var(--cyan-accent)', marginRight: '15px', padding: '10px 24px' }}>
                <i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
                {lang === 'vi' ? 'Xem Chính Sách Bảo Mật' : 'View Privacy Policy'}
              </Link>
              <a href="mailto:hbtung.vct@gmail.com" className="btn btn-primary" style={{ padding: '10px 24px' }}>
                <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
                {lang === 'vi' ? 'Liên Hệ Pháp Lý' : 'Contact Legal Team'}
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
