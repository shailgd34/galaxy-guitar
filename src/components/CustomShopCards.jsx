import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Eye, Sparkles } from 'lucide-react';
import alienHead from '../assets/Alien.jpg';
import honeyHeadstock from '../assets/TRB-3 Invader Honey Burst Headstock.jpg';
import purpleBurstBody from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';
import purpleHeadstock from '../assets/TRB-3 Invader Sample.jpg';
import fingerProtector from '../assets/GalaxyFT-1FingerProtectors.jpg';

const CustomShopCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: honeyHeadstock,
      title: "Galaxy TRB-3 Invader",
      subtitle: "HONEY BURST EDITION",
      tag: "NEW FOR 2026",
      specs: [
        "24 hand-polished frets",
        "Chrome locking Galaxy tuners",
        "Compound radius maple neck"
      ],
      desc: "Featuring a custom pearloid logo, body-color headstock finish, and high-gain custom humbuckers."
    },
    {
      id: 2,
      image: purpleBurstBody,
      title: "TRB-3 Pre-Order List",
      subtitle: "CUSTOM CONFIGURATION",
      tag: "RESERVATIONS OPEN",
      specs: [
        "Hand-selected maple top",
        "Custom pickup configuration",
        "Certificate of authenticity"
      ],
      desc: "Reserve your slot for the upcoming 2026 run of custom shop invaders with bespoke hardware selections."
    },
    {
      id: 3,
      image: purpleHeadstock,
      title: "Raptor Headstock Shop",
      subtitle: "REVERSE INLAY SPECS",
      tag: "LIMITED EDITION",
      specs: [
        "Reversed alien headstock",
        "Pearloid logo signature",
        "Zero-friction graph tech nut"
      ],
      desc: "Exclusive design featuring our signature reverse headstock geometry built for optimal string tension."
    },
    {
      id: 4,
      image: fingerProtector,
      title: "Biomechanical Protectors",
      subtitle: "FINGER EXTENSION SYSTEMS",
      tag: "PATENTED DESIGN",
      specs: [
        "Orthopedic-grade components",
        "Custom length calibration",
        "Instant playability restore"
      ],
      desc: "Calibrated finger tip extensions designed to resolve missing finger lengths and enhance guitar playing."
    }
  ];

  return (
    <section id="custom-shop-grid" className="shop-cards-sec">
      {/* Decorative background grid */}
      <div className="shop-bg-grid-lines" />
      <div className="shop-ambient-glow-purple" />
      <div className="shop-ambient-glow-cyan" />

      <div className="shop-cards-container">
        
        {/* ================= ULTRA MODERN HEADER ================= */}
        <div className="shop-main-header">
          
          {/* Holographic Alien Logo */}
          <div className="holo-alien-container">
            <div className="holo-ring ring-1" />
            <div className="holo-ring ring-2" />
            <div className="holo-avatar-frame">
              <img src={alienHead} alt="Galaxy Logo" className="holo-alien-img" />
            </div>
            <span className="holo-status-tag">
              <span className="pulse-dot-green" /> ALIEN PROJECTOR ACTIVE
            </span>
          </div>

          {/* Luxury Floating CTA Panel */}
          <div className="luxury-cta-panel">
            <span className="cta-meta-text">Galaxy USA Custom Shop Directory // 2026</span>
            <a 
              href="#guitars" 
              className="premium-glow-btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('guitars')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>EXPLORE CUSTOM SHOP</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* ================= 2x2 LUXURY COSMIC CARDS GRID ================= */}
        <div className="premium-cards-grid">
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              className={`galaxy-product-card ${hoveredCard === card.id ? 'card-hovered' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: card.id * 0.1 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Frame Container */}
              <div className="product-card-media-wrapper">
                <img src={card.image} alt={card.title} className="product-card-img" />
                <div className="product-media-gradient-overlay" />
                
                {/* Floating Top Tag */}
                <div className="product-card-floating-tag">
                  <Sparkles size={11} className="tag-icon-sparkle" />
                  <span>{card.tag}</span>
                </div>

                {/* Cyber HUD Specs Grid Overlay */}
                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <motion.div 
                      className="hud-specs-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="hud-specs-content">
                        <span className="hud-specs-header">
                          <Cpu size={12} /> TELEMETRY SPECIFICATIONS
                        </span>
                        <ul className="hud-specs-list">
                          {card.specs.map((spec, sIdx) => (
                            <li key={sIdx}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Info / Text */}
              <div className="product-card-info">
                <div className="product-info-header">
                  <span className="product-card-subtitle">{card.subtitle}</span>
                  <div className="info-header-line" />
                </div>

                <h3 className="product-card-title">{card.title}</h3>
                
                <p className="product-card-description">{card.desc}</p>
                
                <div className="product-card-action-bar">
                  <span className="learn-more-link">
                    <span>VIEW DETAILS</span>
                    <Eye size={13} className="eye-icon-transition" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .shop-cards-sec {
          position: relative;
          padding: 4.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          z-index: 6;
          overflow: hidden;
        }

        /* Ambient Cosmic Backlights */
        .shop-bg-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 229, 255, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.012) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center center;
          pointer-events: none;
          z-index: 1;
        }
        .shop-ambient-glow-purple {
          position: absolute;
          top: 15%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .shop-ambient-glow-cyan {
          position: absolute;
          bottom: 10%;
          left: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .shop-cards-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
          z-index: 10;
        }

        /* Modernized Header with Holographic Projection Alien */
        .shop-main-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 5.5rem;
          text-align: center;
        }

        .holo-alien-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .holo-avatar-frame {
          position: relative;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px solid rgba(0, 229, 255, 0.45);
          overflow: hidden;
          background: rgba(3, 7, 18, 0.8);
          box-shadow: 
            0 0 25px rgba(0, 229, 255, 0.35),
            inset 0 0 15px rgba(0, 229, 255, 0.2);
          z-index: 5;
        }
        .holo-alien-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.4)) contrast(1.1);
        }

        /* Pulsing holographic rings behind alien logo */
        .holo-ring {
          position: absolute;
          top: 42px;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 255, 0.25);
          pointer-events: none;
          z-index: 1;
        }
        .ring-1 {
          width: 120px;
          height: 120px;
          animation: holoWave 3s infinite linear;
        }
        .ring-2 {
          width: 160px;
          height: 160px;
          animation: holoWave 4s infinite linear;
        }
        .holo-status-tag {
          margin-top: 1rem;
          font-size: 0.65rem;
          color: rgba(0, 229, 255, 0.85);
          font-weight: 700;
          letter-spacing: 0.15em;
          font-family: var(--font-display);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 229, 255, 0.05);
          padding: 0.35rem 0.85rem;
          border-radius: 30px;
          border: 1px solid rgba(0, 229, 255, 0.15);
        }
        .pulse-dot-green {
          width: 5px;
          height: 5px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 6px #10b981;
          animation: statusDotPulse 1.5s infinite;
        }

        .luxury-cta-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }
        .cta-meta-text {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: var(--font-display);
        }

        /* Premium Luxury Custom Shop Glassmorphic Button */
        .premium-glow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1.5px solid rgba(0, 229, 255, 0.25);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.85rem;
          font-family: var(--font-display);
          letter-spacing: 0.1em;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.05);
        }
        .premium-glow-btn:hover {
          background: rgba(0, 229, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.6);
          box-shadow: 
            0 0 25px rgba(0, 229, 255, 0.25),
            inset 0 0 8px rgba(0, 229, 255, 0.15);
          transform: translateY(-2px);
        }

        /* 2x2 Modern Luxury Grid */
        .premium-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
        }

        .galaxy-product-card {
          position: relative;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .galaxy-product-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 40%, rgba(0,229,255,0.05) 70%, rgba(139,92,246,0.08));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .galaxy-product-card:hover {
          border-color: rgba(0, 229, 255, 0.18);
          box-shadow: 
            0 20px 45px rgba(0, 0, 0, 0.6),
            0 0 25px rgba(0, 229, 255, 0.05);
        }

        /* Image Display Media Box */
        .product-card-media-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          background: rgba(3, 7, 18, 0.45);
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .galaxy-product-card:hover .product-card-img {
          transform: scale(1.04);
        }
        .product-media-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(3,7,18,0.85) 0%, rgba(3,7,18,0) 60%);
        }

        /* Cyber/Holo Top Tag */
        .product-card-floating-tag {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.35);
          color: var(--accent-cyan);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-family: var(--font-display);
          padding: 0.35rem 0.75rem;
          border-radius: 30px;
          backdrop-filter: blur(8px);
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        /* Cyber HUD specs overlay */
        .hud-specs-overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 7, 18, 0.92);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          padding: 2.25rem;
          z-index: 8;
        }
        .hud-specs-content {
          width: 100%;
          text-align: left;
        }
        .hud-specs-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.15em;
          font-family: var(--font-display);
          margin-bottom: 1.2rem;
        }
        .hud-specs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .hud-specs-list li {
          font-size: 0.8rem;
          color: #d1d5db;
          position: relative;
          padding-left: 1.1rem;
          font-family: var(--font-sans);
          line-height: 1.4;
        }
        .hud-specs-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        /* Text details block */
        .product-card-info {
          padding: 2.25rem;
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .product-info-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }
        .product-card-subtitle {
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.18em;
          font-family: var(--font-display);
        }
        .info-header-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), transparent);
        }

        .product-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-display);
          margin: 0 0 0.8rem 0;
          letter-spacing: 0.02em;
        }

        .product-card-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 1.6rem 0;
          font-weight: 400;
        }

        .product-card-action-bar {
          display: flex;
          justify-content: flex-start;
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.1em;
          font-family: var(--font-display);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .eye-icon-transition {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .galaxy-product-card:hover .learn-more-link {
          color: #ffffff;
        }
        .galaxy-product-card:hover .eye-icon-transition {
          transform: translateX(4px);
        }

        @keyframes holoWave {
          0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0; }
          40% { opacity: 0.35; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }
        @keyframes statusDotPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }

        @media (max-width: 991px) {
          .shop-cards-container { padding: 0 2rem; }
          .premium-cards-grid { grid-template-columns: 1fr; gap: 2rem; }
          .product-card-media-wrapper { height: 240px; }
          .shop-main-header { margin-bottom: 3rem; }
        }
        @media (max-width: 576px) {
          .shop-cards-container { padding: 0 1rem; }
          .product-card-info { padding: 1.5rem; }
          .product-card-media-wrapper { height: 200px; }
          .product-card-title { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default CustomShopCards;
