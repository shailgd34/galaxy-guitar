import React from 'react';
import { Mail, Heart, ShieldCheck, Lock, ShieldAlert } from 'lucide-react';

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

const PinterestIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5-.1-1-.2-2.6 0-3.6l1.2-5.3s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2 0 .5l-.3 1.1c-.1.2-.2.2-.4.1-1.4-.7-2.3-2.8-2.3-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.8 0 4-2.5 7.3-6 7.3-1.2 0-2.3-.6-2.7-1.4l-.8 2.8c-.3 1-1.1 2.3-1.6 3.1A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

// Import verification & charity assets
import woundedWarrior from '../assets/Wounded-Warrior-Logo.jpg';
import davLogo from '../assets/DAVLogo.jpg';
import redCross from '../assets/American Red Cross.jpg';

// Import brand logo
import brandLogo from '../assets/header_logo.png';
import earthBg from '../assets/qimono-earth-1756274_1920.jpg';

const Footer = () => {
  return (
    <footer className="galaxy-footer-sec">
      {/* Curved Planet Earth Background Overlay */}
      <div
        className="footer-earth-backdrop"
        style={{ backgroundImage: `url(${earthBg})` }}
      />
      <div className="footer-vignette-overlay" />

      <div className="footer-main-container">

        {/* ================= UPPER SECTION ================= */}
        <div className="footer-upper-grid">

          {/* Corporate Info with Brand Logo */}
          <div className="footer-info-block text-left">
            <div className="footer-logo-wrapper">
              <img src={brandLogo} alt="Galaxy Guitar Products Logo" className="footer-brand-logo" />
            </div>
            <h4 className="footer-brand-title">GALAXY GUITAR PRODUCTS USA ™</h4>
            <p className="footer-location-tag">United States Of America.</p>
            <p className="footer-copyright-tag">Copyright © 1996-2026 All rights reserved.</p>
          </div>

          {/* Socials & Office Hours */}
          <div className="footer-social-block text-right">
            <p className="footer-hours-tag">Open 10 AM Till 9 PM Pacific Time.</p>
            <p className="footer-social-label">Follow Us On Social Media.</p>

            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="round-social-btn fb-icon" aria-label="Facebook">
                <Facebook size={26} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="round-social-btn yt-icon" aria-label="YouTube">
                <Youtube size={26} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="round-social-btn pin-icon" aria-label="Pinterest">
                <PinterestIcon size={26} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="round-social-btn ig-icon" aria-label="Instagram">
                <Instagram size={26} />
              </a>
            </div>
          </div>

        </div>

        {/* ================= NEON DIVIDER LINE ================= */}
        <div className="footer-neon-divider" />

        {/* ================= SECURITY VERIFICATION ROW ================= */}
        <div className="footer-security-row">
          <div className="security-badge-card">
            <Lock className="security-icon ssl" size={22} />
            <span className="security-badge-text">Rapid SSL<br/>Secured</span>
          </div>
          <div className="security-badge-card">
            <ShieldCheck className="security-icon norton" size={22} />
            <span className="security-badge-text">Norton<br/>Safe Web</span>
          </div>
          <div className="security-badge-card">
            <ShieldAlert className="security-icon google" size={22} />
            <span className="security-badge-text">Google Safe<br/>Browsing</span>
          </div>
        </div>

        {/* ================= LOWER SHARE & CHARITY ROW ================= */}
        <div className="footer-lower-row">

          {/* Share Actions */}
          <div className="footer-share-column">
            <span className="share-title">Click To Share Our Site</span>
            <div className="share-buttons-stack">
              <a href="https://facebook.com/sharer/sharer.php?u=https://galaxyguitar.com" target="_blank" rel="noopener noreferrer" className="share-icon-btn fb-share" aria-label="Share on Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com/intent/tweet?url=https://galaxyguitar.com" target="_blank" rel="noopener noreferrer" className="share-icon-btn twitter-share" aria-label="Share on Twitter">
                <Twitter size={14} />
              </a>
              <a href="mailto:?subject=Check out Galaxy Guitar Products USA&body=https://galaxyguitar.com" className="share-icon-btn email-share" aria-label="Share via Email">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Charity Supporters */}
          <div className="footer-charity-column">
            <div className="charity-heading">
              <Heart size={12} className="heart-icon-glow" />
              <span>OFFICIAL SUPPORTER OF HUMANITARIAN PROGRAMS</span>
            </div>

            <div className="charity-badges-grid">
              <div className="charity-badge-card">
                <img src={woundedWarrior} alt="Wounded Warrior Project Supporter" className="charity-badge-img" />
              </div>
              <div className="charity-badge-card">
                <img src={davLogo} alt="Disabled American Veterans Supporter" className="charity-badge-img" />
              </div>
              <div className="charity-badge-card">
                <img src={redCross} alt="American Red Cross Supporter" className="charity-badge-img" />
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .galaxy-footer-sec {
          position: relative;
          padding: 8rem 0 4rem;
          width: 100%;
          overflow: hidden;
          z-index: 10;
          background: #030712;
        }

        /* Curved Planet Backdrop */
        .footer-earth-backdrop {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          opacity: 0.65;
          z-index: 1;
          filter: brightness(0.65) contrast(1.1);
          pointer-events: none;
        }

        .footer-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #030712 0%, rgba(3, 7, 18, 0.4) 40%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .footer-main-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        /* Upper levels */
        .footer-upper-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .footer-logo-wrapper {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: flex-start;
        }
        .footer-brand-logo {
          height: 90px;
          object-fit: contain;
          filter: brightness(1.1) drop-shadow(0 0 15px rgba(0, 229, 255, 0.1));
          transition: filter 0.3s ease;
        }
        .footer-brand-logo:hover {
          filter: brightness(1.15) drop-shadow(0 0 25px rgba(0, 229, 255, 0.25));
        }

        .text-left {
          text-align: left;
        }
        .text-right {
          text-align: right;
        }

        .footer-brand-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.08em;
          font-family: var(--font-display);
          margin: 0 0 0.35rem 0;
        }
        .footer-location-tag {
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }
        .footer-copyright-tag {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
        }

        .footer-hours-tag {
          font-size: 0.8rem;
          color: #ffffff;
          font-weight: 550;
          margin: 0 0 0.25rem 0;
        }
        .footer-social-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0 0 0.8rem 0;
        }

        /* Social buttons with standard icons */
        .footer-social-icons {
          display: flex;
          justify-content: flex-end;
          gap: 0.8rem;
        }
        .round-social-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .round-social-btn svg {
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }
        .round-social-btn:hover {
          transform: translateY(-2px);
        }
        .round-social-btn.fb-icon:hover { border-color: #1877f2; box-shadow: 0 0 15px rgba(24, 119, 242, 0.35); }
        .round-social-btn.fb-icon:hover svg { color: #1877f2; }
        .round-social-btn.yt-icon:hover { border-color: #ff0000; box-shadow: 0 0 15px rgba(255, 0, 0, 0.35); }
        .round-social-btn.yt-icon:hover svg { color: #ff0000; }
        .round-social-btn.pin-icon:hover { border-color: #e60023; box-shadow: 0 0 15px rgba(230, 0, 35, 0.35); }
        .round-social-btn.pin-icon:hover svg { color: #e60023; }
        .round-social-btn.ig-icon:hover { border-color: #e1306c; box-shadow: 0 0 15px rgba(225, 48, 108, 0.35); }
        .round-social-btn.ig-icon:hover svg { color: #e1306c; }

        /* Glowing division line */
        .footer-neon-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.4) 30%, rgba(0, 229, 255, 0.4) 70%, transparent);
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
        }

        /* Verification images row */
        .footer-security-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .security-badge-card {
          background: rgba(3, 7, 18, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 0.6rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }
        .security-badge-card:hover {
          border-color: rgba(0, 229, 255, 0.25);
          transform: translateY(-2px);
          background: rgba(3, 7, 18, 0.75);
        }
        .security-icon {
          color: rgba(255, 255, 255, 0.8);
        }
        .security-icon.ssl { color: #10b981; }
        .security-icon.norton { color: #f59e0b; }
        .security-icon.google { color: #3b82f6; }
        .security-badge-text {
          font-size: 0.7rem;
          line-height: 1.2;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-align: left;
          letter-spacing: 0.03em;
        }

        /* Bottom Row spacing layout */
        .footer-lower-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 3rem;
          flex-wrap: wrap;
        }

        /* Share Area */
        .footer-share-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .share-title {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-display);
        }
        .share-buttons-stack {
          display: flex;
          gap: 0.65rem;
        }
        .share-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .share-icon-btn:hover {
          color: #ffffff;
          transform: translateY(-1.5px);
        }
        .fb-share:hover { background: #1877f2; border-color: #1877f2; }
        .twitter-share:hover { background: #1da1f2; border-color: #1da1f2; }
        .email-share:hover { background: var(--accent-purple); border-color: var(--accent-purple); }

        /* Charity supporters styling */
        .footer-charity-column {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.8rem;
        }
        .charity-heading {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
          font-family: var(--font-display);
        }
        .heart-icon-glow {
          color: #ef4444;
          filter: drop-shadow(0 0 3px rgba(239,68,68,0.8));
        }

        .charity-badges-grid {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .charity-badge-card {
          background: #ffffff;
          border: 1.5px solid #d1d5db;
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: transform 0.2s ease;
        }
        .charity-badge-card:hover {
          transform: translateY(-2px);
        }
        .charity-badge-img {
          height: 32px;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .footer-main-container { padding: 0 2rem; }
          .footer-security-row { gap: 1rem; }
        }
        @media (max-width: 768px) {
          .footer-upper-grid {
            grid-template-columns: 1fr;
            text-align: center !important;
          }
          .footer-logo-wrapper { justify-content: center; }
          .footer-social-icons {
            justify-content: center;
          }
          .footer-security-row { flex-direction: column; align-items: center; gap: 1rem; }
          .footer-lower-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-share-column { align-items: center; }
          .footer-charity-column { align-items: center; }
          .charity-heading { justify-content: center; }
          .charity-badges-grid { justify-content: center; }
        }
        @media (max-width: 480px) {
          .footer-main-container { padding: 0 1rem; }
          .footer-brand-logo { height: 65px; }
          .charity-badge-img { height: 24px; }
          .security-badge-card { padding: 0.4rem 0.8rem; }
          .security-badge-text { font-size: 0.65rem; }
          .galaxy-footer-sec { padding: 5rem 0 3rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
