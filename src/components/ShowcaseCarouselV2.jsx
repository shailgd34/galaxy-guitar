import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import caribBlue from '../assets/Galaxy TRB-3 INVADER  Caribbean Blue Flamed Maple Top.jpg';
import midnightBlack from '../assets/Galaxy TRB-3 INVADER  Midnight Gloss Black.jpg';
import sunburst from '../assets/Galaxy TRB-3 INVADER FLAMED MAPLE TOP in SunBurst.jpg';
import purpleBurst from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';

const slides = [
  { image: caribBlue, title: "Caribbean Blue Burst", model: "CONCEPT 2026", desc: "Stunning flamed maple top in a rich ocean blue gradient." },
  { image: midnightBlack, title: "Midnight Gloss Black", model: "STEALTH", desc: "Deep high-gloss pure obsidian finish for a stealth presence." },
  { image: sunburst, title: "Sunburst Flamed Maple", model: "CLASSIC", desc: "Traditional hand-rubbed warm sunburst top with premium grain." },
  { image: purpleBurst, title: "Cosmic Purple Burst", model: "NEBULA", desc: "Electric deep purple gradient with ebony neck." },
];

const ShowcaseCarouselV2 = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const next = () => { setDir(1); setIndex((i) => (i + 1) % slides.length); };
  const prev = () => { setDir(-1); setIndex((i) => (i - 1 + slides.length) % slides.length); };

  const variants = {
    enter: (d) => ({ x: d > 0 ? 400 : -400, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d < 0 ? 400 : -400, opacity: 0, scale: 0.9 }),
  };

  return (
    <section className="scv2-section">
      <div className="scv2-bg" />
      <div className="scv2-orb scv2-orb-1" />

      <div className="scv2-wrapper">
        <motion.div
          className="scv2-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="scv2-label">SHOWCASE</span>
          <h2 className="scv2-title">TRB-3 <span className="scv2-accent">INVADER</span> Gallery</h2>
        </motion.div>

        <div className="scv2-carousel">
          <button className="scv2-nav scv2-nav-prev" onClick={prev}><ChevronLeft size={24} /></button>

          <div className="scv2-slide-area">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                className="scv2-slide"
              >
                <div className="scv2-slide-img-wrap">
                  <img src={slides[index].image} alt={slides[index].title} />
                  <div className="scv2-slide-img-glow" />
                </div>
                <div className="scv2-slide-info">
                  <span className="scv2-slide-model">TRB-3 INVADER // {slides[index].model}</span>
                  <h3 className="scv2-slide-title">{slides[index].title}</h3>
                  <p className="scv2-slide-desc">{slides[index].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="scv2-nav scv2-nav-next" onClick={next}><ChevronRight size={24} /></button>
        </div>

        {/* Dot Indicators */}
        <div className="scv2-dots">
          {slides.map((_, i) => (
            <button key={i} className={`scv2-dot ${i === index ? 'active' : ''}`} onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }} />
          ))}
        </div>
      </div>

      <style>{`
        .scv2-section {
          position: relative; padding: 5rem 2rem; overflow: hidden; isolation: isolate;
        }
        .scv2-bg {
          position: absolute; inset: 0; z-index: -3;
          background: linear-gradient(180deg, #030712, #0d0d2b 50%, #030712);
        }
        .scv2-orb-1 {
          position: absolute; width: 600px; height: 600px;
          top: 30%; left: 50%; transform: translateX(-50%);
          border-radius: 50%; background: rgba(138,43,226,0.08);
          filter: blur(120px); z-index: -2; pointer-events: none;
        }
        .scv2-wrapper { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .scv2-header { text-align: center; margin-bottom: 4rem; }
        .scv2-label {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.7rem; font-weight: 800; letter-spacing: 0.4em;
          color: rgba(255,255,255,0.35);
        }
        .scv2-title {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; color: #fff;
          margin: 0.5rem 0;
        }
        .scv2-accent {
          background: linear-gradient(135deg,#00e5ff,#8a2be2);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .scv2-carousel {
          display: flex; align-items: center; gap: 1.5rem;
        }
        .scv2-nav {
          flex-shrink: 0; width: 50px; height: 50px; border-radius: 50%;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }
        .scv2-nav:hover {
          background: rgba(0,229,255,0.1); border-color: rgba(0,229,255,0.4); color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,229,255,0.15);
        }
        .scv2-slide-area {
          flex: 1; overflow: hidden; min-height: 500px;
          display: flex; align-items: center; justify-content: center;
        }
        .scv2-slide {
          width: 100%; display: flex; flex-direction: column; align-items: center;
        }
        .scv2-slide-img-wrap {
          position: relative; width: 100%; max-width: 700px; border-radius: 20px;
          overflow: hidden; background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 2rem;
        }
        .scv2-slide-img-wrap img {
          width: 100%; height: 380px; object-fit: cover;
        }
        .scv2-slide-img-glow {
          position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(to top, rgba(3,7,18,0.9), transparent);
          pointer-events: none;
        }
        .scv2-slide-info { text-align: center; }
        .scv2-slide-model {
          font-family: var(--font-display,'Orbitron',sans-serif);
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.2em;
          color: #8a2be2;
        }
        .scv2-slide-title {
          font-size: 1.6rem; font-weight: 800; color: #fff; margin: 0.3rem 0;
        }
        .scv2-slide-desc {
          font-size: 0.95rem; color: rgba(255,255,255,0.45); max-width: 500px; margin: 0 auto;
        }
        .scv2-dots {
          display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem;
        }
        .scv2-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.15); border: none; cursor: pointer;
          transition: all 0.3s ease;
        }
        .scv2-dot.active {
          background: #00e5ff; box-shadow: 0 0 12px rgba(0,229,255,0.5);
          width: 30px; border-radius: 5px;
        }
        @media (max-width: 768px) {
          .scv2-nav { display: none; }
          .scv2-slide-img-wrap img { height: 250px; }
        }
      `}</style>
    </section>
  );
};

export default ShowcaseCarouselV2;
