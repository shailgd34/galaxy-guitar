import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import honeyHeadstock from '../assets/TRB-3 Invader Honey Burst Headstock.jpg';
import purpleBurstBody from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';
import purpleHeadstock from '../assets/TRB-3 Invader Sample.jpg';
import fingerProtector from '../assets/GalaxyFT-1FingerProtectors.jpg';

const cards = [
  {
    image: honeyHeadstock,
    title: "Galaxy TRB-3 Invader",
    subtitle: "HONEY BURST EDITION",
    tag: "NEW 2026",
    specs: ["24 hand-polished frets", "Chrome locking tuners", "Compound radius maple neck"],
  },
  {
    image: purpleBurstBody,
    title: "TRB-3 Pre-Order",
    subtitle: "CUSTOM CONFIGURATION",
    tag: "RESERVATIONS",
    specs: ["Hand-selected maple top", "Custom pickup config", "Certificate of authenticity"],
  },
  {
    image: purpleHeadstock,
    title: "Raptor Headstock",
    subtitle: "REVERSE INLAY SPECS",
    tag: "LIMITED",
    specs: ["Reversed alien headstock", "Pearloid logo signature", "Graph tech nut"],
  },
  {
    image: fingerProtector,
    title: "Finger Protectors",
    subtitle: "BIOMECHANICAL SYSTEM",
    tag: "PATENTED",
    specs: ["Orthopedic-grade", "Custom calibration", "Instant playability"],
  },
];

const CustomShopCardsV2 = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="csv2-section" id="guitars">
      <div className="csv2-bg" />
      <div className="csv2-stars" />

      <div className="csv2-wrapper">
        <motion.div
          className="csv2-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="csv2-label">CUSTOM SHOP</span>
          <h2 className="csv2-title">
            The <span className="csv2-accent">Collection</span>
          </h2>
          <p className="csv2-desc">Handcrafted instruments engineered for the world's most demanding players.</p>
        </motion.div>

        <div className="csv2-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`csv2-card ${hovered === i ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="csv2-card-img-wrap">
                <img src={card.image} alt={card.title} />
                <div className="csv2-card-overlay">
                  <Eye size={18} />
                  <span>INSPECT SPECS</span>
                </div>
                <span className="csv2-card-tag">{card.tag}</span>
              </div>
              <div className="csv2-card-body">
                <span className="csv2-card-sub">{card.subtitle}</span>
                <h3 className="csv2-card-title">{card.title}</h3>
                <ul className="csv2-card-specs">
                  {card.specs.map((s, j) => (
                    <li key={j}><span className="spec-dot" />{s}</li>
                  ))}
                </ul>
                <button className="csv2-card-btn">
                  Specifications <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .csv2-section {
          position: relative; padding: 5rem 2rem; overflow: hidden; background: transparent; isolation: isolate;
        }
        .csv2-bg {
          position: absolute; inset: 0; z-index: -3;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 80%);
        }
        .csv2-stars {
          position: absolute; inset: 0; z-index: -2;
          background-image: 
            radial-gradient(1px 1px at 30px 40px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1.5px 1.5px at 150px 100px, rgba(255,255,255,0.35), transparent);
          background-size: 260px 260px;
        }
        .csv2-wrapper { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .csv2-header { text-align: center; margin-bottom: 3.5rem; }
        .csv2-label {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3);
        }
        .csv2-title {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: clamp(2rem,4vw,3.5rem); font-weight: 800; color: #fff;
          margin: 0.5rem 0 1rem;
        }
        .csv2-accent {
          color: #00e5ff;
        }
        .csv2-desc {
          font-size: 0.95rem; color: rgba(255,255,255,0.4); max-width: 500px; margin: 0 auto; font-weight: 300;
        }
        .csv2-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem;
        }
        .csv2-card {
          border-radius: 8px; overflow: hidden;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .csv2-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .csv2-card-img-wrap {
          position: relative; overflow: hidden; height: 210px; background: #04040c;
        }
        .csv2-card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;
        }
        .csv2-card:hover .csv2-card-img-wrap img {
          transform: scale(1.05);
        }
        .csv2-card-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem;
          color: #fff; font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.15em;
          opacity: 0; transition: opacity 0.4s ease; background: rgba(2,2,8,0.7);
        }
        .csv2-card:hover .csv2-card-overlay { opacity: 1; }
        .csv2-card-tag {
          position: absolute; top: 12px; left: 12px;
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.55rem; font-weight: 800; letter-spacing: 0.1em;
          padding: 0.25rem 0.5rem; border-radius: 2px;
          background: rgba(255,255,255,0.05); color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .csv2-card-body { padding: 1.5rem; }
        .csv2-card-sub {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);
        }
        .csv2-card-title {
          font-size: 1.05rem; font-weight: 700; color: #fff; margin: 0.4rem 0 0.8rem;
        }
        .csv2-card-specs { list-style: none; padding: 0; margin: 0 0 1.2rem; }
        .csv2-card-specs li {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; color: rgba(255,255,255,0.4); padding: 0.25rem 0;
        }
        .spec-dot {
          width: 3px; height: 3px; border-radius: 50%; background: #00e5ff; flex-shrink: 0;
        }
        .csv2-card-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600;
          padding: 0.45rem 0.9rem; border-radius: 4px; cursor: pointer;
          transition: all 0.3s ease;
        }
        .csv2-card-btn:hover {
          border-color: #00e5ff; color: #00e5ff;
        }
        @media (max-width: 1024px) {
          .csv2-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .csv2-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default CustomShopCardsV2;
