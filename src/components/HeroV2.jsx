import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Globe, Shield } from 'lucide-react';

const GuitarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.7 5.3a3.8 3.8 0 0 0-5.4 0l-1.8 1.8L3 15.6V21h5.4l8.5-8.5 1.8-1.8a3.8 3.8 0 0 0 0-5.4z" />
    <path d="M11.5 7.5L16.5 12.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const AnimatedText = ({ text, className, delayOffset = 0 }) => {
  const words = text.split(' ');
  let letterCount = 0;
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {words.map((word, wIdx) => (
        <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.22em' }}>
          {word.split('').map((char, cIdx) => {
            const currentDelay = delayOffset + letterCount * 0.03;
            letterCount++;
            return (
              <motion.span
                key={cIdx}
                style={{ display: 'inline-block', transformOrigin: 'center center', cursor: 'default' }}
                initial={{ opacity: 0, rotateY: 90, y: 10 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                transition={{ duration: 0.7, delay: currentDelay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotateY: 360, color: '#00E5FF', scale: 1.12, filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.8))' }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

// Floating components of the guitar
import bodyPart from '../assets/Group-1.png';
import neckPart from '../assets/Group-3.png';
import headstockPart from '../assets/Group-5.png';
import hardwarePart1 from '../assets/Group-6.png';
import hardwarePart2 from '../assets/Group-4.png';
import bridgePart from '../assets/Group-2.png';

// Fully assembled guitar
import assembledGuitar from '../assets/pngwing.com.png';

const HeroV2 = () => {
  const [assembled, setAssembled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const viewportRef = useRef(null);

  // Scroll parallax for camera zoom
  const { scrollY } = useScroll();
  const cameraZoom = useTransform(scrollY, [0, 600], [1, 1.45]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  // Track mouse coordinates for interactive parallax tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30; // degrees max tilt
      const y = (clientY / innerHeight - 0.5) * -30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trigger assembly complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 4000); // 4 seconds assembly sequence
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hv2-container" id="hero" ref={viewportRef}>
      {/* Volumetric Dark Space Layer */}
      <div className="hv2-space-fog" />
      <div className="hv2-nebula-clouds" />

      {/* Main Layout Grid */}
      <div className="hv2-grid">
        {/* Left: SpaceX / Apple Vision Pro style clean typography */}
        <motion.div 
          className="hv2-text-column"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Badge */}
          <motion.span
            className="hv2-tag"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            NEW FOR 2026: GALAXY TRB-3 INVADER CUSTOM SHOP GUITARS
          </motion.span>

          {/* Headline */}
          <h1 className="hv2-headline">
            <span className="hv2-welcome">Welcome To</span>
            <span className="hv2-main-title">
              <AnimatedText text="Galaxy Guitar" className="hv2-text-white" delayOffset={0.35} />
              <br />
              <AnimatedText text="Products USA." className="hv2-gradient-text" delayOffset={0.7} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hv2-subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Explore Our Website <br />
            Find Your Guitar <strong>Rock The World!</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hv2-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button className="hv2-btn-primary" onClick={() => handleScrollTo('guitars')}>
              <GuitarIcon size={16} />
              Explore The Collection
              <ArrowRight size={16} />
            </button>
            <button className="hv2-btn-secondary" onClick={() => handleScrollTo('protectors')}>
              <Shield size={16} />
              Discover Finger Protection
            </button>
          </motion.div>

          {/* Bottom Badges */}
          <motion.div
            className="hv2-bottom-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="hv2-badge-item">
              <div className="hv2-badge-circle"><Star size={15} style={{ color: '#00e5ff' }} /></div>
              <div className="hv2-badge-texts">
                <span className="hv2-badge-primary">30+ Years</span>
                <span className="hv2-badge-secondary">Of Excellence</span>
              </div>
            </div>
            <div className="hv2-badge-item">
              <div className="hv2-badge-circle"><Globe size={15} style={{ color: '#00e5ff' }} /></div>
              <div className="hv2-badge-texts">
                <span className="hv2-badge-primary">Worldwide</span>
                <span className="hv2-badge-secondary">Shipping</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Immersive Interactive Guitar Canvas */}
        <motion.div 
          className="hv2-viewport-side"
          style={{ scale: cameraZoom }}
        >
          {/* Orbital Space Geometry */}
          <div className="hv2-geometric-rings">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
          </div>
          <div className="hv2-assembly-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateX: mousePos.y * 0.3,
                rotateY: mousePos.x * 0.3,
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                rotateX: { type: 'spring', stiffness: 50, damping: 18 },
                rotateY: { type: 'spring', stiffness: 50, damping: 18 },
              }}
              className="assembled-guitar-wrap"
            >
              {/* ── BG Sphere Animation behind guitar ── */}
              <div className="sphere-bg">
                {/* Core glowing orb */}
                <div className="sphere-core" />
                {/* Outer halo ring */}
                <div className="sphere-halo" />
                {/* Slow rotating orbital band */}
                <div className="sphere-orbital" />
                {/* Second tilted orbital */}
                <div className="sphere-orbital sphere-orbital-2" />
                {/* Corona light burst */}
                <div className="sphere-corona" />
                {/* Orbiting dot particles */}
                <div className="sphere-particle sp-orb-1" />
                <div className="sphere-particle sp-orb-2" />
                <div className="sphere-particle sp-orb-3" />
              </div>

              {/* Main Guitar Image */}
              <img src={assembledGuitar} alt="Galaxy TRB-3 Invader Custom" className="guitar-hero-image" />
              <div className="guitar-ambient-glow" />

              {/* ── Dribbble-style floating info cards ── */}

              {/* Card 1: Frets — top-left */}
              <motion.div
                className="fcard fcard-tl"
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16,1,0.3,1] }}
              >
                <div className="fcard-icon">🎸</div>
                <div className="fcard-body">
                  <span className="fcard-value">24</span>
                  <span className="fcard-label">Frets</span>
                </div>
              </motion.div>

              {/* Card 2: Resonance — top-right */}
              <motion.div
                className="fcard fcard-tr"
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.16,1,0.3,1] }}
              >
                <div className="fcard-icon">🔊</div>
                <div className="fcard-body">
                  <span className="fcard-value">432<span className="fcard-unit">Hz</span></span>
                  <span className="fcard-label">Resonance</span>
                </div>
              </motion.div>

              {/* Card 3: Weight — bottom-left */}
              <motion.div
                className="fcard fcard-bl"
                initial={{ opacity: 0, x: -30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.16,1,0.3,1] }}
              >
                <div className="fcard-icon">⚡</div>
                <div className="fcard-body">
                  <span className="fcard-value">7.8<span className="fcard-unit">lbs</span></span>
                  <span className="fcard-label">Net Weight</span>
                </div>
              </motion.div>

              {/* Card 4: Custom Shop badge — bottom-right */}
              <motion.div
                className="fcard fcard-br fcard-wide"
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: [0.16,1,0.3,1] }}
              >
                <div className="fcard-avatar">✦</div>
                <div className="fcard-body">
                  <span className="fcard-value-sm">Custom Shop</span>
                  <span className="fcard-label">Hand-Built · USA</span>
                </div>
                <div className="fcard-status-dot" />
              </motion.div>
            </motion.div>
          </div>

            {/* Sparkles / Twinkling Star Telemetry */}
            <div className="stellar-twinklers">
              <span className="sparkle sp-1" />
              <span className="sparkle sp-2" />
              <span className="sparkle sp-3" />
            </div>
        </motion.div>
      </div>

      {/* Twinkling star layout in CSS */}
      <style>{`
        .hv2-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          padding: 8rem 4rem 4rem;
          box-sizing: border-box;
        }
        .hv2-space-fog {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(circle at 60% 50%, rgba(2, 2, 8, 0.4) 0%, rgba(0,0,0,0.9) 100%);
        }
        .hv2-nebula-clouds {
          position: absolute; inset: 0; z-index: 2; opacity: 0.25; pointer-events: none;
          background-image: 
            radial-gradient(circle at 75% 30%, rgba(0, 229, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 25% 70%, rgba(138, 43, 226, 0.04) 0%, transparent 50%);
          filter: blur(80px);
        }
        .hv2-grid {
          position: relative; z-index: 10;
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 4rem;
          width: 100%; max-width: 1300px; align-items: center;
          perspective: 1200px;
        }
        .hv2-text-column {
          display: flex; flex-direction: column; align-items: flex-start; text-align: left;
        }
        .hv2-tag {
          display: inline-block;
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          padding: 0.4rem 0.9rem; border-radius: 20px; margin-bottom: 1.8rem;
        }
        .hv2-headline {
          margin: 0 0 1.5rem 0; display: flex; flex-direction: column; gap: 0.2rem;
        }
        .hv2-welcome {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: clamp(1rem, 2.5vw, 1.4rem); font-weight: 300;
          color: rgba(255,255,255,0.6); letter-spacing: 0.15em;
        }
        .hv2-main-title {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: clamp(2.6rem, 6vw, 4.8rem); font-weight: 900;
          line-height: 1.05; letter-spacing: -0.01em;
        }
        .hv2-text-white { color: #ffffff; }
        .hv2-gradient-text {
          background: linear-gradient(to right, #00e5ff, #8a2be2, #00e5ff);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: hv2Shine 4s linear infinite;
          filter: drop-shadow(0 0 20px rgba(0,229,255,0.3));
        }
        @keyframes hv2Shine {
          to { background-position: 200% center; }
        }
        .hv2-subheading {
          font-size: 1rem; color: rgba(255,255,255,0.45); line-height: 1.75;
          margin: 0 0 2.5rem 0; max-width: 480px; font-weight: 300;
        }
        .hv2-subheading strong { color: #fff; font-weight: 700; }
        .hv2-actions {
          display: flex; gap: 1rem; align-items: center; margin-bottom: 2.5rem;
        }
        .hv2-bottom-badges {
          display: flex; gap: 2rem; align-items: center;
          border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1.8rem;
        }
        .hv2-badge-item {
          display: flex; align-items: center; gap: 0.7rem;
        }
        .hv2-badge-circle {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.02);
        }
        .hv2-badge-texts { display: flex; flex-direction: column; gap: 0.1rem; }
        .hv2-badge-primary {
          font-size: 0.8rem; font-weight: 700; color: #fff;
        }
        .hv2-badge-secondary {
          font-size: 0.68rem; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;
        }
        .hv2-btn-primary {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: #ffffff; color: #020208; border: none;
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em;
          padding: 0.95rem 1.75rem; border-radius: 4px; cursor: pointer;
          transition: all 0.3s ease;
        }
        .hv2-btn-primary:hover {
          background: #00e5ff; transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,229,255,0.3);
        }
        .hv2-btn-secondary {
          background: transparent; color: #ffffff;
          border: 1px solid rgba(255,255,255,0.15);
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em;
          padding: 0.95rem 1.75rem; border-radius: 4px; cursor: pointer;
          transition: all 0.3s ease;
        }
        .hv2-btn-secondary:hover {
          background: rgba(255,255,255,0.03); border-color: #ffffff;
        }
        
        .hv2-viewport-side {
          position: relative; display: flex; align-items: center; justify-content: center;
          height: 600px; transform-style: preserve-3d;
        }
        .hv2-geometric-rings {
          position: absolute; z-index: 1; pointer-events: none; transform: rotateX(65deg) rotateY(15deg);
        }
        .ring {
          position: absolute; top: 50%; left: 50%; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.02); transform: translate(-50%,-50%);
        }
        .ring-1 { width: 380px; height: 380px; border-color: rgba(255,255,255,0.03); }
        .ring-2 { width: 520px; height: 520px; border-style: dashed; }
        .ring-3 { width: 680px; height: 680px; }
        
        .hv2-assembly-wrapper {
          position: relative; width: 100%; height: 100%; display: flex;
          align-items: center; justify-content: center; transform-style: preserve-3d;
        }
        .assembly-group {
          position: relative; width: 100%; height: 100%; display: flex;
          align-items: center; justify-content: center;
        }
        .part {
          position: absolute; max-height: 480px; object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.85));
          pointer-events: none;
        }
        
        /* Assembled styling */
        .assembled-guitar-wrap {
          position: relative; display: flex; align-items: center; justify-content: center;
          transform-style: preserve-3d;
          animation: floatAssembled 8s ease-in-out infinite alternate;
        }
        @keyframes floatAssembled {
          0% { transform: translateY(0) rotate(12deg); }
          100% { transform: translateY(-20px) rotate(16deg); }
        }
        .guitar-hero-image {
          max-height: 520px; object-fit: contain;
          filter: drop-shadow(0 35px 50px rgba(0,0,0,0.9));
        }
        .guitar-ambient-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 80%; height: 80%; background: radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 60%);
          z-index: 4; pointer-events: none;
        }

        /* ── Background Sphere System ── */
        .sphere-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 380px; height: 380px;
          z-index: 0;
          pointer-events: none;
        }
        /* Core glowing ball */
        .sphere-core {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle at 38% 35%,
            rgba(0, 229, 255, 0.22) 0%,
            rgba(120, 40, 255, 0.14) 40%,
            rgba(0, 0, 20, 0.0) 70%
          );
          filter: blur(2px);
          animation: spherePulse 6s ease-in-out infinite alternate;
        }
        @keyframes spherePulse {
          0%   { transform: scale(0.92); opacity: 0.7; }
          100% { transform: scale(1.08); opacity: 1;   }
        }
        /* Outer soft halo */
        .sphere-halo {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%);
          filter: blur(20px);
          animation: haloBreath 8s ease-in-out infinite alternate;
        }
        @keyframes haloBreath {
          0%   { transform: scale(0.88); opacity: 0.5; }
          100% { transform: scale(1.12); opacity: 1;   }
        }
        /* Orbital band 1 — equatorial */
        .sphere-orbital {
          position: absolute; inset: 20px;
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 255, 0.2);
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.1), inset 0 0 10px rgba(0, 229, 255, 0.05);
          animation: orbitalSpin 12s linear infinite;
        }
        @keyframes orbitalSpin {
          from { transform: rotateZ(0deg) rotateX(70deg); }
          to   { transform: rotateZ(360deg) rotateX(70deg); }
        }
        /* Orbital band 2 — tilted */
        .sphere-orbital-2 {
          inset: 40px;
          border-color: rgba(138, 43, 226, 0.18);
          box-shadow: 0 0 8px rgba(138, 43, 226, 0.1);
          animation: orbitalSpin2 18s linear infinite reverse;
        }
        @keyframes orbitalSpin2 {
          from { transform: rotateZ(0deg) rotateX(30deg) rotateY(20deg); }
          to   { transform: rotateZ(360deg) rotateX(30deg) rotateY(20deg); }
        }
        /* Corona burst rays */
        .sphere-corona {
          position: absolute; inset: -60px;
          border-radius: 50%;
          background: conic-gradient(
            rgba(0,229,255,0.04) 0deg,
            transparent 30deg,
            rgba(0,229,255,0.06) 60deg,
            transparent 90deg,
            rgba(138,43,226,0.05) 150deg,
            transparent 180deg,
            rgba(0,229,255,0.04) 240deg,
            transparent 270deg,
            rgba(0,229,255,0.04) 330deg,
            transparent 360deg
          );
          filter: blur(8px);
          animation: coronaRotate 20s linear infinite;
        }
        @keyframes coronaRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        /* Orbiting particle dots */
        .sphere-particle {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 8px #00e5ff, 0 0 16px rgba(0,229,255,0.5);
          top: 50%; left: 50%;
          transform-origin: 0 0;
        }
        .sp-orb-1 {
          animation: orbitParticle1 5s linear infinite;
        }
        .sp-orb-2 {
          background: #8a2be2;
          box-shadow: 0 0 8px #8a2be2, 0 0 16px rgba(138,43,226,0.5);
          animation: orbitParticle2 8s linear infinite;
        }
        .sp-orb-3 {
          width: 4px; height: 4px;
          animation: orbitParticle3 11s linear infinite;
        }
        @keyframes orbitParticle1 {
          from { transform: rotate(0deg)   translateX(155px) scale(1); }
          to   { transform: rotate(360deg) translateX(155px) scale(1); }
        }
        @keyframes orbitParticle2 {
          from { transform: rotate(120deg)  translateX(130px); }
          to   { transform: rotate(480deg)  translateX(130px); }
        }
        @keyframes orbitParticle3 {
          from { transform: rotate(240deg)  translateX(170px); }
          to   { transform: rotate(600deg)  translateX(170px); }
        }
        .guitar-volumetric-flare {
          position: absolute; width: 150%; height: 150%;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 50%);
          z-index: -2; pointer-events: none;
        }

        /* ── Floating Info Cards (Dribbble / grizzy style) ── */
        .fcard {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1rem;
          border-radius: 14px;
          background: rgba(8, 8, 20, 0.55);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          white-space: nowrap;
          z-index: 20;
          cursor: default;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
          animation: fcardFloat 6s ease-in-out infinite alternate;
        }
        .fcard:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow:
            0 16px 48px rgba(0, 229, 255, 0.15),
            0 0 0 1px rgba(0, 229, 255, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        @keyframes fcardFloat {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-7px); }
        }
        /* Neon top-edge accent */
        .fcard::before {
          content: '';
          position: absolute;
          top: 0; left: 16px; right: 16px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent);
        }

        /* Card positions */
        .fcard-tl { top: 8%;  left: -8%;  animation-delay: 0s;    animation-duration: 7s; }
        .fcard-tr { top: 12%; right: -8%; animation-delay: 0.8s;  animation-duration: 6s; }
        .fcard-bl { bottom: 18%; left: -6%; animation-delay: 1.5s; animation-duration: 8s; }
        .fcard-br { bottom: 12%; right: -8%; animation-delay: 0.4s; animation-duration: 7.5s; }

        /* Icon circle */
        .fcard-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.1);
        }
        /* Star avatar for wide card */
        .fcard-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, #00e5ff 0%, #8a2be2 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; color: #fff; flex-shrink: 0;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.35);
        }
        /* Text block */
        .fcard-body {
          display: flex; flex-direction: column; gap: 0.05rem;
        }
        .fcard-value {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 1.1rem; font-weight: 800; color: #ffffff;
          line-height: 1.1;
        }
        .fcard-value-sm {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.78rem; font-weight: 700; color: #ffffff;
          line-height: 1.2;
        }
        .fcard-unit {
          font-size: 0.6rem; font-weight: 600;
          color: rgba(255,255,255,0.45); margin-left: 2px;
        }
        .fcard-label {
          font-size: 0.62rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }
        /* Live-status dot */
        .fcard-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #00e5ff; margin-left: auto; flex-shrink: 0;
          box-shadow: 0 0 6px #00e5ff;
          animation: statusPulse 2s ease-in-out infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }
        /* Wide variant */
        .fcard-wide { min-width: 155px; }

        /* Particle systems */
        .stellar-twinklers {
          position: absolute; inset: 0; pointer-events: none;
        }
        .sparkle {
          position: absolute; width: 2px; height: 2px; background: #fff; border-radius: 50%;
          animation: twinkle 4s infinite ease-in-out; opacity: 0.5;
        }
        .sp-1 { top: 20%; left: 30%; animation-delay: 0.5s; }
        .sp-2 { top: 70%; left: 80%; animation-delay: 1.5s; }
        .sp-3 { top: 40%; left: 10%; animation-delay: 2.5s; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @media (max-width: 1024px) {
          .hv2-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .hv2-text-column { align-items: center; }
          .hv2-actions { justify-content: center; }
          .hv2-viewport-side { height: 420px; }
          .guitar-hero-image { max-height: 380px; }
        }
        @media (max-width: 768px) {
          .hv2-container { padding: 6rem 2rem 2rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroV2;
