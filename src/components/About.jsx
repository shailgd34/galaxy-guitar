import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, ChevronRight, Play } from 'lucide-react';
import redGuitar from '../assets/pngwing.com.png';
import alienImg from '../assets/Alien.jpg';

const USAFlagVector = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 7410 3900" 
    style={{ 
      width: '50px', 
      height: '28px', 
      display: 'block', 
      borderRadius: '2px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.4)'
    }}
  >
    <rect width="7410" height="3900" fill="#b22234"/>
    <path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#fff" strokeWidth="300"/>
    <rect width="2964" height="2100" fill="#3c3b6e"/>
    <g fill="#fff">
      <circle cx="247" cy="210" r="45"/><circle cx="741" cy="210" r="45"/><circle cx="1235" cy="210" r="45"/><circle cx="1729" cy="210" r="45"/><circle cx="2223" cy="210" r="45"/><circle cx="2717" cy="210" r="45"/>
      <circle cx="494" cy="420" r="45"/><circle cx="988" cy="420" r="45"/><circle cx="1482" cy="420" r="45"/><circle cx="1976" cy="420" r="45"/><circle cx="2470" cy="420" r="45"/>
      <circle cx="247" cy="630" r="45"/><circle cx="741" cy="630" r="45"/><circle cx="1235" cy="630" r="45"/><circle cx="1729" cy="630" r="45"/><circle cx="2223" cy="630" r="45"/><circle cx="2717" cy="630" r="45"/>
      <circle cx="494" cy="840" r="45"/><circle cx="988" cy="840" r="45"/><circle cx="1482" cy="840" r="45"/><circle cx="1976" cy="840" r="45"/><circle cx="2470" cy="840" r="45"/>
      <circle cx="247" cy="1050" r="45"/><circle cx="741" cy="1050" r="45"/><circle cx="1235" cy="1050" r="45"/><circle cx="1729" cy="1050" r="45"/><circle cx="2223" cy="1050" r="45"/><circle cx="2717" cy="1050" r="45"/>
      <circle cx="494" cy="1260" r="45"/><circle cx="988" cy="1260" r="45"/><circle cx="1482" cy="1260" r="45"/><circle cx="1976" cy="1260" r="45"/><circle cx="2470" cy="1260" r="45"/>
      <circle cx="247" cy="1470" r="45"/><circle cx="741" cy="1470" r="45"/><circle cx="1235" cy="1470" r="45"/><circle cx="1729" cy="1470" r="45"/><circle cx="2223" cy="1470" r="45"/><circle cx="2717" cy="1470" r="45"/>
      <circle cx="494" cy="1680" r="45"/><circle cx="988" cy="1680" r="45"/><circle cx="1482" cy="1680" r="45"/><circle cx="1976" cy="1680" r="45"/><circle cx="2470" cy="1680" r="45"/>
      <circle cx="247" cy="1890" r="45"/><circle cx="741" cy="1890" r="45"/><circle cx="1235" cy="1890" r="45"/><circle cx="1729" cy="1890" r="45"/><circle cx="2223" cy="1890" r="45"/><circle cx="2717" cy="1890" r="45"/>
    </g>
  </svg>
);

const About = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      id="about-us" 
      className="about-section"
    >
      {/* Background grid pattern */}
      <div className="about-bg-grid" />
      
      {/* Decorative vertical lines */}
      <div className="decor-line left-line" />
      <div className="decor-line right-line" />

      <div className="about-container">
        
        {/* ================= HEADER ROW ================= */}
        <div className="about-top-header">
          <div className="header-meta-box">
            <span className="meta-tag">REF // 02-PRODUCTION-NARRATIVE</span>
            <div className="meta-divider" />
            <span className="meta-tag">STATUS // PREMIERING SOON</span>
          </div>
          <div className="shipping-banner">
            <div className="shipping-badge">
              <Globe size={13} className="airplane-icon" style={{ color: 'var(--accent-cyan)' }} />
              <span>We Ship Worldwide</span>
            </div>
            <p className="shipping-desc">
              Get Free FedEx USA Air Express Shipping
            </p>
          </div>
        </div>

        {/* ================= MAIN COLUMN GRID ================= */}
        <div className="about-content-grid">
          
          {/* LEFT SIDE: Brand Narrative & Members Only Email List */}
          <div className="about-left-col">
            <motion.div 
              className="about-editorial-box"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="corporate-profile-label">Corporate Profile</span>
              <h2 className="about-headline">
                Welcome To <br />
                <span className="brand-gradient-text">Galaxy Guitar Products USA.</span>
              </h2>

              <p className="lead-narrative">
                The Global Leader For Professional Guitar Finger Protectors & Extensions.
              </p>
              
              <p className="body-narrative">
                Exclusive manufacturer of custom-made biomechanical finger protectors and extensions built for musicians, orthopedic clinics, and medical prosthetics worldwide. Coupled with our high-end, hand-finished custom shop guitars, we celebrate over 30 years of visual studies and engineering excellence.
              </p>

              {/* Members Only Newsletter Form */}
              <div className="newsletter-box">
                <div className="newsletter-header">
                  <Mail size={16} className="text-cyan" />
                  <h4>Join Our "Members Only" Email List Below</h4>
                </div>
                <p className="newsletter-subtitle">
                  Get access to Monthly Private Discount Sales.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Enter your professional email..." 
                      className="newsletter-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                    <button type="submit" className="newsletter-submit-btn">
                      <span>Access Sales</span>
                      <ChevronRight size={14} />
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="newsletter-success"
                  >
                    🎉 Welcome to the Club! Check your inbox for private discount sales.
                  </motion.div>
                )}
              </div>

              {/* Space Alien Badge */}
              <div className="alien-invader-badge">
                <div className="alien-avatar-wrapper">
                  <img src={alienImg} alt="Galaxy Alien Tech" className="alien-img" />
                </div>
                <div className="alien-badge-text">
                  <span className="invader-slogan">Rock the Nation with your new Galaxy TRB-3 INVADER GUITAR.</span>
                  <span className="get-one-call">GET ONE.</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive Video & Spacecraft Launch Poster */}
          <div className="about-right-col">
            <motion.div 
              className="about-showcase-box"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              
              {/* Dev Premiere Tagline */}
              <div className="premiere-box">
                <span className="pulse-dot" />
                <span className="premiere-text">
                  WATCH FOR OUR NEW WEBSITE CURRENTLY IN DEVELOPMENT PREMIERING SOON
                </span>
              </div>

              {/* YouTube Video Player Embed / Card */}
              <div className="video-showcase-card">
                {!videoPlay ? (
                  <div className="video-thumbnail-wrapper" onClick={() => setVideoPlay(true)}>
                    <img 
                      src={redGuitar} 
                      alt="Galaxy TRB-3 Invader Custom Guitar"
                      className="video-guitar-preview"
                    />
                    <div className="video-overlay-gradient" />
                    <button className="video-play-btn">
                      <Play size={24} fill="#fff" />
                    </button>
                    <span className="video-play-label">Play Video Demo</span>
                  </div>
                ) : (
                  <div className="video-iframe-wrapper">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed?listType=user_uploads&list=Galaxyguitar&autoplay=1"
                      title="Galaxy USA Custom Shop TRB-3 INVADER Guitar Video"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    />
                  </div>
                )}
                
                <div className="video-footer-info">
                  <h4 className="video-footer-title">Checkout this Galaxy TRB-3 INVADER VIDEO</h4>
                  <p className="video-footer-subtitle">
                    Shown in Cool Caribbean Blue Burst with Flamed Maple Top.
                  </p>
                </div>
              </div>

              {/* USA Excellence Badge */}
              <div className="usa-excellence-badge">
                <p className="excellence-celebrating">Celebrating</p>
                <h3 className="excellence-years">30 Years Of Excellence!</h3>
                <p className="excellence-serving">Serving Musicians Worldwide.</p>
                <div className="flag-wrapper">
                  <USAFlagVector />
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* ===== Styles ===== */}
      <style>{`
        .about-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: transparent;
          padding: 4.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          z-index: 6;
          display: flex;
          align-items: center;
        }

        .about-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center center;
          pointer-events: none;
          z-index: 1;
        }

        .decor-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, rgba(0, 229, 255, 0.15) 0%, transparent 50%, rgba(139, 92, 246, 0.15) 100%);
          z-index: 2;
          pointer-events: none;
        }
        .left-line { left: 4%; }
        .right-line { right: 4%; }

        .about-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
          z-index: 10;
        }

        /* Top Header Row with Shipping and Meta Coordinates */
        .about-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .header-meta-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .meta-tag {
          font-size: 0.65rem;
          color: var(--text-secondary);
          font-family: var(--font-display);
          letter-spacing: 0.15em;
        }
        .meta-divider {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.3);
        }

        .shipping-banner {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(0, 229, 255, 0.02);
          border: 1px solid rgba(0, 229, 255, 0.15);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          max-width: fit-content;
        }
        .shipping-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-display);
        }
        .shipping-desc {
          font-size: 0.76rem;
          color: var(--accent-cyan);
          margin: 0;
          font-family: var(--font-sans);
          font-weight: 550;
        }

        /* Content Grid */
        .about-content-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 5rem;
          align-items: start;
        }

        .corporate-profile-label {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: var(--font-display);
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .about-headline {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #ffffff;
          line-height: 1.1;
          font-weight: 800;
          font-family: var(--font-display);
          margin: 0 0 1.5rem 0;
        }
        .brand-gradient-text {
          background: linear-gradient(90deg, #00e5ff 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-narrative-box {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          border-left: 2px solid rgba(0, 229, 255, 0.3);
          padding-left: 1.6rem;
          margin-bottom: 2.2rem;
        }
        .lead-narrative {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 600;
          line-height: 1.45;
          margin: 0;
          font-family: var(--font-sans);
        }
        .body-narrative {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
          font-weight: 400;
        }

        /* Members Only Newsletter */
        .newsletter-box {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.6rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          margin-bottom: 2.2rem;
        }
        .newsletter-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }
        .newsletter-header h4 {
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 700;
          font-family: var(--font-display);
          margin: 0;
          letter-spacing: 0.04em;
        }
        .newsletter-subtitle {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          margin: 0 0 1rem 0;
          font-weight: 550;
        }
        .newsletter-form {
          display: flex;
          gap: 0.8rem;
        }
        .newsletter-input {
          flex: 1;
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          padding: 0 1rem;
          color: #ffffff;
          font-size: 0.82rem;
          outline: none;
          transition: border-color 0.3s ease;
          height: 46px;
        }
        .newsletter-input:focus {
          border-color: var(--accent-cyan);
        }
        .newsletter-submit-btn {
          height: 46px;
          padding: 0 1.2rem;
          background: linear-gradient(135deg, #0d9488, #1e40af);
          border: none;
          border-radius: 6px;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-display);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .newsletter-submit-btn:hover {
          transform: translateY(-1.5px);
          opacity: 0.95;
        }
        .newsletter-success {
          font-size: 0.82rem;
          color: #10B981;
          font-weight: 600;
        }

        /* Alien Invader Badge */
        .alien-invader-badge {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: rgba(3, 7, 18, 0.4);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 1.2rem;
          border-radius: 10px;
        }
        .alien-avatar-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1.5px solid #10b981;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .alien-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .alien-badge-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .invader-slogan {
          font-size: 0.82rem;
          color: #10b981;
          font-weight: 600;
          line-height: 1.4;
        }
        .get-one-call {
          font-size: 0.88rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.1em;
          margin-top: 0.2rem;
          font-family: var(--font-display);
        }

        /* USA Excellence Badge */
        .usa-excellence-badge {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: rgba(3, 7, 18, 0.45);
          border: 1px solid rgba(0, 229, 255, 0.15);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .excellence-celebrating {
          font-size: 1.15rem;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 0.25rem 0;
          font-family: var(--font-display);
        }
        .excellence-years {
          font-size: 1.5rem;
          font-weight: 800;
          color: #00E5FF;
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.35);
          margin: 0 0 0.25rem 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .excellence-serving {
          font-size: 1rem;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 1rem 0;
        }
        .flag-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 3px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .usa-flag-img {
          width: 75px;
          height: auto;
          display: block;
          border-radius: 2px;
        }

        /* Right Column Premiere Showcase */
        .premiere-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.8rem 1.2rem;
          border-radius: 6px;
          margin-bottom: 1.8rem;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: redPulse 1.8s infinite;
        }
        .premiere-text {
          font-size: 0.65rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.08em;
          font-family: var(--font-display);
          line-height: 1.4;
        }
        @keyframes redPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Video Card Component */
        .video-showcase-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        .video-thumbnail-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          background: #090e1a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .video-guitar-preview {
          width: 60%;
          height: 80%;
          object-fit: contain;
          transition: transform 0.5s ease;
          transform: rotate(-15deg);
        }
        .video-thumbnail-wrapper:hover .video-guitar-preview {
          transform: scale(1.08) rotate(-10deg);
        }
        .video-overlay-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 30%, rgba(3, 7, 18, 0.6) 100%);
        }
        .video-play-btn {
          position: absolute;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #ef4444;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease, background 0.2s ease;
          padding-left: 4px;
        }
        .video-thumbnail-wrapper:hover .video-play-btn {
          transform: scale(1.1);
          background: #ff5555;
        }
        .video-play-label {
          position: absolute;
          bottom: 15px;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: var(--font-display);
        }

        .video-iframe-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
        }

        .video-footer-info {
          padding: 1.4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: left;
          background: rgba(3, 7, 18, 0.6);
        }
        .video-footer-title {
          font-size: 0.92rem;
          color: #ffffff;
          font-weight: 700;
          font-family: var(--font-display);
          margin: 0 0 0.3rem 0;
        }
        .video-footer-subtitle {
          font-size: 0.8rem;
          color: var(--accent-cyan);
          margin: 0;
          font-weight: 550;
        }

        @media (max-width: 991px) {
          .about-container { padding: 0 2rem; }
          .about-content-grid { grid-template-columns: 1fr; gap: 3rem; }
          .left-line, .right-line { display: none; }
          .about-top-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .shipping-banner { flex-direction: column; align-items: flex-start; border-radius: 10px; padding: 0.8rem 1.2rem; }
        }
        @media (max-width: 576px) {
          .newsletter-form { flex-direction: column; }
          .about-container { padding: 0 1.2rem; }
          .excellence-years { font-size: 1.25rem; }
          .usa-excellence-badge { padding: 1.25rem 1rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
