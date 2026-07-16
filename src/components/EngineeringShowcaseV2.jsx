import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Guitar part images
import g1 from '../assets/Group-1.png';
import g2 from '../assets/Group-2.png';
import g3 from '../assets/Group-3.png';
import g4 from '../assets/Group-4.png';
import g5 from '../assets/Group-5.png';
import g6 from '../assets/Group-6.png';

/* ─── Model Config Data ─── */
const guitarModels = [
  {
    id: 'blue',
    name: 'Caribbean Blue',
    accentColor: '#00e5ff',
    filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    partsSpecs: {
      body: [
        { k: 'Wood',      v: 'Alder / Flamed Maple Top' },
        { k: 'Finish',    v: 'Hand-Sprayed Blue Nitro' },
        { k: 'Weight',    v: '7.8 lbs / 3.5 kg' },
        { k: 'Thickness', v: '44mm standard contour' },
      ],
      neck: [
        { k: 'Profile',  v: 'Thin-C Modern Asymmetric' },
        { k: 'Scale',    v: '25.5" (647.7mm)' },
        { k: 'Frets',    v: '24 Medium-Jumbo Stainless' },
        { k: 'Radius',   v: '12"–16" Compound' },
      ],
      headstock: [
        { k: 'Type',     v: 'Locking Precision Tuners' },
        { k: 'Ratio',    v: '18:1 Fine-Tune Ratio' },
        { k: 'Material', v: 'Chrome-Plated Zinc' },
        { k: 'String',   v: 'Lock at nut, zero slip' },
      ],
      pickups: [
        { k: 'Config',   v: 'HH — Dual Humbucker' },
        { k: 'Output',   v: 'High-output ceramic' },
        { k: 'Coil',     v: 'Split-coil switching' },
        { k: 'DC Res.',  v: 'Bridge 15.4kΩ / Neck 8.2kΩ' },
      ],
      electronics: [
        { k: 'Controls', v: '1 Vol · 1 Tone · 5-Way' },
        { k: 'Pots',     v: '500kΩ CTS Audio Taper' },
        { k: 'Cap',      v: '0.022μF Orange Drop' },
        { k: 'Jack',     v: 'Switchcraft End-Pin' },
      ],
      bridge: [
        { k: 'Type',     v: 'Fixed Hardtail — 6-Saddle' },
        { k: 'Material', v: 'Aircraft-Grade Zinc Alloy' },
        { k: 'Saddles',  v: 'Individual Intonation' },
        { k: 'Sustain',  v: 'Plate-thru string loading' },
      ],
    }
  },
  {
    id: 'purple',
    name: 'Cosmic Purple',
    accentColor: '#e040fb',
    filter: 'hue-rotate(55deg) saturate(1.4) brightness(1.05)',
    partsSpecs: {
      body: [
        { k: 'Wood',      v: 'Nebula Alder / Ebony Veneer' },
        { k: 'Finish',    v: 'Cosmic Purple Burst Lacquer' },
        { k: 'Weight',    v: '7.7 lbs / 3.49 kg' },
        { k: 'Thickness', v: '44mm custom profile' },
      ],
      neck: [
        { k: 'Profile',  v: 'Ultra-Thin Custom U-Shape' },
        { k: 'Scale',    v: '25.5" (647.7mm)' },
        { k: 'Frets',    v: '24 Extra-Jumbo Jescar EVO' },
        { k: 'Radius',   v: '14" Constant Radius' },
      ],
      headstock: [
        { k: 'Type',     v: 'Hipshot Grip-Lock Tuners' },
        { k: 'Ratio',    v: '21:1 High Ratio' },
        { k: 'Material', v: 'Anodized Black Aluminum' },
        { k: 'String',   v: 'Staggered posts for tension' },
      ],
      pickups: [
        { k: 'Config',   v: 'HH — Passive Custom Shop' },
        { k: 'Output',   v: 'Medium-Hot Alnico V Humbuckers' },
        { k: 'Coil',     v: 'Push-Pull coil split' },
        { k: 'DC Res.',  v: 'Bridge 14.2kΩ / Neck 7.8kΩ' },
      ],
      electronics: [
        { k: 'Controls', v: '1 Vol · 1 Tone · 3-Way Blade' },
        { k: 'Pots',     v: '500k Bourns Low-Friction' },
        { k: 'Cap',      v: '0.047μF Paper-in-Oil Cap' },
        { k: 'Jack',     v: 'Pure Tone Multi-Contact' },
      ],
      bridge: [
        { k: 'Type',     v: 'Hipshot Hardtail Bridge' },
        { k: 'Material', v: 'Solid Brass Baseplate' },
        { k: 'Saddles',  v: 'Stainless Steel Saddles' },
        { k: 'Sustain',  v: 'High-density coupling' },
      ],
    }
  },
  {
    id: 'sunburst',
    name: 'Sunburst Gold',
    accentColor: '#ff9e00',
    filter: 'hue-rotate(215deg) saturate(1.2) brightness(0.95)',
    partsSpecs: {
      body: [
        { k: 'Wood',      v: 'Classic Ash / Flamed Maple Top' },
        { k: 'Finish',    v: 'Sunburst Gold Lacquer' },
        { k: 'Weight',    v: '7.9 lbs / 3.58 kg' },
        { k: 'Thickness', v: '44.5mm vintage profile' },
      ],
      neck: [
        { k: 'Profile',  v: 'Vintage-C Radius Neck' },
        { k: 'Scale',    v: '25.5" (647.7mm)' },
        { k: 'Frets',    v: '24 Vintage Tall Nickel' },
        { k: 'Radius',   v: '9.5"–12" Compound' },
      ],
      headstock: [
        { k: 'Type',     v: 'Gotoh SG381 Locking Tuners' },
        { k: 'Ratio',    v: '16:1 Fine Tune' },
        { k: 'Material', v: 'Aged Brass / Gold Hardware' },
        { k: 'String',   v: 'Bone nut, high-friction wrap' },
      ],
      pickups: [
        { k: 'Config',   v: 'HH — Vintage-Hot Humbuckers' },
        { k: 'Output',   v: 'Warm, punchy classic voice' },
        { k: 'Coil',     v: 'Independent series wiring' },
        { k: 'DC Res.',  v: 'Bridge 12.8kΩ / Neck 7.2kΩ' },
      ],
      electronics: [
        { k: 'Controls', v: '2 Vol · 2 Tone · 3-Way Toggle' },
        { k: 'Pots',     v: '500k Vintage Dimarzio Pots' },
        { k: 'Cap',      v: '0.022μF Ceramic Disc' },
        { k: 'Jack',     v: 'Standard Neutrik Mono' },
      ],
      bridge: [
        { k: 'Type',     v: 'Gotoh Custom Tune-O-Matic' },
        { k: 'Material', v: 'Zinc Alloy / Gold Finish' },
        { k: 'Saddles',  v: 'Individually adjustable saddles' },
        { k: 'Sustain',  v: 'Stopbar tailpiece sustain' },
      ],
    }
  }
];

const partsBase = [
  { id: 'body',        label: 'Body',        img: g1, explodeX: 0,   explodeY: 40,   baseRotate: 12, zIndex: 1, coord: { x: '56%', y: '58%' } },
  { id: 'neck',        label: 'Neck',        img: g3, explodeX: 0,   explodeY: -50,  baseRotate: 12, zIndex: 2, coord: { x: '52%', y: '22%' } },
  { id: 'headstock',   label: 'Tuners',      img: g5, explodeX: 0,   explodeY: -120, baseRotate: 12, zIndex: 3, coord: { x: '55%', y: '5%' } },
  { id: 'pickups',     label: 'Pickups',     img: g6, explodeX: -60, explodeY: 0,    baseRotate: 12, zIndex: 4, coord: { x: '14%', y: '42%' } },
  { id: 'electronics', label: 'Electronics', img: g4, explodeX: 60,  explodeY: 0,    baseRotate: 12, zIndex: 5, coord: { x: '82%', y: '60%' } },
  { id: 'bridge',      label: 'Bridge',      img: g2, explodeX: 0,   explodeY: 80,   baseRotate: 12, zIndex: 6, coord: { x: '52%', y: '88%' } },
];

/* ─── Crosshair label dot ─── */
const SpecDot = ({ part, active, onEnter, onLeave }) => (
  <motion.div
    className={`eng-dot ${active ? 'eng-dot--active' : ''}`}
    style={{ left: part.coord.x, top: part.coord.y }}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.4 }}
  >
    <div className="eng-dot-ring" />
    <div className="eng-dot-core" />
    <div className="eng-dot-label">{part.label}</div>
  </motion.div>
);

const EngineeringShowcaseV2 = () => {
  const [activeModelIdx, setActiveModelIdx] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [exploded, setExploded] = useState(false);
  const [cycleIdx, setCycleIdx] = useState(0);

  // Auto cycle every 3 seconds if user is not hovering
  useEffect(() => {
    if (hoveredId !== null) return;
    const interval = setInterval(() => {
      setCycleIdx((prev) => (prev + 1) % partsBase.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredId]);

  const activeModel = guitarModels[activeModelIdx];
  const activeId = hoveredId !== null ? hoveredId : partsBase[cycleIdx].id;
  const activePart = partsBase.find(p => p.id === activeId);
  const activeSpecs = activePart ? activeModel.partsSpecs[activePart.id] : null;

  return (
    <section className="eng-section" id="engineering">

      {/* Blueprint grid background */}
      <div className="eng-blueprint-grid" />
      {/* Scan lines */}
      <div className="eng-scanlines" />
      
      {/* Dynamic Backlight matching the active guitar's color */}
      <div 
        className="eng-lab-glow-1" 
        style={{ background: `radial-gradient(circle, ${activeModel.accentColor}10 0%, transparent 70%)` }}
      />
      <div className="eng-lab-glow-2" />

      <div className="eng-inner">

        {/* ── Header ── */}
        <motion.div
          className="eng-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="eng-eyebrow">PRECISION ENGINEERING</span>
          
          <h2 className="eng-title">
            Anatomy of a<br />
            <span className="eng-title-accent" style={{ textShadow: `0 0 30px ${activeModel.accentColor}50` }}>
              {activeModel.name}
            </span>
          </h2>
          
          <p className="eng-subtitle">
            Select a configuration and hover each component to inspect its specifications.
          </p>

          {/* Configuration Selector Tabs + Explode Control */}
          <div className="eng-control-bar">
            <div className="eng-model-tabs">
              {guitarModels.map((model, idx) => (
                <button
                  key={model.id}
                  className={`eng-model-tab ${activeModelIdx === idx ? 'active' : ''}`}
                  style={activeModelIdx === idx ? { '--active-accent': model.accentColor, color: model.accentColor, borderColor: model.accentColor } : {}}
                  onClick={() => {
                    setActiveModelIdx(idx);
                    setHoveredId(null);
                  }}
                >
                  {model.name}
                </button>
              ))}
            </div>

            <button
              className={`eng-toggle-btn ${exploded ? 'eng-toggle-btn--active' : ''}`}
              onClick={() => setExploded(v => !v)}
              style={exploded ? { color: activeModel.accentColor, borderColor: activeModel.accentColor } : {}}
            >
              <span className="eng-toggle-icon">{exploded ? '⊙' : '⊕'}</span>
              {exploded ? 'Reassemble' : 'Exploded View'}
            </button>
          </div>
        </motion.div>

        {/* ── Main Stage ── */}
        <div className="eng-stage">

          {/* Blueprint corner markers */}
          <div className="eng-corner eng-corner-tl" />
          <div className="eng-corner eng-corner-tr" />
          <div className="eng-corner eng-corner-bl" />
          <div className="eng-corner eng-corner-br" />

          {/* Measurement lines */}
          <div className="eng-measure-h" />
          <div className="eng-measure-v" />

          {/* ── Parts layer ── */}
          <div className="eng-parts-canvas">
            {partsBase.map((part, i) => {
              const isActive = part.id === activeId;
              return (
                <motion.div
                  key={part.id}
                  className={`eng-part ${isActive ? 'eng-part--hovered' : 'eng-part--dimmed'}`}
                  style={{ zIndex: part.zIndex }}
                  animate={exploded
                    ? { 
                        x: part.explodeX * 1.4, 
                        y: part.explodeY * 1.4, 
                        rotate: part.baseRotate + part.explodeX * 0.06,
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1.08 : 0.95
                      }
                    : { 
                        x: 0, 
                        y: 0, 
                        rotate: part.baseRotate,
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1.05 : 0.96
                      }
                  }
                  transition={{ type: 'spring', stiffness: 60, damping: 16, delay: i * 0.04 }}
                  onMouseEnter={() => setHoveredId(part.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.img
                    src={part.img}
                    alt={part.label}
                    className="eng-part-img"
                    style={{ 
                      filter: `${activeModel.filter} drop-shadow(0 20px 40px rgba(0,0,0,0.85))`,
                      transition: 'filter 0.5s ease'
                    }}
                  />
                  
                  {/* Per-part subtle glow on hover */}
                  {isActive && (
                    <motion.div
                      className="eng-part-halo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ background: `radial-gradient(circle, ${activeModel.accentColor}15 0%, transparent 70%)` }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ── Spec Dots (positioned over stage) ── */}
          {exploded && partsBase.map(part => (
            <SpecDot
              key={part.id}
              part={part}
              active={part.id === activeId}
              onEnter={() => setHoveredId(part.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}

          {/* ── Floating Spec Panel ── */}
          <AnimatePresence mode="wait">
            {activePart && activeSpecs && (
              <motion.div
                key={`${activeModel.id}-${activePart.id}`}
                className="eng-spec-panel"
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderColor: activeModel.accentColor }}
              >
                {/* Panel header */}
                <div className="eng-spec-header">
                  <div className="eng-spec-dot-live" style={{ background: activeModel.accentColor, boxShadow: `0 0 6px ${activeModel.accentColor}` }} />
                  <span className="eng-spec-component">COMPONENT</span>
                  <span className="eng-spec-name" style={{ color: activeModel.accentColor }}>{activePart.label.toUpperCase()}</span>
                </div>
                {/* Divider */}
                <div className="eng-spec-rule" style={{ background: `linear-gradient(90deg, ${activeModel.accentColor}30, transparent)` }} />
                {/* Rows */}
                {activeSpecs.map((s, i) => (
                  <div key={i} className="eng-spec-row">
                    <span className="eng-spec-key">{s.k}</span>
                    <span className="eng-spec-val">{s.v}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom component list ── */}
        <motion.div
          className="eng-parts-list"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {partsBase.map(p => (
            <button
              key={p.id}
              className={`eng-part-pill ${activeId === p.id ? 'eng-part-pill--active' : ''}`}
              style={activeId === p.id ? { color: activeModel.accentColor, borderColor: activeModel.accentColor, background: `${activeModel.accentColor}06` } : {}}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <span className="eng-pill-dot" />
              {p.label}
            </button>
          ))}
        </motion.div>

      </div>

      <style>{`
        /* ── Section ── */
        .eng-section {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
          background: transparent;
          isolation: isolate;
        }

        /* ── Blueprint grid ── */
        .eng-blueprint-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── Scan lines ── */
        .eng-scanlines {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 229, 255, 0.008) 3px,
            rgba(0, 229, 255, 0.008) 4px
          );
        }

        /* ── Lab ambient glows ── */
        .eng-lab-glow-1, .eng-lab-glow-2 {
          position: absolute; border-radius: 50%;
          filter: blur(120px); pointer-events: none;
        }
        .eng-lab-glow-1 {
          width: 700px; height: 700px;
          top: -15%; left: 30%;
          z-index: 1;
          transition: background 0.8s ease;
        }
        .eng-lab-glow-2 {
          width: 500px; height: 500px;
          bottom: 10%; right: -5%;
          background: radial-gradient(circle, rgba(138,43,226,0.03) 0%, transparent 70%);
          z-index: 1;
          animation: labGlow2 18s ease-in-out infinite alternate;
        }
        @keyframes labGlow2 {
          from { transform: translate(0, 0) scale(1); opacity: 0.6; }
          to   { transform: translate(-40px, -30px) scale(1.15); opacity: 1; }
        }

        /* ── Inner container ── */
        .eng-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; padding: 0 4rem;
        }

        /* ── Header ── */
        .eng-header {
          text-align: center; margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .eng-eyebrow {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.45em;
          color: rgba(255, 255, 255, 0.4); display: block; margin-bottom: 1.2rem;
        }
        .eng-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          font-weight: 900; color: #fff; line-height: 1.08;
          margin: 0 0 1rem;
        }
        .eng-title-accent {
          color: #fff;
          transition: text-shadow 0.8s ease;
        }
        .eng-subtitle {
          font-size: 0.9rem; color: rgba(255,255,255,0.32);
          font-weight: 300; margin: 0 0 2.5rem;
          letter-spacing: 0.04em;
        }

        /* Control bar (Selector tabs + Explode toggle) */
        .eng-control-bar {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .eng-model-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .eng-model-tab {
          background: transparent;
          border: 1px solid transparent;
          color: rgba(255, 255, 255, 0.4);
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .eng-model-tab:hover:not(.active) {
          color: #fff;
        }
        .eng-model-tab.active {
          border-color: var(--active-accent);
          background: rgba(255, 255, 255, 0.02);
        }

        /* Explode toggle button */
        .eng-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em;
          padding: 0.5rem 1.2rem; border-radius: 2px; cursor: pointer;
          transition: all 0.3s ease;
        }
        .eng-toggle-btn:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* ── Stage ── */
        .eng-stage {
          position: relative;
          height: 600px;
          margin-bottom: 3rem;
          border: 1px solid rgba(255,255,255,0.05);
          overflow: visible;
        }

        /* Blueprint corner marks */
        .eng-corner {
          position: absolute; width: 20px; height: 20px;
          border-color: rgba(255,255,255,0.15); border-style: solid;
          pointer-events: none; z-index: 10;
        }
        .eng-corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .eng-corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .eng-corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .eng-corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        /* Measurement lines */
        .eng-measure-h {
          position: absolute; top: 50%; left: 0; right: 0; height: 1px;
          background: rgba(255,255,255,0.03); pointer-events: none; z-index: 0;
        }
        .eng-measure-v {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
          background: rgba(255,255,255,0.03); pointer-events: none; z-index: 0;
        }

        /* ── Parts canvas ── */
        .eng-parts-canvas {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .eng-part {
          position: absolute;
          cursor: pointer;
          will-change: transform;
        }
        .eng-part-img {
          max-height: 480px;
          object-fit: contain;
          transition: filter 0.5s ease;
          pointer-events: none;
        }
        .eng-part--hovered .eng-part-img {
          filter: brightness(1.15) !important;
        }
        .eng-part-halo {
          position: absolute; inset: -20px;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── Spec dots ── */
        .eng-dot {
          position: absolute;
          width: 12px; height: 12px;
          cursor: pointer; z-index: 30;
          transform: translate(-50%, -50%);
        }
        .eng-dot-ring {
          position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          animation: dotRingPulse 2s ease-in-out infinite;
        }
        @keyframes dotRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.5); opacity: 0; }
        }
        .eng-dot-core {
          width: 100%; height: 100%; border-radius: 50%;
          background: #fff;
          transition: transform 0.3s ease;
        }
        .eng-dot--active .eng-dot-core { transform: scale(1.4); }
        .eng-dot-label {
          position: absolute; top: 16px; left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.5rem; font-weight: 700; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6); white-space: nowrap;
          text-transform: uppercase;
          background: rgba(0,0,0,0.5); padding: 0.15rem 0.4rem; border-radius: 2px;
        }

        /* ── Spec panel ── */
        .eng-spec-panel {
          position: absolute;
          bottom: 1.5rem; right: 1.5rem;
          min-width: 280px;
          background: rgba(4, 6, 16, 0.7);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          z-index: 40;
          padding: 1.2rem 1.5rem;
          border-top: 1px solid;
          transition: border-color 0.8s ease;
        }
        .eng-spec-header {
          display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.9rem;
        }
        .eng-spec-dot-live {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
          animation: livePulse 1.5s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .eng-spec-component {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.5rem; letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3); text-transform: uppercase;
        }
        .eng-spec-name {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.68rem; font-weight: 800;
          letter-spacing: 0.15em; margin-left: auto;
          transition: color 0.8s ease;
        }
        .eng-spec-rule {
          height: 1px; margin-bottom: 0.8rem;
        }
        .eng-spec-row {
          display: flex; justify-content: space-between; align-items: baseline;
          gap: 1rem; padding: 0.35rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .eng-spec-row:last-child { border-bottom: none; }
        .eng-spec-key {
          font-size: 0.64rem; font-weight: 600; letter-spacing: 0.06em;
          color: rgba(255,255,255,0.3); text-transform: uppercase; flex-shrink: 0;
        }
        .eng-spec-val {
          font-size: 0.72rem; font-weight: 600;
          color: rgba(255,255,255,0.82); text-align: right;
        }

        /* ── Bottom pill list ── */
        .eng-parts-list {
          display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center;
        }
        .eng-part-pill {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.4);
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em;
          padding: 0.45rem 1rem; border-radius: 30px; cursor: pointer;
          transition: all 0.25s ease;
        }
        .eng-part-pill:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .eng-pill-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: currentColor; flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .eng-control-bar {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }
          .eng-model-tabs {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .eng-stage { height: 400px; }
          .eng-inner { padding: 0 1.5rem; }
          .eng-part-img { max-height: 300px; }
          .eng-spec-panel {
            bottom: 0.5rem; right: 0.5rem; left: 0.5rem;
            min-width: unset;
          }
        }
      `}</style>
    </section>
  );
};

export default EngineeringShowcaseV2;
