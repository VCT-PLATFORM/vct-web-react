import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define resources here for initial scaffold
// Ideally, these would be in separate JSON files, but we keep it here to match the old setup for now
const resources = {
  vi: {
    translation: {
      "nav_home": "Trang chủ",
      "nav_solutions": "Giải pháp",
      "nav_b2g": "Dành cho Liên Đoàn",
      "nav_b2b": "Dành cho Võ Đường",
      "nav_b2c": "Dành cho Võ Sinh",
      "nav_b2b2c": "Dành cho Giải Đấu",
      "nav_pricing": "Bảng giá",
      "nav_news": "Tin tức",
      "nav_login": "Đăng nhập",

      "ft_brand_desc": "Nền tảng Quản trị số hoá 100% dành cho Hệ sinh thái Võ thuật Việt Nam. Chấm dứt kỷ nguyên ghi sổ giấy.",
      "ft_bct_noti": "Đã thông báo Bộ Công Thương",
      "ft_col2_title": "Giải Pháp Chuyển Đổi Số",
      "ft_sol_b2g": "Dành Cho Liên Đoàn",
      "ft_sol_b2b": "Dành Cho Võ Đường",
      "ft_sol_b2c": "Dành cho Võ sinh",
      "ft_sol_b2b2c": "Dành cho Giải Đấu",
      "ft_sol_pricing": "Bảng Giá Dịch vụ SaaS",
      "ft_col3_title": "Quy Định & Chính Sách",
      "ft_pol_privacy": "Quy chế Bảo mật (NĐ 13)",
      "ft_pol_terms": "Điều khoản Sử dụng",
      "ft_pol_about": "Về Chúng Tôi",
      "ft_col4_title": "Thông Tin Đơn Vị Chủ Quản",
      "ft_col4_corp": "CÔNG TY TNHH VCT PLATFORM",
      "ft_col4_mst_label": "MST:",
      "ft_col4_mst": "3401284869",
      "ft_col4_addr": "Số 142 Đường Lê Minh Công, Khu Phố 16, Phường Phước Hội, Tỉnh Lâm Đồng",

      "home_badge": "Hệ thống vận hành quốc gia",
      "home_title": "Nền Tảng Quản Trị<br> Võ Thuật <span class=\"text-emerald\" style=\"white-space: nowrap;\">Toàn Diện.</span>",
      "home_subtitle": "Giải pháp SaaS chuyên biệt duy nhất tại Việt Nam giúp <strong>Số Hóa 100%</strong> nghiệp vụ của Liên Đoàn, Võ Đường và Võ Sinh. Vận hành thông suốt từ vĩ mô đến vi mô.",
      "hero_btn_start": "Khởi tạo miễn phí",
      "hero_btn_explore": "Khám phá tính năng",
      "metric_federation": "Số Hóa Nghiệp Vụ",
      "metric_club": "Độ Trễ Gạch Nợ",
      "metric_member": "Uptime Hệ Thống",
      "metric_security": "Bảo Mật Dữ Liệu",

      "vc_hero_title": "Số Hoá Để Bảo Tồn",
      "vc_hero_subtitle": "Võ thuật cổ truyền là di sản văn hoá phi vật thể của dân tộc Việt Nam. VCT Platform ra đời mang theo khát vọng mang công nghệ hiện đại ráp mạch dòng chảy lịch sử.",
      "vc_vis_title": "Tầm Nhìn",
      "vc_vis_desc": "Trở thành nền tảng quản trị võ thuật toàn diện hàng đầu Việt Nam. Vươn xa hơn việc cung cấp phần mềm, khát vọng của chúng tôi là <strong style=\"color: var(--text-light);\">nâng tầm và chuyên nghiệp hóa nền võ cổ truyền nước nhà nói riêng và nền võ thuật nói chung.</strong>",
      "vc_mis_title": "Sứ Mệnh",
      "vc_mis_desc": "Giải phóng sức lao động. Giúp các Võ sư, Ban tổ chức và Liên đoàn thảnh thơi khỏi gánh nặng hành chính, để họ tập trung toàn lực vào chuyên môn truyền dạy. Tạo ra môi trường võ học công bằng, minh bạch và an tâm tuyệt đối cho Phụ huynh.",
      "vc_story_title": "Câu Chuyện Sáng Lập",
      "vc_story_p1": "VCT Platform không ra đời như một ứng dụng tài chính khô khan. Căn nguyên của nền tảng bắt nguồn từ mong mỏi sâu sắc: <strong>Số hóa bản đồ hành trình của một võ sinh ngay từ ngày đầu làm quen với võ thuật.</strong>",
      "vc_story_p2": "Từ việc giúp một vỏ đường nhỏ điểm danh nề nếp, đến việc giúp cấp Liên đoàn số hóa công tác quản trị nhân sự. Từ giúp Ban tổ chức các giải đấu được thảnh thơi, tập trung vào chất lượng thi đấu chuyên môn, đảm bảo mọi ván đấu diễn ra <strong>công bằng và hiệu quả</strong>, cho tới việc để các bậc phụ huynh ở nhà luôn được an tâm tuyệt đối về sự tiến bộ của con em mình.",
      "vc_story_quote": "\"Kiến tạo một Hệ sinh thái Võ thuật 360 độ: Quản lý dễ dàng – Thi đấu công bằng – Phụ huynh an tâm. Đó là lời giải cho bài toán nâng tầm võ học.\"",
      "vc_val_title": "Giá Trị Cốt Lõi",
      "vc_val_subtitle": "04 Trụ Cột Định Hình Triết Lý Sản Phẩm Của Chúng Tôi",
      "vc_val1_title": "Toàn Diện",
      "vc_val1_desc": "Bao phủ 100% nhu cầu quản trị. Từ điểm danh Võ quán tự động, kết nối trực tiếp đến hệ thống cấp bằng Trung ương.",
      "vc_val2_title": "Công Bằng & Minh Bạch",
      "vc_val2_desc": "Giải đấu sử dụng công nghệ chấm điểm Real-time Websocket, triệt tiêu sai số thủ công, tạo môi trường thi đấu minh bạch nhất.",
      "vc_val3_title": "Chuyên Nghiệp Hóa",
      "vc_val3_desc": "Tiêu chuẩn hoá mọi quy trình hành chính, thăng đai của Võ thuật truyền thống lên ngang tầm các tổ chức Thể thao Quốc tế.",
      "vc_val4_title": "An Tâm Đồng Hành",
      "vc_val4_desc": "Mang lại sự thảnh thơi cho các Huấn luyện viên, và sự yên tâm tuyệt đối về chất lượng đào tạo cho các bậc Phụ huynh.",
      "vc_pos_title": "Định Vị Nền Tảng",
      "vc_pos_desc": "Nền tảng Quản trị Võ thuật Toàn diện. Sứ mệnh số hoá xuyên suốt hành trình võ sinh, góp phần nhỏ bé nâng tầm nền võ thuật Việt Nam.",
      "vc_infra_title": "Hạ Tầng Lõi",
      "vc_infra_desc": "Lưu trữ trên nền tảng Điện toán đám mây (Cloud) tiêu chuẩn, bảo mật dữ liệu tuyệt đối theo Nghị định Nhà nước và cấu trúc Tier-III An toàn cấp 3."
    }
  },
  en: {
    translation: {
      "nav_home": "Home",
      "nav_solutions": "Solutions",
      "nav_b2g": "For Federations",
      "nav_b2b": "For Dojos",
      "nav_b2c": "For Members",
      "nav_b2b2c": "For Tournaments",
      "nav_pricing": "Pricing",
      "nav_news": "News",
      "nav_login": "Login",

      "ft_brand_desc": "100% Digital Management Platform for Vietnamese Martial Arts Ecosystem. End the era of paper notebooks.",
      "ft_bct_noti": "Notified MOIT",
      "ft_col2_title": "Digital Solutions",
      "ft_sol_b2g": "For Federations",
      "ft_sol_b2b": "For Dojos",
      "ft_sol_b2c": "For Members",
      "ft_sol_b2b2c": "For Tournaments",
      "ft_sol_pricing": "SaaS Pricing",
      "ft_col3_title": "Policies",
      "ft_pol_privacy": "Privacy Policy (NĐ 13)",
      "ft_pol_terms": "Terms of Use",
      "ft_pol_about": "About Us",
      "ft_col4_title": "Company Information",
      "ft_col4_corp": "VCT PLATFORM CO., LTD",
      "ft_col4_mst_label": "Tax ID:",
      "ft_col4_mst": "3401284869",
      "ft_col4_addr": "142 Le Minh Cong, Ward 16, Phuoc Hoi, Lam Dong",

      "home_badge": "National Operating System",
      "home_title": "Comprehensive<br> Martial Arts <span class=\"text-emerald\" style=\"white-space: nowrap;\">Management.</span>",
      "home_subtitle": "The only specialized SaaS solution in Vietnam to <strong>100% Digitize</strong> operations for Federations, Dojos, and Members. Seamless operation from macro to micro.",
      "hero_btn_start": "Start for free",
      "hero_btn_explore": "Explore features",
      "metric_federation": "Operations Digitized",
      "metric_club": "Payment Latency",
      "metric_member": "System Uptime",
      "metric_security": "Data Security",

      "vc_hero_title": "Digitize to Preserve",
      "vc_hero_subtitle": "Traditional martial arts are an intangible cultural heritage of Vietnam. VCT Platform was born with the aspiration of using modern technology to reconnect the historical flow.",
      "vc_vis_title": "Vision",
      "vc_vis_desc": "To become the leading comprehensive martial arts management platform in Vietnam. Beyond providing software, our aspiration is <strong style=\"color: var(--text-light);\">to elevate and professionalize domestic traditional martial arts in particular, and the martial arts industry in general.</strong>",
      "vc_mis_title": "Mission",
      "vc_mis_desc": "Liberate the workforce. Help Dojos, Organizers, and Federations break free from administrative burdens, allowing them to fully focus on teaching expertise. Create a fair, transparent martial arts environment with absolute peace of mind for Parents.",
      "vc_story_title": "Founding Story",
      "vc_story_p1": "VCT Platform was not born as a dry financial application. The origin of the platform stems from a deep desire: <strong>To digitize the journey map of a martial artist from their very first day of training.</strong>",
      "vc_story_p2": "From helping a small dojo maintain attendance discipline, to helping the Federation level digitize human resource management. From helping Tournament organizers relax and focus on technical quality, ensuring every match is <strong>fair and efficient</strong>, to allowing parents at home to have absolute peace of mind regarding their children's progress.",
      "vc_story_quote": "\"Creating a 360-degree Martial Arts Ecosystem: Easy management – Fair competition – Assured parents. That is the solution to elevating martial arts.\"",
      "vc_val_title": "Core Values",
      "vc_val_subtitle": "04 Pillars Shaping Our Product Philosophy",
      "vc_val1_title": "Comprehensive",
      "vc_val1_desc": "Covering 100% of management needs. From automated Dojo attendance, connecting directly to the Central certification system.",
      "vc_val2_title": "Fair & Transparent",
      "vc_val2_desc": "Tournaments use Real-time Websocket scoring technology, eliminating manual errors, creating the most transparent competitive environment.",
      "vc_val3_title": "Professionalization",
      "vc_val3_desc": "Standardizing all administrative and belt promotion processes of traditional Martial Arts to the level of International Sports organizations.",
      "vc_val4_title": "Peace of Mind",
      "vc_val4_desc": "Bringing relaxation to Coaches, and absolute peace of mind regarding training quality to Parents.",
      "vc_pos_title": "Platform Positioning",
      "vc_pos_desc": "Comprehensive Martial Arts Management Platform. The mission is to digitize throughout the martial artist's journey, making a small contribution to elevating Vietnamese martial arts.",
      "vc_infra_title": "Core Infrastructure",
      "vc_infra_desc": "Stored on standard Cloud computing platforms, absolute data security according to State Decrees and Tier-III Level 3 Safety architecture."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('vct_lang') || 'vi', // default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
