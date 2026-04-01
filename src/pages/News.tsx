import React, { useEffect, useState } from 'react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Cổng Tin Tức VCT Platform";
    fetch('/data/news.json')
      .then(res => res.json())
      .then((data: NewsItem[]) => { setNews(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <main id="main-content">
      <header className="hero" style={{minHeight:'40vh',paddingTop:'120px'}}>
        <div className="hero-bg" style={{background:'radial-gradient(circle at center, rgba(56,189,248,0.1) 0%, transparent 80%)'}}></div>
        <div className="container relative text-center">
          <h1 className="title-serif text-cyan" style={{fontSize:'3.5rem',marginBottom:'20px'}}>Bản Tin Công Nghệ & Võ Thuật</h1>
          <p className="hero-subtitle">Cập nhật nhanh chóng thông cáo báo chí, tin tức Liên Đoàn và hướng dẫn sử dụng Mạng lưới VCT.</p>
        </div>
      </header>

      <section className="features" style={{paddingTop:'2rem',minHeight:'50vh'}}>
        <div className="container">
          {loading && (
            <div style={{textAlign:'center',padding:'2rem',color:'var(--text-muted)'}}>
              <i className="fas fa-spinner fa-spin fa-2x"></i>
              <p style={{marginTop:'10px'}}>Đang tải dữ liệu báo chí...</p>
            </div>
          )}
          {error && (
            <div style={{textAlign:'center',padding:'4rem',color:'var(--text-muted)'}}>
              <i className="fas fa-newspaper" style={{fontSize:'4rem',color:'var(--cyan-accent)',marginBottom:'1.5rem',display:'block'}}></i>
              <h3 className="title-serif text-chrome" style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Chưa Có Bài Viết Nào</h3>
              <p>Hệ thống Tin Tức sẽ sớm được cập nhật. Hãy quay lại sau nhé!</p>
            </div>
          )}
          {!loading && !error && news.length > 0 && (
            <div className="features-grid">
              {news.map((item, index) => (
                <div key={index} className="glass-card reveal active" style={{padding:0,overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{height:'200px',backgroundImage:`url('${item.thumbnail}')`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
                    <div style={{padding:'1.5rem'}}>
                      <div style={{fontSize:'0.8rem',color:'var(--accent-primary)',marginBottom:'10px'}}><i className="fas fa-calendar-alt"></i> {item.date}</div>
                      <h3 className="title-serif text-main" style={{fontSize:'1.25rem',marginBottom:'10px',lineHeight:1.4}}>{item.title}</h3>
                      <p className="text-muted" style={{fontSize:'0.95rem'}}>{item.summary}</p>
                    </div>
                  </div>
                  <div style={{padding:'0 1.5rem 1.5rem 1.5rem',borderTop:'1px solid var(--border-light)',paddingTop:'1rem',marginTop:'1rem'}}>
                    <a href={`/tin-tuc/bai-viet?id=${item.id}`} style={{color:'var(--cyan-accent)',fontWeight:500,fontSize:'0.95rem',textDecoration:'none'}}>Đọc bài viết <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && !error && news.length === 0 && (
            <div style={{textAlign:'center',padding:'4rem',color:'var(--text-muted)'}}>
              <i className="fas fa-newspaper" style={{fontSize:'4rem',color:'var(--cyan-accent)',marginBottom:'1.5rem',display:'block'}}></i>
              <h3 className="title-serif text-chrome" style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Chưa Có Bài Viết Nào</h3>
              <p>Hệ thống Tin Tức sẽ sớm được cập nhật. Hãy quay lại sau nhé!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default News;
