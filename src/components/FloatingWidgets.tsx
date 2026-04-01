import React from 'react';

const FloatingWidgets: React.FC = () => {
  return (
    <>
      <div
        id="vct-floating-widgets"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'flex-start',
        }}
      >
        <a
          href="tel:0981108078"
          id="vct-hotline-btn"
          title="Gọi Hotline VCT Platform"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #06B6D4, #0D9488)',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.95rem',
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 4px 20px rgba(6,182,212,0.4)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(6,182,212,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(6,182,212,0.4)';
          }}
        >
          <i className="fas fa-phone-alt" style={{ fontSize: '1.1rem', animation: 'vct-ring 2s ease-in-out infinite' }}></i>
          0981.10.80.78
        </a>
      </div>

      <style>{`
        @keyframes vct-ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(8deg); }
          40% { transform: rotate(-5deg); }
          50%, 100% { transform: rotate(0deg); }
        }
        @media (max-width: 480px) {
          #vct-floating-widgets { bottom: 16px !important; left: 16px !important; gap: 10px !important; }
          #vct-hotline-btn { padding: 10px 16px !important; font-size: 0.85rem !important; }
        }
      `}</style>
    </>
  );
};

export default FloatingWidgets;
