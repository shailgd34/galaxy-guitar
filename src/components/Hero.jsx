import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Globe, Shield, ArrowRight } from 'lucide-react';
import bgImage from '../assets/bgimageOne.png';
import guitarImg from '../assets/pngwing.com.png';

// Simple SVG for Guitar Icon to avoid dependency issues if not in Lucide
const GuitarIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.7 5.3a3.8 3.8 0 0 0-5.4 0l-1.8 1.8L3 15.6V21h5.4l8.5-8.5 1.8-1.8a3.8 3.8 0 0 0 0-5.4z" />
    <path d="M11.5 7.5L16.5 12.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

// Character-by-character 3D rotating text component
const AnimatedText = ({ text, className, delayOffset = 0 }) => {
  const words = text.split(' ');
  let letterCount = 0;

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {words.map((word, wIdx) => {
        return (
          <span
            key={wIdx}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: '0.22em'
            }}
          >
            {word.split('').map((char, cIdx) => {
              const currentDelay = delayOffset + letterCount * 0.03;
              letterCount++;
              return (
                <motion.span
                  key={cIdx}
                  style={{
                    display: 'inline-block',
                    transformOrigin: 'center center',
                    cursor: 'default'
                  }}
                  initial={{ opacity: 0, rotateY: 90, y: 10 }}
                  animate={{ opacity: 1, rotateY: 0, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: currentDelay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    rotateY: 360,
                    color: '#00E5FF',
                    scale: 1.12,
                    filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.8))'
                  }}
                  transitionHover={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 10
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-section"
    >
      {/* ===== Background Image ===== */}
      <div className="hero-bg-image">
        <img src={bgImage} alt="Galaxy Guitar Backdrop" />
      </div>

      {/* ===== Dark Mask Overlay for Legibility ===== */}
      <div className="hero-bg-overlay" />

      {/* ===== Main Container (Split layout or left-aligned wrapper) ===== */}
      <div className="hero-content-wrapper">

        {/* Left Side Content Column */}
        <div className="hero-left-column">

          {/* Decorative vertical accent line */}
          <div className="hero-left-accent-bar">
            <div className="accent-bar-line" />
            <div className="accent-bar-dot dot-top" />
            <div className="accent-bar-dot dot-mid" />
            <div className="accent-bar-dot dot-bot" />
          </div>

          {/* Inner row: guitar left + text right */}
          <div className="hero-inner-row">

            {/* Guitar decoration beside text */}
            <div className="hero-side-guitar-wrap">
              <div className="guitar-glow-ring outer-ring" />
              <div className="guitar-glow-ring inner-ring" />
              <motion.img
                src={guitarImg}
                alt="Galaxy Guitar"
                className="hero-floating-guitar-img"
                initial={{ opacity: 0, x: -40, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 15 }}
                transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

          <motion.div
            className="hero-text-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline */}
            <motion.span
              className="hero-tag"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              NEW FOR 2026: GALAXY TRB-3 INVADER CUSTOM SHOP GUITARS
            </motion.span>

            {/* Headline */}
            <h1 className="hero-headline">
              <span className="hero-welcome">Welcome To</span>
              <span className="hero-main-title">
                <AnimatedText text="Galaxy Guitar" className="text-white" delayOffset={0.35} />
                <br />
                <AnimatedText text="Products USA." className="hero-gradient-text" delayOffset={0.7} />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-sub">
              Explore Our Website <br />
              Find Your Guitar <strong>Rock The World!</strong>
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-row">
              <button className="btn-chrome btn-with-icons" onClick={() => handleScrollTo('guitars')}>
                <span className="btn-icon-left"><GuitarIcon size={16} /></span>
                Explore The Collection
                <span className="btn-icon-right"><ArrowRight size={16} /></span>
              </button>

              <button className="btn-cyber btn-with-icons" onClick={() => handleScrollTo('protectors')}>
                <span className="btn-icon-left"><Shield size={16} /></span>
                Discover Finger Protection
              </button>
            </div>

            {/* Bottom Left Badges Row */}
            <div className="hero-bottom-badges">
              <div className="bottom-badge-item">
                <div className="badge-icon-circle">
                  <Star size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div className="badge-text-lines">
                  <span className="line-primary">30+ Years</span>
                  <span className="line-secondary">Of Excellence</span>
                </div>
              </div>

              <div className="bottom-badge-item">
                <div className="badge-icon-circle">
                  <Globe size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div className="badge-text-lines">
                  <span className="line-primary">Worldwide</span>
                  <span className="line-secondary">Shipping</span>
                </div>
              </div>

              <div className="bottom-badge-item">
                <div className="badge-icon-circle">
                  <GuitarIcon size={16} />
                </div>
                <div className="badge-text-lines">
                  <span className="line-primary">Custom Shop</span>
                  <span className="line-secondary">Guitars</span>
                </div>
              </div>
            </div>

          </motion.div>
          </div>{/* end hero-inner-row */}
        </div>

        {/* Right Side Vertically Stacked Badges Column */}
        <div className="hero-right-column">
          <motion.div
            className="vertical-badge-stack"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            {/* Right Badge 1 */}
            <div className="vertical-badge-item">
              <div className="vertical-badge-icon">
                <Star size={24} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <div className="vertical-badge-labels">
                <span className="v-label-num">30</span>
                <span className="v-label-sub">YEARS</span>
                <span className="v-label-desc">OF EXCELLENCE</span>
              </div>
            </div>

            {/* Right Badge 2 */}
            <div className="vertical-badge-item">
              <div className="vertical-badge-icon">
                <Globe size={24} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <div className="vertical-badge-labels">
                <span className="v-label-sub">SERVING</span>
                <span className="v-label-desc">MUSICIANS</span>
                <span className="v-label-desc">WORLDWIDE</span>
              </div>
            </div>

            {/* Right Badge 3 */}
            <div className="vertical-badge-item">
              <div className="vertical-badge-icon">
                <Shield size={24} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <div className="vertical-badge-labels">
                <span className="v-label-sub">PROFESSIONAL</span>
                <span className="v-label-desc">FINGER</span>
                <span className="v-label-desc">PROTECTION</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ===== Scroll Indicator at Center Bottom ===== */}
      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="scroll-indicator-click"
          onClick={() => handleScrollTo('about-us')}
        >
          <div className="mouse-pill">
            <span className="mouse-wheel" />
          </div>
          <span className="scroll-indicator-text">Scroll To Explore</span>
        </motion.div>
      </div>

      {/* ===== CSS Styles ===== */}
      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          zIndex: 6;
          background: transparent;
          display: flex;
          align-items: center;
        }

        /* Background image covers full screen, with cinematic scale transition */
        .hero-bg-image {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: transparent;
          overflow: hidden;
        }
        .hero-bg-image img {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 85%;
          height: 100%;
          object-fit: contain;
          object-position: right bottom;
          animation: heroImageScale 20s ease-in-out infinite alternate;
          transform-origin: center bottom;
        }

        @keyframes heroImageScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }

        /* Combined horizontal left-aligned shadow mask & vertical frames */
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: 
            linear-gradient(90deg, #030712 0%, rgba(3, 7, 18, 0.95) 20%, rgba(3, 7, 18, 0.6) 40%, rgba(3, 7, 18, 0) 70%),
            linear-gradient(180deg, #030712 0%, transparent 12%, transparent 88%, #030712 100%);
          pointer-events: none;
        }

        /* Main Flex Grid Wrapper */
        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .hero-left-column {
          flex: 1;
          max-width: 620px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-right-column {
          position: absolute;
          right: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 12;
        }

        /* ── Left Decorative Accent Bar ── */
        .hero-left-column {
          position: relative;
        }
        .hero-left-accent-bar {
          position: absolute;
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          height: 200px;
          z-index: 15;
        }
        .accent-bar-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, transparent, rgba(0,229,255,0.7), transparent);
          border-radius: 2px;
        }
        .accent-bar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan), 0 0 22px var(--accent-cyan);
          flex-shrink: 0;
        }
        .dot-top { animation: accentDotPulse 2s ease-in-out infinite; }
        .dot-mid { animation: accentDotPulse 2s ease-in-out infinite 0.65s; width: 5px; height: 5px; }
        .dot-bot { animation: accentDotPulse 2s ease-in-out infinite 1.3s; }
        @keyframes accentDotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        /* ── Hero inner row: guitar + text side by side ── */
        .hero-inner-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }

        /* ── Left Guitar Decoration (beside text) ── */
        .hero-side-guitar-wrap {
          position: relative;
          flex-shrink: 0;
          width: 90px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .guitar-glow-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 255, 0.2);
          pointer-events: none;
        }
        .outer-ring {
          width: 86px;
          height: 86px;
          animation: guitarRingPulse 4s ease-in-out infinite;
          box-shadow: 0 0 20px rgba(0,229,255,0.06) inset;
        }
        .inner-ring {
          width: 58px;
          height: 58px;
          border-color: rgba(0, 229, 255, 0.10);
          animation: guitarRingPulse 4s ease-in-out infinite 2s;
        }
        @keyframes guitarRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .hero-floating-guitar-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 18px rgba(0, 229, 255, 0.4)) drop-shadow(0 0 50px rgba(0, 100, 180, 0.25));
          animation: guitarFloat 6s ease-in-out infinite;
        }
        @keyframes guitarFloat {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-12px) rotate(17deg); }
        }

        /* Left Side Text Content spacing */
        .hero-text-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.4rem;
          width: 100%;
        }

        .hero-tag {
          display: inline-block;
          font-size: 0.65rem;
          color: var(--accent-cyan);
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: var(--font-display);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 0.45rem 1.1rem;
          border-radius: 4px;
          background: rgba(0, 229, 255, 0.03);
          backdrop-filter: blur(8px);
        }
        .hero-tag strong {
          color: #00E5FF;
          font-weight: 700;
        }

        .hero-headline {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.3rem;
        }
        .hero-welcome {
          display: block;
          font-size: clamp(1.4rem, 2.2vw, 1.8rem);
          font-weight: 400;
          color: #ffffff;
          font-family: var(--font-display);
          letter-spacing: 0.05em;
        }
        .hero-main-title {
          display: block;
          font-size: clamp(2.5rem, 5.2vw, 4.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #ffffff;
          font-family: var(--font-display);
        }
        
        /* Premium Gradient Text for "Products USA." */
        .hero-gradient-text {
          background: linear-gradient(90deg, #b084ff 0%, #00e5ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-sub {
          font-size: clamp(0.95rem, 1.6vw, 1.05rem);
          color: #9ca3af;
          line-height: 1.5;
          font-weight: 400;
          font-family: var(--font-sans);
          margin: 0;
        }
        .hero-sub strong {
          color: #ffffff;
          font-weight: 600;
        }

        /* Button row left aligned */
        .hero-cta-row {
          display: flex;
          gap: 1rem;
          margin-top: 0.2rem;
          width: 100%;
        }

        /* Buttons with embedded icons */
        .btn-with-icons {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
          height: 52px;
          padding: 0 1.8rem;
          border-radius: 6px;
        }
        .btn-icon-left {
          display: flex;
          align-items: center;
          opacity: 0.9;
        }
        .btn-icon-right {
          display: flex;
          align-items: center;
          transition: transform 0.2s ease;
        }
        .btn-chrome:hover .btn-icon-right {
          transform: translateX(4px);
        }

        /* Bottom Left Badges styling */
        .hero-bottom-badges {
          display: flex;
          gap: 2.2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .bottom-badge-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .badge-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.02);
        }
        .badge-text-lines {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .line-primary {
          font-size: 0.8rem;
          font-weight: 600;
          color: #ffffff;
          font-family: var(--font-display);
        }
        .line-secondary {
          font-size: 0.68rem;
          color: #9ca3af;
          font-family: var(--font-sans);
        }

        /* Right Side Vertical Badge Column */
        .vertical-badge-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          background: rgba(3, 7, 18, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.2rem 1.6rem;
          border-radius: 12px;
          backdrop-filter: blur(12px);
          min-width: 180px;
        }
        .vertical-badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
        }
        .vertical-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .vertical-badge-labels {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .v-label-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          font-family: var(--font-display);
        }
        .v-label-sub {
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.08em;
          font-family: var(--font-display);
        }
        .v-label-desc {
          font-size: 0.58rem;
          color: #9ca3af;
          letter-spacing: 0.05em;
          font-family: var(--font-sans);
          line-height: 1.3;
        }

        /* Centered Scroll Indicator at Bottom */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 12;
          pointer-events: auto;
        }
        .scroll-indicator-click {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .mouse-pill {
          width: 22px;
          height: 36px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          border-radius: 15px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .mouse-wheel {
          width: 3px;
          height: 7px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          position: absolute;
          top: 6px;
          animation: mouseWheelScroll 1.8s ease-in-out infinite;
        }
        @keyframes mouseWheelScroll {
          0% { opacity: 0; transform: translateY(0); }
          20% { opacity: 1; }
          80% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 0; }
        }
        .scroll-indicator-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          font-family: var(--font-display);
          text-transform: uppercase;
        }

        /* Responsive Layout styles */
        @media (max-width: 1200px) {
          .hero-content-wrapper {
            padding: 0 2.5rem;
          }
          .hero-right-column {
            display: none; /* Hide vertical badge side panel on smaller screens */
          }
          .hero-floating-guitar-wrap {
            width: 340px;
            height: 400px;
            right: 2%;
          }
          .outer-ring { width: 300px; height: 300px; }
          .inner-ring { width: 210px; height: 210px; }
        }

        @media (max-width: 768px) {
          .hero-bg-overlay {
            background: 
              linear-gradient(180deg, rgba(3, 7, 18, 0.9) 0%, rgba(3, 7, 18, 0.5) 50%, rgba(3, 7, 18, 0.9) 100%);
          }
          .hero-content-wrapper {
            padding: 0 1.5rem;
            justify-content: center;
          }
          .hero-floating-guitar-wrap {
            display: none;
          }
          .hero-left-accent-bar {
            display: none;
          }
          .hero-left-column {
            max-width: 100%;
            align-items: center;
          }
          .hero-text-block {
            align-items: center;
            text-align: center;
          }
          .hero-headline {
            align-items: center;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: center;
            gap: 0.8rem;
          }
          .hero-bottom-badges {
            justify-content: center;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
