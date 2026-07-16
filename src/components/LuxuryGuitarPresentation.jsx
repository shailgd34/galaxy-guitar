import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import caribBlue from '../assets/Galaxy TRB-3 INVADER  Caribbean Blue Flamed Maple Top.jpg';
import midnightBlk from '../assets/Galaxy TRB-3 INVADER  Midnight Gloss Black.jpg';
import sunburst from '../assets/Galaxy TRB-3 INVADER FLAMED MAPLE TOP in SunBurst.jpg';
import purpleBurst from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';
import invader11 from '../assets/Galaxy TRB-3 Invader 11.jpg';

const guitars = [
  {
    id: 'midnight-black',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Midnight Gloss Black',
    tagline: 'Darkness refined. Clean aesthetics meets high-output power.',
    image: midnightBlk,
    accentColor: '#9d4edd',
    bgGradient: 'radial-gradient(circle at 65% 50%, rgba(157, 78, 221, 0.12) 0%, transparent 70%)',
    specs: [
      { label: 'Body Wood', value: 'Stealth Alder' },
      { label: 'Pickups', value: 'HH — High-Output Ceramic' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Mirror Gloss Nitro' },
    ],
  },
  {
    id: 'caribbean-blue',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Caribbean Blue Flamed Maple',
    tagline: 'Precision engineered to project sound across galaxies.',
    image: caribBlue,
    accentColor: '#00e5ff',
    bgGradient: 'radial-gradient(circle at 65% 50%, rgba(0, 229, 255, 0.12) 0%, transparent 70%)',
    specs: [
      { label: 'Body Wood', value: 'Alder / Flamed Maple Top' },
      { label: 'Pickups', value: 'HH — Dual Humbucker' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Hand-Sprayed Blue Nitro' },
    ],
  },
  {
    id: 'sunburst',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Sunburst Flamed Maple',
    tagline: 'Traditional warmth met with revolutionary playability.',
    image: sunburst,
    accentColor: '#ff9e00',
    bgGradient: 'radial-gradient(circle at 65% 50%, rgba(255, 158, 0, 0.12) 0%, transparent 70%)',
    specs: [
      { label: 'Body Wood', value: 'Ash Core / Flamed Maple' },
      { label: 'Pickups', value: 'HH — Vintage-Hot Wind' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Sunburst Amber Nitro' },
    ],
  },
  {
    id: 'purple-burst',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Cosmic Purple Burst',
    tagline: 'A burst of nebular starlight across highly figured ebony wood.',
    image: purpleBurst,
    accentColor: '#e040fb',
    bgGradient: 'radial-gradient(circle at 65% 50%, rgba(224, 64, 251, 0.12) 0%, transparent 70%)',
    specs: [
      { label: 'Body Wood', value: 'Nebula Alder / Ebony' },
      { label: 'Pickups', value: 'HH — Alnico V Split-Coil' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Deep Purple Burst Nitro' },
    ],
  },
  {
    id: 'invader-11',
    series: 'TRB-3',
    model: 'INVADER',
    edition: 'Limited Edition 11',
    tagline: 'A rare formulation built exclusively for custom shop reservations.',
    image: invader11,
    accentColor: '#00f5d4',
    bgGradient: 'radial-gradient(circle at 65% 50%, rgba(0, 245, 212, 0.12) 0%, transparent 70%)',
    specs: [
      { label: 'Body Wood', value: 'Select Mahogany Core' },
      { label: 'Pickups', value: 'HH — Custom-Wound Active' },
      { label: 'Scale Length', value: '25.5" / 647.7mm' },
      { label: 'Finish', value: 'Satin Midnight Lacquer' },
    ],
  },
];

const LuxuryGuitarPresentation = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const guitar = guitars[active];

  const go = (nextIdx) => {
    setDir(nextIdx > active ? 1 : -1);
    setActive(nextIdx);
  };

  const next = () => {
    go(active === guitars.length - 1 ? 0 : active + 1);
  };

  const prev = () => {
    go(active === 0 ? guitars.length - 1 : active - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [active]);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      filter: 'blur(10px)',
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      filter: 'blur(10px)',
    }),
  };

  return (
    <section className="lgp-section" id="luxury-presentation">
      {/* Dynamic Nebula Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={guitar.id + '-bg'}
          className="lgp-nebula-bg"
          style={{ background: guitar.bgGradient }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="lgp-wrapper">
        <div className="lgp-layout">
          
          {/* Left: Typography & Spec Matrix */}
          <div className="lgp-text-col">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={guitar.id + '-text'}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={dir}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lgp-editorial-block"
              >
                <span className="lgp-sub-brand">CUSTOM SERIES</span>
                <h2 className="lgp-main-headline">
                  <span className="series-lbl">{guitar.series}</span>
                  <span className="model-lbl" style={{ color: guitar.accentColor }}>{guitar.model}</span>
                </h2>
                <p className="lgp-edition-tag">{guitar.edition}</p>
                <p className="lgp-intro-desc">{guitar.tagline}</p>

                {/* Spec Table */}
                <div className="lgp-table">
                  {guitar.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="lgp-table-row">
                      <span className="lgp-row-key">{spec.label}</span>
                      <span className="lgp-row-val">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="lgp-btn-discover"
                  style={{ '--accent-color': guitar.accentColor }}
                  onClick={() => {
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discover This Guitar <ArrowRight size={14} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Giant Viewport Guitar */}
          <div className="lgp-image-col">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={guitar.id + '-image'}
                className="lgp-guitar-carrier"
                initial={{ opacity: 0, scale: 0.85, rotate: dir > 0 ? 25 : -25 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                exit={{ opacity: 0, scale: 0.85, rotate: dir > 0 ? -25 : 25 }}
                custom={dir}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  src={guitar.image} 
                  alt={guitar.edition} 
                  className="lgp-viewport-guitar"
                  style={{ filter: `drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 25px ${guitar.accentColor}25)` }}
                />
                <div className="lgp-guitar-reflection" style={{ background: `radial-gradient(ellipse, ${guitar.accentColor}12 0%, transparent 70%)` }} />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel UI Dots & Navigation */}
        <div className="lgp-carousel-ui">
          <button className="lgp-nav-arrow" onClick={prev} aria-label="Previous Guitar">
            <ChevronLeft size={20} />
          </button>
          
          <div className="lgp-indicators">
            {guitars.map((g, idx) => (
              <button
                key={g.id}
                className={`lgp-dot ${active === idx ? 'active' : ''}`}
                style={active === idx ? { background: guitar.accentColor, boxShadow: `0 0 10px ${guitar.accentColor}` } : {}}
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button className="lgp-nav-arrow" onClick={next} aria-label="Next Guitar">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Counter */}
        <div className="lgp-carousel-counter">
          <span className="current-num" style={{ color: guitar.accentColor }}>0{active + 1}</span>
          <span className="divider" />
          <span className="total-num">0{guitars.length}</span>
        </div>
      </div>

      <style>{`
        .lgp-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          padding: 5rem 2rem;
          box-sizing: border-box;
        }

        .lgp-nebula-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .lgp-wrapper {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        .lgp-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          width: 100%;
        }

        /* Text layout */
        .lgp-text-col {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .lgp-sub-brand {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.8rem;
          display: block;
        }

        .lgp-main-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          margin: 0 0 0.8rem;
          display: flex;
          flex-direction: column;
          line-height: 0.95;
        }

        .series-lbl {
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.15em;
        }

        .model-lbl {
          font-size: clamp(3.5rem, 8vw, 6.2rem);
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .lgp-edition-tag {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 1rem;
        }

        .lgp-intro-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.7;
          font-weight: 300;
          max-width: 440px;
          margin: 0 0 2.5rem;
        }

        /* Spec Table - luxury editorial layout */
        .lgp-table {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
          max-width: 440px;
          margin-bottom: 3rem;
        }

        .lgp-table-row {
          display: flex;
          justify-content: space-between;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .lgp-row-key {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
        }

        .lgp-row-val {
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Discover Button */
        .lgp-btn-discover {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.95rem 2rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          width: fit-content;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .lgp-btn-discover:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.12);
          transform: translateY(-2px);
        }

        /* Image styling */
        .lgp-image-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 65vh;
        }

        .lgp-guitar-carrier {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: viewportFloat 6s ease-in-out infinite alternate;
        }

        @keyframes viewportFloat {
          0% { transform: translateY(0) rotate(12deg); }
          100% { transform: translateY(-15px) rotate(14deg); }
        }

        .lgp-viewport-guitar {
          max-height: 520px;
          object-fit: contain;
          position: relative;
          z-index: 5;
        }

        .lgp-guitar-reflection {
          position: absolute;
          bottom: -5%;
          width: 80%;
          height: 50px;
          border-radius: 50%;
          filter: blur(12px);
          z-index: 1;
        }

        /* Navigation controls */
        .lgp-carousel-ui {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3.5rem;
          width: fit-content;
        }

        .lgp-nav-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lgp-nav-arrow:hover {
          border-color: #fff;
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .lgp-indicators {
          display: flex;
          gap: 0.6rem;
        }

        .lgp-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .lgp-dot.active {
          width: 20px;
          border-radius: 3px;
        }

        /* Counter */
        .lgp-carousel-counter {
          position: absolute;
          bottom: 0.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display, 'Orbitron', sans-serif);
        }

        .current-num {
          font-size: 1.3rem;
          font-weight: 900;
        }

        .divider {
          width: 25px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(-45deg);
        }

        .total-num {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .lgp-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .lgp-text-col {
            align-items: center;
          }
          .lgp-image-col {
            order: -1;
            height: 380px;
          }
          .lgp-viewport-guitar {
            max-height: 340px;
          }
          .lgp-table {
            margin: 0 auto 2rem;
          }
          .lgp-carousel-ui {
            margin: 3rem auto 0;
          }
          .lgp-carousel-counter {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LuxuryGuitarPresentation;
