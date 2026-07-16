import React from 'react';
import { Mail, ShieldCheck, Lock, Globe, MessageSquare } from 'lucide-react';
import earthImg from '../assets/qimono-earth-1756274_1920.jpg';
import brandLogo from '../assets/header_logo.png';

const Facebook = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const FooterV2 = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="cf-footer">
      
      {/* ── CINEMATIC EARTH ORBIT BACKDROP ── */}
      <div className="cf-footer-space">
        <div className="cf-footer-stars" />
        
        {/* Slow-passing satellite */}
        <div className="cf-footer-satellite-path">
          <div className="cf-footer-satellite" />
        </div>
      </div>

      {/* ── CONTROLS & NAVIGATION (Floating Glass Panels) ── */}
      <div className="cf-footer-inner">
        
        <div className="cf-glass-nav-bar">
          <button onClick={() => handleScrollTo('hero')} className="cf-nav-link">HOME</button>
          <button onClick={() => handleScrollTo('about-us')} className="cf-nav-link">ABOUT</button>
          <button onClick={() => handleScrollTo('engineering')} className="cf-nav-link">ENGINEERING</button>
          <button onClick={() => handleScrollTo('guitars')} className="cf-nav-link">COLLECTION</button>
          <button onClick={() => handleScrollTo('newsletter')} className="cf-nav-link">NEWSLETTER</button>
        </div>

        <div className="cf-footer-grid">
          
          {/* Left Column: Brand & Security Badges (Subtle Chrome Aesthetics) */}
          <div className="cf-left-block">
            <div className="cf-logo-wrap">
              <img src={brandLogo} alt="Galaxy Guitar Products Logo" className="cf-brand-logo" />
            </div>
            <span className="cf-hud-label">LOGISTICS PROTOCOL</span>
            <h4 className="cf-brand-title">GALAXY GUITAR PRODUCTS USA</h4>
            <p className="cf-brand-sub">United States of America · Est. 1996</p>

            <div className="cf-chrome-badges">
              <div className="cf-badge-chrome">
                <Lock size={12} className="badge-icon" />
                <span>SSL SECURE ENCRYPTION</span>
              </div>
              <div className="cf-badge-chrome">
                <ShieldCheck size={12} className="badge-icon" />
                <span>PCI COMPLIANT STANDARDS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Socials & Payments (Monochrome Premium Styling) */}
          <div className="cf-right-block">
            <div className="cf-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cf-social-icon" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="cf-social-icon" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cf-social-icon" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>

            {/* Monochrome Premium Payments Row */}
            <div className="cf-payment-row">
              <span className="cf-pay-label">SECURE CHECKOUT METHODOLOGY:</span>
              <div className="cf-pay-icons">
                <span className="cf-pay-icon">VISA</span>
                <span className="cf-pay-icon">MC</span>
                <span className="cf-pay-icon">AMEX</span>
                <span className="cf-pay-icon">DISCOVER</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Section fading to black */}
        <div className="cf-bottom-fade">
          <p className="cf-copyright">© 1996-2026 GALAXY GUITAR PRODUCTS USA. ALL RIGHTS RESERVED.</p>
        </div>

      </div>

      <style>{`
        .cf-footer {
          position: relative;
          background: #020208;
          overflow: hidden;
          padding: 8rem 0 4rem;
          isolation: isolate;
        }

        /* Earth backdrop styling */
        .cf-footer-space {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(circle at 50% 100%, rgba(138, 43, 226, 0.05) 0%, transparent 70%);
        }

        .cf-footer-stars {
          position: absolute; inset: 0;
          background-image: radial-gradient(1px 1px at 150px 80px, rgba(255,255,255,0.15), transparent);
          background-size: 300px 300px;
        }

        /* Satellite orbit */
        .cf-footer-satellite-path {
          position: absolute;
          width: 600px; height: 180px;
          border-radius: 50%;
          top: 30%; left: 50%;
          transform: translate(-50%, -50%) rotate(-10deg);
        }
        .cf-footer-satellite {
          position: absolute;
          width: 4px; height: 4px; border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 8px #00e5ff, 0 0 16px rgba(0,229,255,0.5);
          animation: satelliteFly 20s linear infinite;
        }
        @keyframes satelliteFly {
          from { transform: rotate(0deg) translateX(300px); }
          to   { transform: rotate(360deg) translateX(300px); }
        }

        /* Footer content wrapper */
        .cf-footer-inner {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Floating glass navigation bar */
        .cf-glass-nav-bar {
          display: flex;
          gap: 2.2rem;
          padding: 0.8rem 2.2rem;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.05);
          margin-bottom: 5rem;
        }

        .cf-nav-link {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.45);
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cf-nav-link:hover {
          color: #00e5ff;
          text-shadow: 0 0 8px rgba(0, 229, 255, 0.5);
        }

        /* Grid */
        .cf-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          width: 100%;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .cf-left-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .cf-logo-wrap {
          margin-bottom: 1.2rem;
        }

        .cf-brand-logo {
          max-height: 48px;
          object-fit: contain;
          filter: brightness(0.95) contrast(1.1);
        }

        .cf-hud-label {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.25);
          margin-bottom: 0.8rem;
        }

        .cf-brand-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.05em;
          margin: 0 0 0.4rem 0;
        }

        .cf-brand-sub {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          margin: 0 0 2rem;
        }

        /* Chrome styled badges */
        .cf-chrome-badges {
          display: flex;
          gap: 1rem;
        }

        .cf-badge-chrome {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .badge-icon {
          color: rgba(255, 255, 255, 0.45);
        }

        /* Right block: social & payments */
        .cf-right-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 2.2rem;
        }

        .cf-social-links {
          display: flex;
          gap: 1.2rem;
        }

        .cf-social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s ease;
        }

        .cf-social-icon:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
        }

        /* Payment Row */
        .cf-payment-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.6rem;
        }

        .cf-pay-label {
          font-family: monospace;
          font-size: 0.55rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 0.05em;
        }

        .cf-pay-icons {
          display: flex;
          gap: 0.8rem;
        }

        .cf-pay-icon {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.52rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.3rem 0.6rem;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.01);
        }

        /* Bottom fade to darkness */
        .cf-bottom-fade {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding-top: 2rem;
          text-align: center;
          background: linear-gradient(180deg, transparent 0%, #000 80%);
        }

        .cf-copyright {
          font-family: monospace;
          font-size: 0.58rem;
          color: rgba(255, 255, 255, 0.2);
          letter-spacing: 0.08em;
          margin: 0;
        }

        @media (max-width: 900px) {
          .cf-footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .cf-left-block, .cf-right-block {
            align-items: center;
            text-align: center;
          }
          .cf-payment-row {
            align-items: center;
          }
          .cf-glass-nav-bar {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterV2;
