import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';
import protectorsImg from '../assets/GalaxyFT-1FingerProtectors.jpg';
import extenderImg from '../assets/Galaxy_FT-1_Ultra_ Extender.jpg';
import extensionXL from '../assets/Galaxy Guitar FT-1 XL Finger Extension3.jpg';

const tabs = [
  {
    key: 'musician',
    icon: Zap,
    label: 'Musicians',
    category: 'Play Without Pain',
    title: 'FT-1 Tactical Finger Sleeves',
    desc: "Made for guitar players who want to play without finger pain. Protects your skin from steel strings while keeping your guitar's natural tone and slide feel.",
    image: protectorsImg,
    stats: [
      { label: 'Sound Quality', value: '100%' },
      { label: 'Real Touch Feel', value: '98%' },
      { label: 'Thickness', value: '0.2mm' },
    ],
  },
  {
    key: 'medical',
    icon: Shield,
    label: 'Medical',
    category: 'Medical Support',
    title: 'Comfort Finger Protectors',
    desc: 'Custom-made shapes designed for doctors, physical therapists, and skin patients. Supports your finger joints and helps you perform regular daily tasks.',
    image: extenderImg,
    stats: [
      { label: 'Joint Support', value: 'Excellent' },
      { label: 'Skin Safe', value: '100%' },
      { label: 'Flexibility', value: 'High' },
    ],
  },
  {
    key: 'prosthetic',
    icon: Target,
    label: 'Extensions',
    category: 'Custom Extensions',
    title: 'Extender XL Finger Extensions',
    desc: 'The only custom guitar finger extensions in the world. Made with prosthetic clinics to give you the exact reach you need.',
    image: extensionXL,
    stats: [
      { label: 'Extra Reach', value: '+1.5cm' },
      { label: 'Press Power', value: '100%' },
      { label: 'Build Quality', value: 'Premium' },
    ],
  },
];

const UspsV2 = () => {
  const [activeTab, setActiveTab] = useState('musician');
  const current = tabs.find((t) => t.key === activeTab);

  return (
    <section className="uv2-section" id="protectors">
      <div className="uv2-bg" />
      <div className="uv2-stars" />

      <div className="uv2-wrapper">
        <motion.div
          className="uv2-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="uv2-label">FINGER PROTECTION</span>
          <h2 className="uv2-title">
            Engineered For <span className="uv2-accent">Every Player</span>
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <div className="uv2-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`uv2-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="uv2-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="uv2-content-img">
              <img src={current.image} alt={current.title} />
              <div className="uv2-img-glow" />
            </div>
            <div className="uv2-content-text">
              <span className="uv2-cat">{current.category}</span>
              <h3 className="uv2-content-title">{current.title}</h3>
              <p className="uv2-content-desc">{current.desc}</p>
              <div className="uv2-stats">
                {current.stats.map((s, i) => (
                  <div key={i} className="uv2-stat">
                    <span className="uv2-stat-val">{s.value}</span>
                    <span className="uv2-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .uv2-section {
          position: relative; padding: 8rem 2rem; overflow: hidden; background: transparent; isolation: isolate;
        }
        .uv2-bg {
          position: absolute; inset: 0; z-index: -3;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 70%);
        }
        .uv2-stars {
          position: absolute; inset: 0; z-index: -2;
          background-image: 
            radial-gradient(1px 1px at 80px 120px, rgba(255,255,255,0.35), transparent),
            radial-gradient(1px 1px at 240px 180px, rgba(255,255,255,0.3), transparent);
          background-size: 280px 280px;
        }
        .uv2-wrapper { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .uv2-header { text-align: center; margin-bottom: 3rem; }
        .uv2-label {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3);
        }
        .uv2-title {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: clamp(2rem,4vw,3.25rem); font-weight: 800; color: #fff;
          margin: 0.5rem 0;
        }
        .uv2-accent {
          color: #00e5ff;
        }
        .uv2-tabs {
          display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 4rem;
        }
        .uv2-tab {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 1.4rem; border-radius: 4px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.5); font-size: 0.8rem; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
        }
        .uv2-tab.active {
          background: rgba(255,255,255,0.05);
          border-color: #00e5ff; color: #00e5ff;
        }
        .uv2-tab:hover:not(.active) {
          border-color: rgba(255,255,255,0.15); color: #fff;
        }
        .uv2-content {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .uv2-content-img {
          position: relative; border-radius: 8px; overflow: hidden;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .uv2-content-img img {
          width: 100%; height: 360px; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .uv2-content-img:hover img { transform: scale(1.03); }
        .uv2-img-glow {
          position: absolute; bottom: 0; left: 0; right: 0; height: 30%;
          background: linear-gradient(to top, rgba(2,2,8,0.8), transparent);
          pointer-events: none;
        }
        .uv2-cat {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.4);
        }
        .uv2-content-title {
          font-size: 1.6rem; font-weight: 800; color: #fff;
          margin: 0.5rem 0 1rem;
        }
        .uv2-content-desc {
          font-size: 0.92rem; color: rgba(255,255,255,0.45); line-height: 1.7;
          margin-bottom: 2rem; font-weight: 300;
        }
        .uv2-stats {
          display: flex; gap: 2rem;
        }
        .uv2-stat {
          display: flex; flex-direction: column; gap: 0.2rem;
        }
        .uv2-stat-val {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 1.3rem; font-weight: 800; color: #fff;
        }
        .uv2-stat-lbl {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.05em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
        }
        @media (max-width: 768px) {
          .uv2-content { grid-template-columns: 1fr; gap: 2rem; }
          .uv2-tabs { flex-wrap: wrap; }
          .uv2-content-img img { height: 260px; }
        }
      `}</style>
    </section>
  );
};

export default UspsV2;
