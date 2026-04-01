import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  thumbnail: string;
  content: string;
}

const NewsArticle: React.FC = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) {
      setError('Không tìm thấy mã bài viết hợp lệ.');
      setLoading(false);
      return;
    }

    fetch('/data/news.json')
      .then(res => res.json())
      .then((data: NewsArticle[]) => {
        const post = data.find(p => p.id === postId);
        if (post) {
          setArticle(post);
          document.title = post.title + " - Cổng Thông Tin VCT Platform";
        } else {
          setError('Bài viết không tồn tại trên hệ thống dữ liệu.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Lỗi kết nối CSDL.');
        setLoading(false);
      });
  }, [postId]);

  return (
    <main id="main-content">
      <section className="legal-page" style={{paddingTop:'150px'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          {loading && (
            <div style={{textAlign:'center',padding:'2rem',color:'var(--text-muted)'}}>
              <i className="fas fa-spinner fa-spin fa-2x"></i>
              <p style={{marginTop:'10px'}}>Đang tải bản tin...</p>
            </div>
          )}

          {error && (
            <div style={{textAlign:'center',padding:'4rem',color:'#ef4444'}}>
              <i className="fas fa-exclamation-triangle" style={{fontSize:'3rem',marginBottom:'1rem',display:'block'}}></i>
              <p>{error}</p>
              <Link to="/tin-tuc" className="btn btn-outline" style={{marginTop:'2rem'}}>
                <i className="fas fa-arrow-left" style={{marginRight:'8px'}}></i> Quay lại Tin Tức
              </Link>
            </div>
          )}

          {article && (
            <div className="legal-content reveal active">
              <div className="legal-updated" style={{marginBottom:'2rem'}}>
                <Link to="/tin-tuc" style={{color:'var(--cyan-accent)',textDecoration:'none'}}>
                  <i className="fas fa-arrow-left"></i> Quay lại Phân mục Tin Tức
                </Link>
              </div>

              <h1 className="title-serif text-accent" style={{fontSize:'2.5rem',marginBottom:'1rem',lineHeight:1.3}}>{article.title}</h1>

              <div style={{display:'flex',gap:'1rem',color:'var(--text-muted)',fontSize:'0.9rem',marginBottom:'2rem',borderBottom:'1px solid var(--border-light)',paddingBottom:'1rem'}}>
                <div><i className="fas fa-calendar-alt text-cyan"></i> {article.date}</div>
                <div><i className="fas fa-pen-nib text-cyan"></i> {article.author}</div>
              </div>

              <img
                src={article.thumbnail}
                alt={article.title}
                style={{
                  width: '100%',
                  maxHeight: '420px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  border: '1px solid var(--border-light)',
                }}
              />

              <div
                id="post-body"
                style={{color:'var(--text-main)',lineHeight:1.8,fontSize:'1.1rem',textAlign:'justify'}}
                dangerouslySetInnerHTML={{__html: article.content}}
              />

              <div style={{marginTop:'4rem',borderTop:'1px solid var(--border-light)',paddingTop:'2rem',textAlign:'center'}}>
                <p style={{color:'var(--text-muted)',fontSize:'0.9rem'}}>Bản quyền nội dung thuộc về Cổng Thông Tin VCT Platform.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default NewsArticle;
