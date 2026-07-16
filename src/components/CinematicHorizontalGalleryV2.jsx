import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import caribBlue from '../assets/Galaxy TRB-3 INVADER  Caribbean Blue Flamed Maple Top.jpg';
import midnightBlk from '../assets/Galaxy TRB-3 INVADER  Midnight Gloss Black.jpg';
import sunburst from '../assets/Galaxy TRB-3 INVADER FLAMED MAPLE TOP in SunBurst.jpg';
import purpleBurst from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';
import invader11 from '../assets/Galaxy TRB-3 Invader 11.jpg';

const guitars = [
  {
    id: 'chg-blue',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Caribbean Blue Flamed Maple',
    tagline: 'Deep space energy flows directly through active pickups.',
    image: caribBlue,
    accentColor: '#00e5ff',
    atmosphere: 'blue-energy',
    specs: [
      { label: 'Body Wood', value: 'Alder / Flamed Maple Top' },
      { label: 'Pickups', value: 'HH — Dual Humbucker' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Hand-Sprayed Blue Nitro' },
    ],
  },
  {
    id: 'chg-black',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Midnight Gloss Black',
    tagline: 'Surrounded by floating space rocks in zero-gravity orbit.',
    image: midnightBlk,
    accentColor: '#9d4edd',
    atmosphere: 'asteroids',
    specs: [
      { label: 'Body Wood', value: 'Stealth Alder' },
      { label: 'Pickups', value: 'HH — High-Output Ceramic' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Mirror Gloss Nitro' },
    ],
  },
  {
    id: 'chg-sunburst',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Sunburst Flamed Maple',
    tagline: 'Fueled by orange solar flares and thermal convection.',
    image: sunburst,
    accentColor: '#ff9e00',
    atmosphere: 'solar-flares',
    specs: [
      { label: 'Body Wood', value: 'Ash Core / Flamed Maple' },
      { label: 'Pickups', value: 'HH — Vintage-Hot Wind' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Sunburst Amber Nitro' },
    ],
  },
  {
    id: 'chg-purple',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Cosmic Purple Burst',
    tagline: 'Swirling purple cosmic nebula clouds and stellar light.',
    image: purpleBurst,
    accentColor: '#e040fb',
    atmosphere: 'purple-nebula',
    specs: [
      { label: 'Body Wood', value: 'Nebula Alder / Ebony' },
      { label: 'Pickups', value: 'HH — Alnico V Split-Coil' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Deep Purple Burst Nitro' },
    ],
  },
  {
    id: 'chg-eleven',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Limited Edition 11',
    tagline: 'An architecture wrapped in cyan stardust stream fields.',
    image: invader11,
    accentColor: '#00f5d4',
    atmosphere: 'stardust',
    specs: [
      { label: 'Body Wood', value: 'Select Mahogany Core' },
      { label: 'Pickups', value: 'HH — Custom-Wound Active' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Satin Midnight Lacquer' },
    ],
  },
];

const CinematicHorizontalGalleryV2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // 5 slides total width is 500vw, so translate 4 slides (0% to -80%)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <div ref={containerRef} className="chg-scroll-container">
      <div className="chg-sticky-wrapper">
        <motion.div style={{ x }} className="chg-track">
          {guitars.map((guitar, index) => {
            return (
              <div key={guitar.id} className="chg-slide">
                
                {/* Atmosphere FX Background Layer */}
                <div className={`chg-atmosphere ${guitar.atmosphere}`}>
                  {/* Blue Energy Atmosphere */}
                  {guitar.atmosphere === 'blue-energy' && (
                    <div className="chg-atmos-overlay chg-blue-energy">
                      <div className="chg-energy-ring r-1" />
                      <div className="chg-energy-ring r-2" />
                      <div className="chg-energy-ring r-3" />
                      <div className="chg-neb-spot" style={{ background: `radial-gradient(circle, ${guitar.accentColor}18 0%, transparent 70%)` }} />
                    </div>
                  )}

                  {/* Asteroid Atmosphere */}
                  {guitar.atmosphere === 'asteroids' && (
                    <div className="chg-atmos-overlay chg-asteroids">
                      <div className="chg-rock rk-1" />
                      <div className="chg-rock rk-2" />
                      <div className="chg-rock rk-3" />
                      <div className="chg-dust dst-1" />
                      <div className="chg-dust dst-2" />
                    </div>
                  )}

                  {/* Solar Flares Atmosphere */}
                  {guitar.atmosphere === 'solar-flares' && (
                    <div className="chg-atmos-overlay chg-solar">
                      <div className="chg-flare flr-1" />
                      <div className="chg-heatwave" />
                      <div className="chg-solar-spark s-1" />
                      <div className="chg-solar-spark s-2" />
                    </div>
                  )}

                  {/* Purple Nebula Atmosphere */}
                  {guitar.atmosphere === 'purple-nebula' && (
                    <div className="chg-atmos-overlay chg-nebula">
                      <div className="chg-cloud c-1" />
                      <div className="chg-cloud c-2" />
                    </div>
                  )}

                  {/* Stardust Stream Atmosphere */}
                  {guitar.atmosphere === 'stardust' && (
                    <div className="chg-atmos-overlay chg-stardust">
                      <div className="chg-stream stm-1" />
                      <div className="chg-stream stm-2" />
                      <div className="chg-dust dst-3" />
                    </div>
                  )}
                </div>

                <div className="chg-grid">
                  
                  {/* Left Column: Typography & Spec Matrix */}
                  <div className="chg-text-col">
                    <span className="chg-eyebrow">CINEMATIC ORBIT</span>
                    <h2 className="chg-headline">
                      <span className="chg-series">{guitar.series}</span>
                      <span className="chg-model" style={{ color: guitar.accentColor }}>{guitar.model}</span>
                    </h2>
                    <p className="chg-edition">{guitar.edition}</p>
                    <p className="chg-desc">{guitar.tagline}</p>

                    <div className="chg-specs">
                      {guitar.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="chg-spec-field">
                          <span className="chg-spec-lbl">{spec.label}</span>
                          <span className="chg-spec-val">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="chg-btn" 
                      style={{ '--accent-chg': guitar.accentColor }}
                      onClick={() => {
                        const el = document.getElementById('consultation');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Reserve Allocation <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Right Column: Floating Spotlight Guitar */}
                  <div className="chg-image-col">
                    <div className="chg-guitar-orbit">
                      <img 
                        src={guitar.image} 
                        alt={guitar.edition} 
                        className="chg-guitar-image"
                        style={{ filter: `drop-shadow(0 35px 60px rgba(0,0,0,0.95)) drop-shadow(0 0 30px ${guitar.accentColor}30)` }}
                      />
                      <div className="chg-shadow-floor" style={{ background: `radial-gradient(ellipse, ${guitar.accentColor}15 0%, transparent 70%)` }} />
                      <div className="chg-aura" style={{ background: `radial-gradient(circle, ${guitar.accentColor}06 0%, transparent 60%)` }} />
                    </div>
                  </div>

                </div>

                {/* Telemetry sectors */}
                <div className="chg-telemetry">
                  <span className="chg-tel-lbl">GALACTIC AREA</span>
                  <span className="chg-tel-val" style={{ color: guitar.accentColor }}>SECTOR // 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .chg-scroll-container {
          position: relative;
          height: 450vh;
          background: transparent;
        }

        .chg-sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: transparent;
        }

        .chg-track {
          display: flex;
          height: 100%;
          width: 500vw;
        }

        .chg-slide {
          position: relative;
          width: 100vw;
          flex-shrink: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-sizing: border-box;
          padding: 0 6rem;
        }

        .chg-grid {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1300px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 6rem;
          align-items: center;
        }

        .chg-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .chg-eyebrow {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.8rem;
          display: block;
        }

        .chg-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          margin: 0 0 0.8rem;
          display: flex;
          flex-direction: column;
          line-height: 0.95;
        }

        .chg-series {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.15em;
        }

        .chg-model {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.01em;
        }

        .chg-edition {
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 1rem;
        }

        .chg-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.75;
          font-weight: 300;
          max-width: 440px;
          margin: 0 0 3rem;
        }

        /* Specs table */
        .chg-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
          max-width: 440px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 2rem;
          margin-bottom: 3rem;
        }

        .chg-spec-field {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .chg-spec-lbl {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
        }

        .chg-spec-val {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Button */
        .chg-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.95rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.35s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chg-btn:hover {
          border-color: var(--accent-chg);
          color: var(--accent-chg);
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.15);
          transform: translateY(-2px);
        }

        /* Image columns */
        .chg-image-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .chg-guitar-orbit {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: chgFloat 8s ease-in-out infinite alternate;
        }

        @keyframes chgFloat {
          0% { transform: translateY(0) rotate(12deg); }
          100% { transform: translateY(-20px) rotate(15deg) scale(1.02); }
        }

        .chg-guitar-image {
          max-height: 65vh;
          object-fit: contain;
          position: relative;
          z-index: 5;
        }

        .chg-shadow-floor {
          position: absolute;
          bottom: -5%;
          width: 80%;
          height: 50px;
          border-radius: 50%;
          filter: blur(15px);
          z-index: 1;
        }

        .chg-aura {
          position: absolute;
          width: 130%;
          height: 130%;
          border-radius: 50%;
          filter: blur(70px);
          z-index: 0;
        }

        /* Telemetry overlay */
        .chg-telemetry {
          position: absolute;
          bottom: 3rem;
          right: 6rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          z-index: 10;
        }

        .chg-tel-lbl {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.35);
        }

        .chg-tel-val {
          font-size: 1rem;
          font-weight: 800;
        }

        /* ─── Atmosphere FX systems ─── */
        .chg-atmosphere {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .chg-atmos-overlay {
          position: absolute;
          inset: 0;
        }

        /* 1. Blue Energy */
        .chg-blue-energy {
          background: radial-gradient(circle at 65% 50%, rgba(0, 229, 255, 0.12) 0%, transparent 65%);
        }
        .chg-energy-ring {
          position: absolute;
          border: 1px solid rgba(0, 229, 255, 0.12);
          border-radius: 50%;
          top: 50%; left: 65%;
          transform: translate(-50%, -50%);
        }
        .chg-energy-ring.r-1 { width: 300px; height: 300px; animation: chgRingPulse 6s infinite ease-in-out; }
        .chg-energy-ring.r-2 { width: 450px; height: 450px; animation: chgRingPulse 9s infinite ease-in-out 1s; border-style: dashed; }
        .chg-energy-ring.r-3 { width: 600px; height: 600px; animation: chgRingPulse 12s infinite ease-in-out 2s; }
        @keyframes chgRingPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.25; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.75; }
        }

        /* 2. Asteroids */
        .chg-asteroids {
          background: radial-gradient(circle at 65% 50%, rgba(138, 43, 226, 0.12) 0%, transparent 65%);
        }
        .chg-rock {
          position: absolute;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .rk-1 { width: 10px; height: 10px; top: 25%; left: 55%; animation: chgFloatRock 12s infinite linear; }
        .rk-2 { width: 16px; height: 14px; top: 72%; left: 78%; animation: chgFloatRock 20s infinite linear reverse; }
        .rk-3 { width: 8px; height: 8px; top: 45%; left: 82%; animation: chgFloatRock 15s infinite linear 1.5s; }
        @keyframes chgFloatRock {
          0% { transform: translate(0,0) rotate(0deg); opacity: 0.4; }
          50% { transform: translate(25px, -15px) rotate(180deg); opacity: 0.9; }
          100% { transform: translate(0,0) rotate(360deg); opacity: 0.4; }
        }
        .chg-dust {
          position: absolute;
          width: 2px; height: 2px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 50%;
        }
        .dst-1 { top: 30%; left: 58%; animation: chgDustTwinkle 4s infinite alternate; }
        .dst-2 { top: 68%; left: 74%; animation: chgDustTwinkle 6s infinite alternate 1s; }
        @keyframes chgDustTwinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.4); }
        }

        /* 3. Solar */
        .chg-solar {
          background: radial-gradient(circle at 65% 50%, rgba(255, 110, 0, 0.14) 0%, transparent 65%);
        }
        .flr-1 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 110, 0, 0.15) 0%, transparent 70%);
          filter: blur(45px);
          top: 50%; left: 65%;
          transform: translate(-50%, -50%);
          animation: chgSolarPulse 8s infinite alternate;
        }
        @keyframes chgSolarPulse {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.45; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.9; }
        }
        .chg-heatwave {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(255,110,0,0.012) 0%, transparent 100%);
          animation: chgWave 5s infinite linear;
        }
        @keyframes chgWave {
          0% { opacity: 0; transform: translateY(8%); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-8%); }
        }
        .chg-solar-spark {
          position: absolute;
          width: 3px; height: 3px;
          background: #ffb703;
          border-radius: 50%;
          box-shadow: 0 0 6px #ffb703;
        }
        .s-1 { top: 58%; left: 62%; animation: chgSpark 7s infinite linear; }
        .s-2 { top: 38%; left: 74%; animation: chgSpark 9s infinite linear 1.5s; }
        @keyframes chgSpark {
          0% { transform: translateY(30px) scale(0.8); opacity: 0; }
          50% { opacity: 0.95; }
          100% { transform: translateY(-70px) scale(1.3); opacity: 0; }
        }

        /* 4. Nebula */
        .chg-nebula {
          background: radial-gradient(circle at 65% 50%, rgba(224, 64, 251, 0.14) 0%, transparent 65%);
        }
        .chg-cloud {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 64, 251, 0.08) 0%, transparent 60%);
          top: 50%; left: 65%;
          transform: translate(-50%, -50%);
          filter: blur(55px);
        }
        .c-1 { width: 450px; height: 420px; animation: chgSwirl 18s infinite linear; }
        .c-2 { width: 550px; height: 500px; animation: chgSwirl 28s infinite linear reverse; }
        @keyframes chgSwirl {
          from { transform: translate(-50%,-50%) rotate(0deg) scale(0.9); }
          to { transform: translate(-50%,-50%) rotate(360deg) scale(1.1); }
        }

        /* 5. Stardust */
        .chg-stardust {
          background: radial-gradient(circle at 65% 50%, rgba(0, 245, 212, 0.12) 0%, transparent 65%);
        }
        .chg-stream {
          position: absolute;
          width: 250px; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,245,212,0.15), transparent);
          top: 50%; left: 65%;
          transform-origin: 0 0;
        }
        .stm-1 { transform: translate(-50%, -50%) rotate(40deg); animation: chgStreamSlide 6s infinite linear; }
        .stm-2 { transform: translate(-50%, -50%) rotate(-25deg); animation: chgStreamSlide 9s infinite linear 1s; }
        @keyframes chgStreamSlide {
          0% { opacity: 0; transform: translate(-75%, -50%) rotate(inherit); }
          50% { opacity: 0.95; }
          100% { opacity: 0; transform: translate(45%, -50%) rotate(inherit); }
        }

        @media (max-width: 1024px) {
          .chg-slide { padding: 0 3rem; }
          .chg-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .chg-text-col { align-items: center; }
          .chg-image-col { order: -1; }
          .chg-guitar-image { max-height: 40vh; }
          .chg-specs { margin: 0 auto 2rem; }
          .chg-telemetry { display: none; }
        }

        @media (max-width: 640px) {
          .chg-slide { padding: 0 1.5rem; }
          .chg-specs { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CinematicHorizontalGalleryV2;
