import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
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
      ? "Chính Sách Bảo Mật & Dữ Liệu Google - VCT Platform"
      : "Privacy Policy & Google User Data - VCT Platform";
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <main id="main-content">
      <section className="legal-page" style={{ padding: '140px 0 80px 0', backgroundColor: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Header Card */}
          <div className="legal-header reveal active" style={{
            background: 'linear-gradient(180deg, rgba(20, 184, 166, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%)',
            border: '1px solid rgba(20, 184, 166, 0.25)',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            marginBottom: '35px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid var(--cyan-accent)', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>
              <i className="fas fa-shield-alt"></i>
              <span>{lang === 'vi' ? 'Tuân thủ Nghị định 13/2023/NĐ-CP & Google API Policy' : 'Compliant with Decree 13/2023/ND-CP & Google API Policy'}</span>
            </div>

            <h1 className="title-serif text-cyan" style={{ fontSize: '2.5rem', marginBottom: '15px', lineHeight: 1.3 }}>
              {lang === 'vi' ? 'Chính Sách Bảo Mật & Bảo Vệ Dữ Liệu' : 'Privacy & Data Protection Policy'}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500, marginBottom: '8px' }}>
              <strong>VCT Platform</strong> &mdash; {lang === 'vi' ? 'CÔNG TY TNHH VCT PLATFORM' : 'VCT PLATFORM CO., LTD'}
            </p>
            <p className="legal-updated" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
              {lang === 'vi' ? 'Cập nhật lần cuối: Ngày 20 tháng 04 năm 2026 | Phiên bản 3.2' : 'Last Updated: April 20, 2026 | Version 3.2'}
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
                  background: lang === 'vi' ? 'var(--accent-primary)' : 'transparent',
                  color: lang === 'vi' ? '#fff' : 'var(--text-muted)',
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
                  background: lang === 'en' ? 'var(--accent-primary)' : 'transparent',
                  color: lang === 'en' ? '#fff' : 'var(--text-muted)',
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
                    <i className="fas fa-building" style={{ fontSize: '1.2rem' }}></i>
                    1. Đơn Vị Chủ Quản & Phạm Vi Áp Dụng
                  </h2>
                  <p>
                    Chính sách Bảo mật này mô tả cách thức <strong>Công ty TNHH VCT Platform</strong> (sau đây gọi là <strong>"VCT Platform"</strong>, <strong>"Chúng tôi"</strong>, sở hữu và vận hành trang web chính thức tại <strong>https://vctplatform.vn</strong>) thu thập, sử dụng, lưu trữ, xử lý và bảo vệ dữ liệu cá nhân của người dùng khi truy cập website, sử dụng các phần mềm dạng dịch vụ (SaaS) và các ứng dụng thuộc hệ sinh thái VCT Platform.
                  </p>
                  <p>
                    VCT Platform cam kết tuân thủ nghiêm ngặt các quy định pháp luật Việt Nam, bao gồm <strong>Nghị định 13/2023/NĐ-CP</strong> về Bảo vệ Dữ liệu Cá nhân, <strong>Luật An ninh mạng 2018</strong>, cũng như các tiêu chuẩn bảo mật quốc tế và chính sách bảo vệ dữ liệu người dùng của đối tác công nghệ toàn cầu (trong đó có Google).
                  </p>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li><strong>Đơn vị sở hữu:</strong> CÔNG TY TNHH VCT PLATFORM</li>
                    <li><strong>Mã số thuế (MST):</strong> 3401284869</li>
                    <li><strong>Địa chỉ trụ sở:</strong> Số 142 Đường Lê Minh Công, Khu Phố 16, Phường Phước Hội, Tỉnh Lâm Đồng, Việt Nam</li>
                    <li><strong>Email phụ trách bảo vệ dữ liệu:</strong> <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></li>
                    <li><strong>Hotline hỗ trợ:</strong> 0981.10.80.78</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-database" style={{ fontSize: '1.2rem' }}></i>
                    2. Dữ Liệu Thu Thập Trong Nghiệp Vụ Võ Thuật
                  </h2>
                  <p>
                    Để phục vụ các nghiệp vụ chuyển đổi số và quản lý võ thuật chuyên biệt, VCT Platform chỉ lưu trữ các trường dữ liệu do <strong>Chủ nhiệm Câu lạc bộ / Huấn luyện viên / Võ đường</strong> hoặc chính <strong>Võ sinh / Phụ huynh</strong> tự nguyện nhập lên hệ thống:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Thông tin định danh võ sinh:</strong> Họ và tên, ngày sinh, giới tính, số điện thoại, ảnh thẻ điểm danh, đơn vị võ đường/câu lạc bộ trực thuộc.</li>
                    <li><strong>Lịch sử chuyên môn võ học:</strong> Cấp bậc đai, lịch sử thi nâng đai, hồ sơ thi đấu giải, kết quả chấm điểm thời gian thực và giấy chứng nhận võ thuật do Liên đoàn hoặc Câu lạc bộ cấp.</li>
                    <li><strong>Thông tin học phí và giao dịch:</strong> Lịch sử gạch nợ học phí thông qua mã định danh Napas/CASS VietQR. <em>VCT Platform hoàn toàn không lưu trữ số thẻ tín dụng, mã bảo mật CVV hay mật khẩu tài khoản ngân hàng của người dùng.</em></li>
                    <li><strong>Dữ liệu kỹ thuật & nhật ký bảo mật:</strong> Địa chỉ IP, loại trình duyệt, thời điểm đăng nhập để ngăn chặn tấn công và đảm bảo tính toàn vẹn hệ thống.</li>
                  </ul>
                </section>

                {/* ================= GOOGLE ADS HIGHLIGHT CARD ================= */}
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
                        3. Chính Sách Xử Lý Dữ Liệu Google & Dữ Liệu Google Ads
                      </h2>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cyan-accent)', fontWeight: 600 }}>
                        (Cam kết Tuân thủ Chính sách Dữ liệu Người dùng Google API Services)
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '18px' }}>
                    Khi Người dùng (Chủ nhiệm Câu Lạc Bộ, Võ Đường, Ban Tổ Chức Giải Đấu) sử dụng tính năng liên kết tài khoản Google trong <strong>VCT Platform</strong>, Chúng tôi tuân thủ các nguyên tắc minh bạch tối cao sau đây:
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-bullseye" style={{ marginRight: '8px' }}></i>
                      3.1. Ứng dụng VCT Platform dùng dữ liệu Google (Google Ads) để làm gì?
                    </h3>
                    <p>
                      VCT Platform truy cập dữ liệu thông qua giao thức Google OAuth và Google Ads API nhằm phục vụ <strong>duy nhất mục đích hỗ trợ người dùng theo dõi và đánh giá hiệu quả tuyển sinh võ học</strong>:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>Hiển thị báo cáo tiếp thị tổng hợp:</strong> Đọc và tổng hợp các số liệu chiến dịch quảng cáo (tên chiến dịch, lượt hiển thị - impressions, số lượt nhấp - clicks, chi phí chi tiêu - ad spend, tỷ lệ nhấp CTR, CPC trung bình, số lượt chuyển đổi - conversions) để hiển thị trực tiếp trên Dashboard quản trị của VCT Platform.</li>
                      <li><strong>Đo lường hiệu quả tuyển sinh võ sinh mới (ROI/CAC):</strong> Giúp Chủ nhiệm Võ đường và Ban tổ chức sự kiện thể thao dễ dàng đối chiếu ngân sách quảng bá với số lượng võ sinh đăng ký nhập học thực tế mà không cần phải truy cập nhiều trang web riêng lẻ.</li>
                      <li><strong>Cảnh báo ngân sách tự động:</strong> Cảnh báo khi chiến dịch tuyển sinh đạt ngưỡng ngân sách dự kiến do người dùng tự thiết lập.</li>
                      <li><strong>Cam kết phạm vi:</strong> VCT Platform <strong>chỉ sử dụng dữ liệu Google cho các tính năng được người dùng cấp phép và hiển thị trực tiếp trong giao diện VCT Platform</strong>. Chúng tôi tuyệt đối không sử dụng dữ liệu này cho bất kỳ mục đích nào ngoài phạm vi trên.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-server" style={{ marginRight: '8px' }}></i>
                      3.2. Dữ liệu Google được lưu trữ ở đâu và bảo mật như thế nào?
                    </h3>
                    <p>
                      VCT Platform áp dụng các tiêu chuẩn an ninh mạng cao cấp nhất để bảo vệ dữ liệu Google của bạn:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>Vị trí lưu trữ dữ liệu:</strong> Toàn bộ dữ liệu được lưu trữ trên hệ thống máy chủ đám mây chuẩn Tier-III đặt tại <strong>Việt Nam (Viettel IDC)</strong>, đảm bảo tuân thủ đầy đủ Luật An ninh mạng 2018 về lưu trữ dữ liệu nội địa.</li>
                      <li><strong>Mã hóa khi truyền tải (In-Transit):</strong> Mọi luồng giao tiếp giữa người dùng, VCT Platform và máy chủ Google API đều được mã hóa bắt buộc qua giao thức HTTPS bảo mật với chuẩn <strong>TLS 1.3 / SSL 256-bit</strong>.</li>
                      <li><strong>Mã hóa khi lưu trữ (At-Rest):</strong> Các mã khóa ủy quyền truy cập (OAuth Access Tokens & Refresh Tokens) được mã hóa bằng chuẩn mật mã <strong>AES-256</strong> trong kho quản lý khóa bảo mật chuyên dụng (Secret Key Manager), hoàn toàn cách ly khỏi Internet công cộng.</li>
                      <li><strong>Kiểm soát quyền truy cập tối thiểu (Least Privilege):</strong> Chỉ có các tiến trình backend tự động của VCT Platform được cấp quyền đọc số liệu báo cáo Google Ads; không có nhân viên hay bên thứ ba nào được phép xem trực tiếp khóa bảo mật.</li>
                      <li><strong>Thời gian lưu trữ:</strong> Dữ liệu Google Ads chỉ được lưu trữ tạm thời phục vụ kết xuất báo cáo trong thời gian tài khoản người dùng duy trì kết nối trên VCT Platform. Khi người dùng ngắt kết nối, toàn bộ mã token và dữ liệu đệm sẽ bị xóa vĩnh viễn khỏi máy chủ.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#F87171', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-ban" style={{ marginRight: '8px' }}></i>
                      3.3. Cam kết TUYỆT ĐỐI KHÔNG chia sẻ dữ liệu cho bên thứ ba
                    </h3>
                    <p style={{ color: '#fff', fontWeight: 500 }}>
                      VCT Platform đưa ra cam kết minh bạch và ràng buộc pháp lý:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>KHÔNG BÁN VÀ KHÔNG CHIA SẺ:</strong> VCT Platform <strong>tuyệt đối KHÔNG bán, KHÔNG cho thuê, KHÔNG trao đổi, KHÔNG chuyển nhượng và KHÔNG chia sẻ bất kỳ dữ liệu người dùng Google nào (bao gồm thông tin tài khoản quảng cáo, chi phí hay chỉ số Google Ads) cho bất kỳ bên thứ ba nào</strong> (bao gồm mạng lưới quảng cáo ngoài, đối tác tiếp thị, nhà môi giới dữ liệu - data brokers hay bất kỳ tổ chức nào khác).</li>
                      <li><strong>KHÔNG dùng để quảng cáo chéo:</strong> Dữ liệu Google của bạn không bao giờ được sử dụng cho mục đích hiển thị quảng cáo từ bên thứ ba hoặc theo dõi hành vi xuyên nền tảng (cross-site tracking).</li>
                      <li><strong>KHÔNG dùng huấn luyện AI tổng quát:</strong> Dữ liệu người dùng Google tuyệt đối không được sử dụng để đào tạo các mô hình trí tuệ nhân tạo (AI/LLM) hay học máy tổng quát.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-check-double" style={{ marginRight: '8px' }}></i>
                      3.4. Tuân thủ Chính sách Dữ liệu Người dùng Google API (Limited Use)
                    </h3>
                    <p style={{ fontStyle: 'italic', background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--cyan-accent)', color: 'var(--text-main)' }}>
                      "Việc VCT Platform sử dụng và chuyển giao cho bất kỳ ứng dụng nào khác các thông tin nhận được từ Google APIs sẽ tuân thủ nghiêm ngặt <strong>Chính sách Dữ liệu Người dùng Dịch vụ Google API (Google API Services User Data Policy)</strong>, bao gồm cả các yêu cầu về <strong>Sử dụng có giới hạn (Limited Use requirements)</strong>."
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-user-shield" style={{ marginRight: '8px' }}></i>
                      3.5. Quyền thu hồi kết nối và xóa dữ liệu Google
                    </h3>
                    <p>
                      Người dùng có toàn quyền kiểm soát tuyệt đối với kết nối Google của mình:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>Hủy kết nối trong ứng dụng:</strong> Bạn có thể ngắt kết nối tài khoản Google Ads bất kỳ lúc nào trực tiếp trong trang <em>Cài đặt Tích hợp</em> của VCT Platform.</li>
                      <li><strong>Thu hồi quyền từ Google:</strong> Bạn có thể thu hồi quyền truy cập của VCT Platform bất cứ lúc nào thông qua trang Quản lý tài khoản Google tại: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://myaccount.google.com/permissions</a>.</li>
                      <li><strong>Yêu cầu xóa dữ liệu vĩnh viễn:</strong> Bạn có thể gửi yêu cầu xóa toàn bộ dữ liệu Google đã lưu trữ bất kỳ lúc nào qua email <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a>. VCT Platform sẽ hoàn tất xóa vĩnh viễn dữ liệu và hủy token trong vòng <strong>72 giờ làm việc</strong>.</li>
                    </ul>
                  </div>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-user-lock" style={{ fontSize: '1.2rem' }}></i>
                    4. Quyền Của Chủ Thể Dữ Liệu Theo Nghị Định 13/2023/NĐ-CP
                  </h2>
                  <p>Người dùng VCT Platform có đầy đủ các quyền hợp pháp đối với dữ liệu cá nhân của mình, bao gồm:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Quyền được biết & đồng ý:</strong> Được thông báo rõ ràng về mục đích, phương thức thu thập và xử lý trước khi cung cấp dữ liệu.</li>
                    <li><strong>Quyền truy cập & chỉnh sửa:</strong> Tự do tra cứu, xem và cập nhật hồ sơ cá nhân của mình trên hệ thống.</li>
                    <li><strong>Quyền yêu cầu xóa dữ liệu (Right to Erasure):</strong> Yêu cầu VCT Platform xóa dữ liệu cá nhân vĩnh viễn khi không còn nhu cầu sử dụng dịch vụ.</li>
                    <li><strong>Quyền rút lại sự đồng ý:</strong> Hủy bỏ sự đồng ý đối với việc xử lý dữ liệu bất kỳ lúc nào bằng cách gửi văn bản hoặc email đến Chúng tôi.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-history" style={{ fontSize: '1.2rem' }}></i>
                    5. Thay Đổi & Cập Nhật Chính Sách Bảo Mật
                  </h2>
                  <p>
                    VCT Platform có thể điều chỉnh và cập nhật Chính sách Bảo mật này theo thời gian nhằm phản ánh các thay đổi trong dịch vụ hoặc tuân thủ các quy định pháp luật và chính sách mới nhất của Google. Mọi cập nhật sẽ được thông báo công khai trên trang web này cùng với ngày có hiệu lực.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-headset" style={{ fontSize: '1.2rem' }}></i>
                    6. Thông Tin Liên Hệ Tiếp Nhận Yêu Cầu Bảo Mật
                  </h2>
                  <p>
                    Mọi câu hỏi, khiếu nại hoặc yêu cầu thực thi quyền đối với dữ liệu cá nhân và dữ liệu Google, xin vui lòng gửi về:
                  </p>
                  <div style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ margin: '0 0 8px 0', color: 'var(--text-main)', fontWeight: 600 }}>CÔNG TY TNHH VCT PLATFORM</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> 142 Lê Minh Công, Khu Phố 16, Phường Phước Hội, Tỉnh Lâm Đồng</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-envelope" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Email: <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-phone" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Hotline hỗ trợ: 0981.10.80.78</p>
                    <p style={{ margin: 0 }}><i className="fas fa-globe" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Website chính thức: <a href="https://vctplatform.vn" style={{ color: 'var(--cyan-accent)' }}>https://vctplatform.vn</a></p>
                  </div>
                </section>
              </>
            ) : (
              /* ======================= ENGLISH VERSION ======================= */
              <>
                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-building" style={{ fontSize: '1.2rem' }}></i>
                    1. Governing Entity & Scope
                  </h2>
                  <p>
                    This Privacy Policy explains how <strong>VCT PLATFORM CO., LTD</strong> (hereinafter referred to as <strong>"VCT Platform"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>, operating the official website at <strong>https://vctplatform.vn</strong>) collects, uses, stores, processes, and protects users' personal data when accessing our website, Software-as-a-Service (SaaS) products, and martial arts ecosystem applications.
                  </p>
                  <p>
                    VCT Platform strictly complies with Vietnamese laws, including <strong>Decree 13/2023/ND-CP</strong> on Personal Data Protection (PDPD), the <strong>Cybersecurity Law 2018</strong>, as well as international security standards and global technology partner policies, specifically Google API Services User Data Policy.
                  </p>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li><strong>Legal Entity:</strong> VCT PLATFORM CO., LTD</li>
                    <li><strong>Tax Identification Number:</strong> 3401284869</li>
                    <li><strong>Headquarters:</strong> 142 Le Minh Cong Street, Ward 16, Phuoc Hoi, Lam Dong Province, Vietnam</li>
                    <li><strong>Data Protection Officer (DPO) Email:</strong> <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></li>
                    <li><strong>Hotline:</strong> (+84) 981.10.80.78</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-database" style={{ fontSize: '1.2rem' }}></i>
                    2. Martial Arts Operational Data Collection
                  </h2>
                  <p>
                    To provide dedicated digital transformation and martial arts club management services, VCT Platform only processes data voluntarily entered by <strong>Club Directors / Coaches / Dojos</strong> or by <strong>Students / Parents</strong>:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Student Identity Data:</strong> Full name, date of birth, gender, contact phone number, attendance photo, affiliated club or dojo.</li>
                    <li><strong>Martial Arts Credentials & History:</strong> Belt rank, promotion exam history, tournament records, real-time match scoring, and national/club certification.</li>
                    <li><strong>Tuition & Billing Data:</strong> Tuition payment reconciliation records via VietQR/Napas identifier. <em>VCT Platform never stores credit card numbers, CVV security codes, or bank account passwords.</em></li>
                    <li><strong>Technical & Security Logs:</strong> IP address, browser type, device information, and access timestamps to detect unauthorized activity and protect platform integrity.</li>
                  </ul>
                </section>

                {/* ================= GOOGLE ADS HIGHLIGHT CARD (ENGLISH) ================= */}
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
                        3. Google User Data & Google Ads API Policy
                      </h2>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cyan-accent)', fontWeight: 600 }}>
                        (Commitment to Google API Services User Data Policy Compliance)
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '18px' }}>
                    When users (Martial Arts Clubs, Dojos, Tournament Organizers) connect their Google Ads account to <strong>VCT Platform</strong>, we adhere strictly to the highest standards of data minimization and security:
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-bullseye" style={{ marginRight: '8px' }}></i>
                      3.1. What does VCT Platform use Google data (Google Ads) for?
                    </h3>
                    <p>
                      VCT Platform accesses data via Google OAuth and the Google Ads API for the <strong>sole purpose of helping club managers monitor and optimize martial arts student recruitment campaigns</strong>:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>Consolidated Marketing Analytics:</strong> Reading and aggregating advertising performance statistics (campaign names, impressions, clicks, cost/ad spend, CTR, average CPC, conversion counts) to render centralized dashboards directly within VCT Platform.</li>
                      <li><strong>Student Acquisition Cost & ROI Measurement:</strong> Enabling Dojo managers to correlate ad spend directly with real student enrollment counts, tracking recruitment efficiency without switching between disparate platforms.</li>
                      <li><strong>Automated Budget Alerts:</strong> Notifying managers when recruitment campaigns approach preset spending thresholds.</li>
                      <li><strong>Limited Scope Commitment:</strong> VCT Platform <strong>only uses Google data for user-facing features explicitly authorized by the user and visible within VCT Platform</strong>. We do not use Google data for any unauthorized or extraneous purposes.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-server" style={{ marginRight: '8px' }}></i>
                      3.2. Where is Google data stored and how is it secured?
                    </h3>
                    <p>
                      VCT Platform employs enterprise-grade cybersecurity controls to protect all Google user data:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>Storage Location:</strong> All data is hosted on secure Tier-III cloud servers located in <strong>Vietnam (Viettel IDC)</strong>, complying strictly with Vietnam's Cybersecurity Law 2018 regarding domestic data localization.</li>
                      <li><strong>In-Transit Encryption:</strong> All communications between the user's browser, VCT Platform, and Google APIs are encrypted using HTTPS with <strong>TLS 1.3 / 256-bit SSL</strong>.</li>
                      <li><strong>At-Rest Encryption:</strong> OAuth authorization credentials (Access Tokens and Refresh Tokens) are encrypted using military-grade <strong>AES-256</strong> encryption stored inside dedicated Secret Key Managers, completely isolated from public exposure.</li>
                      <li><strong>Least Privilege Access Control:</strong> Only automated internal backend processes are authorized to query reporting metrics. No employees or external parties have direct access to user tokens.</li>
                      <li><strong>Retention Period:</strong> Google Ads metrics and tokens are retained only while the user maintains an active connection in VCT Platform. Upon disconnection or account termination, all cached data and tokens are immediately purged.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#F87171', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-ban" style={{ marginRight: '8px' }}></i>
                      3.3. Strict Policy: NO Sharing and NO Selling to Third Parties
                    </h3>
                    <p style={{ color: '#fff', fontWeight: 500 }}>
                      VCT Platform makes an unequivocal and legally binding declaration:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>NO SELLING & NO SHARING:</strong> VCT Platform <strong>DOES NOT sell, lease, rent, trade, transfer, or disclose any Google user data (including Google Ads campaign performance, account IDs, or metrics) to any third parties</strong> (including advertising networks, data brokers, marketing agencies, or external partners).</li>
                      <li><strong>NO Third-Party Advertising:</strong> Google user data is never used to serve personalized third-party ads or cross-site tracking.</li>
                      <li><strong>NO Generalized AI/ML Training:</strong> Google user data is never used to train generalized artificial intelligence (AI) or machine learning (ML) models.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-check-double" style={{ marginRight: '8px' }}></i>
                      3.4. Compliance with Google API Services User Data Policy (Limited Use)
                    </h3>
                    <p style={{ fontStyle: 'italic', background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--cyan-accent)', color: 'var(--text-main)' }}>
                      "VCT Platform's use and transfer of information received from Google APIs to any other app will adhere to <strong>Google API Services User Data Policy</strong>, including the <strong>Limited Use requirements</strong>."
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: 'var(--cyan-accent)', fontSize: '1.15rem', marginBottom: '8px' }}>
                      <i className="fas fa-user-shield" style={{ marginRight: '8px' }}></i>
                      3.5. Disconnection, Revocation & Erasure of Google Data
                    </h3>
                    <p>
                      Users retain full, sovereign control over their connected Google Ads accounts:
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li><strong>In-App Disconnect:</strong> You may disconnect the Google Ads integration at any time directly in the <em>Integration Settings</em> within VCT Platform.</li>
                      <li><strong>Google Account Revocation:</strong> You can revoke VCT Platform's access permissions at any time via your Google Account Security Dashboard at: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'underline' }}>https://myaccount.google.com/permissions</a>.</li>
                      <li><strong>Permanent Data Erasure:</strong> You can submit a deletion request by emailing <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a>. VCT Platform will completely delete all stored Google tokens and associated cached metrics within <strong>72 business hours</strong>.</li>
                    </ul>
                  </div>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-user-lock" style={{ fontSize: '1.2rem' }}></i>
                    4. Data Subject Rights
                  </h2>
                  <p>Users possess complete statutory rights concerning their personal data:</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>Right to be informed & consent:</strong> Clear notice of data processing purposes before collection.</li>
                    <li><strong>Right of access & rectification:</strong> Direct access to review, correct, and update your information on VCT Platform.</li>
                    <li><strong>Right to erasure:</strong> Complete deletion of all personal data upon service termination.</li>
                    <li><strong>Right to withdraw consent:</strong> Withdraw authorization at any time without penalty.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-history" style={{ fontSize: '1.2rem' }}></i>
                    5. Policy Updates
                  </h2>
                  <p>
                    VCT Platform may amend this Privacy Policy periodically to reflect service enhancements or comply with updated statutory and Google partner regulations. Any revisions will be published on this page with an updated effective date.
                  </p>
                </section>

                <section style={{ marginBottom: '35px' }}>
                  <h2 style={{ color: 'var(--cyan-accent)', fontSize: '1.45rem', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-headset" style={{ fontSize: '1.2rem' }}></i>
                    6. Contact Information & Data Protection Office
                  </h2>
                  <p>
                    For inquiries, complaints, or exercising your data privacy rights, please contact our Data Protection Team:
                  </p>
                  <div style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ margin: '0 0 8px 0', color: 'var(--text-main)', fontWeight: 600 }}>VCT PLATFORM CO., LTD</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> 142 Le Minh Cong, Ward 16, Phuoc Hoi, Lam Dong, Vietnam</p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-envelope" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Email: <a href="mailto:hbtung.vct@gmail.com" style={{ color: 'var(--cyan-accent)' }}>hbtung.vct@gmail.com</a></p>
                    <p style={{ margin: '0 0 6px 0' }}><i className="fas fa-phone" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Hotline: (+84) 981.10.80.78</p>
                    <p style={{ margin: 0 }}><i className="fas fa-globe" style={{ width: '20px', color: 'var(--cyan-accent)' }}></i> Official Website: <a href="https://vctplatform.vn" style={{ color: 'var(--cyan-accent)' }}>https://vctplatform.vn</a></p>
                  </div>
                </section>
              </>
            )}

            {/* Bottom Actions */}
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link to="/terms" className="btn btn-outline" style={{ borderColor: 'var(--cyan-accent)', color: 'var(--cyan-accent)', marginRight: '15px', padding: '10px 24px' }}>
                <i className="fas fa-file-contract" style={{ marginRight: '8px' }}></i>
                {lang === 'vi' ? 'Xem Điều Khoản Dịch Vụ' : 'View Terms of Service'}
              </Link>
              <a href="mailto:hbtung.vct@gmail.com" className="btn btn-primary" style={{ padding: '10px 24px' }}>
                <i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
                {lang === 'vi' ? 'Yêu Cầu Xử Lý Dữ Liệu' : 'Submit Data Request'}
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
