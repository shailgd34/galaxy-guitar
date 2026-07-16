import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import guitarImg from '../assets/pngwing.com.png';

/* ─── Animated counting number ─── */
const CountUp = ({ target, suffix = '', duration = 2200 }) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    // Handle non-numeric targets like "Worldwide"
    const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numTarget)) { setDisplay(target); return; }

    const prefix = target.match(/^[^0-9]*/)[0];
    const postfix = target.match(/[^0-9.]*$/)[0];
    let start = 0;
    const step = numTarget / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, numTarget);
      const rounded = Number.isInteger(numTarget) ? Math.round(start) : start.toFixed(1);
      setDisplay(`${prefix}${rounded}${postfix}`);
      if (start >= numTarget) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
};

/* ─── Individual word that glows on scroll ─── */
const GlowWord = ({ word, delay = 0, glow = false }) => (
  <motion.span
    className={`story-word ${glow ? 'story-word--glow' : ''}`}
    initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {word}{' '}
  </motion.span>
);

const stats = [
  { value: '30+',        label: 'Years',            suffix: '' },
  { value: '5000+',      label: 'Custom Orders',    suffix: '' },
  { value: '100%',       label: 'Hand Crafted',     suffix: '' },
  { value: 'Worldwide',  label: 'Shipping',         suffix: '' },
];

const AboutV2 = () => {
  return (
    <section className="story-section" id="about-us">

      {/* Nebula Fog Layers */}
      <div className="story-nebula story-nebula-1" />
      <div className="story-nebula story-nebula-2" />
      <div className="story-nebula story-nebula-3" />

      {/* Slow horizontal scanner line */}
      <div className="story-scanner-line" />

      <div className="story-inner">

        {/* ── Act I: Label ── */}
        <motion.div
          className="story-label"
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.35em' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          THE STORY
        </motion.div>

        {/* ── Act II: Giant headline ── */}
        <h2 className="story-headline" aria-label="30 Years of Crafting Excellence">
          <div className="story-line">
            <GlowWord word="30" delay={0.1} />
            <GlowWord word="YEARS" delay={0.2} />
            <GlowWord word="OF" delay={0.3} />
          </div>
          <div className="story-line">
            <GlowWord word="CRAFTING" delay={0.4} glow />
            <GlowWord word="EXCELLENCE" delay={0.55} glow />
          </div>
        </h2>

        {/* ── Act III: Guitar + editorial copy side by side ── */}
        <div className="story-feature">

          {/* Spotlight guitar */}
          <motion.div
            className="story-guitar-col"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="story-spotlight-wrap">
              {/* Spot light cone */}
              <div className="story-spotlight-cone" />
              <div className="story-spotlight-floor" />
              {/* Guitar */}
              <img
                src={guitarImg}
                alt="Galaxy TRB-3 Invader"
                className="story-guitar-img"
              />
              {/* Floating cosmic aura behind guitar */}
              <div className="story-guitar-aura" />
            </div>
          </motion.div>

          {/* Editorial prose */}
          <div className="story-prose-col">

            <motion.p
              className="story-lead"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Three decades. One obsession.
            </motion.p>

            {[
              `Galaxy Guitar Products USA was born from a singular belief — that an instrument should feel as extraordinary as it sounds. Since our founding, we have spent over thirty years designing and hand-building custom electric guitars that push the boundary of what craftsmanship means.`,
              `Every guitar that leaves our workshop is a one-of-a-kind creation. From the hand-selected tonewoods to the final setup, each detail is deliberated, refined, and executed with the precision of a master luthier.`,
              `Beyond the instrument, we pioneered the world's only custom finger protection technology — a system now trusted by professional musicians managing injuries, medical patients in physical rehabilitation, and prosthetic specialists seeking functional solutions for their clients.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                className="story-para"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.15 }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              className="story-rule"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />

            <motion.p
              className="story-closing"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Designed for musicians. Built for legends.
            </motion.p>
          </div>
        </div>

        {/* ── Act IV: Animated statistics ── */}
        <div className="story-stats">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="story-stat"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <div className="story-stat-number">
                <CountUp target={s.value} duration={2000 + i * 200} />
              </div>
              <div className="story-stat-label">{s.label}</div>
              <div className="story-stat-line" />
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .story-section {
          position: relative;
          background: transparent;
          overflow: hidden;
          padding: 6rem 0;
          isolation: isolate;
        }

        /* ── Nebula clouds ── */
        .story-nebula {
          position: absolute; border-radius: 50%;
          filter: blur(120px); pointer-events: none; z-index: 0;
        }
        .story-nebula-1 {
          width: 700px; height: 700px;
          top: -10%; left: -5%;
          background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%);
          animation: nebulaShift1 18s ease-in-out infinite alternate;
        }
        .story-nebula-2 {
          width: 600px; height: 600px;
          top: 30%; right: -10%;
          background: radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%);
          animation: nebulaShift2 22s ease-in-out infinite alternate;
        }
        .story-nebula-3 {
          width: 500px; height: 500px;
          bottom: -5%; left: 30%;
          background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
          animation: nebulaShift1 15s ease-in-out infinite alternate-reverse;
        }
        @keyframes nebulaShift1 {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(60px, 40px); }
        }
        @keyframes nebulaShift2 {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(-50px, 60px); }
        }

        /* Slow scanner line */
        .story-scanner-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.25), transparent);
          z-index: 1; pointer-events: none;
          animation: scanDown 12s linear infinite;
        }
        @keyframes scanDown {
          0%   { top: -2px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* ── Inner container ── */
        .story-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 0 4rem;
        }

        /* ── Label ── */
        .story-label {
          text-align: center;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.62rem; font-weight: 800;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          margin-bottom: 4rem;
        }

        /* ── Giant headline ── */
        .story-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0 0 4.5rem 0;
          text-align: center;
        }
        .story-line {
          display: block; overflow: hidden;
        }
        .story-word {
          display: inline-block;
          margin-right: 0.2em;
          transition: color 0.3s;
        }
        .story-word--glow {
          color: #ffffff;
          text-shadow:
            0 0 40px rgba(0, 229, 255, 0.5),
            0 0 80px rgba(0, 229, 255, 0.2);
        }

        /* ── Feature (guitar + prose) ── */
        .story-feature {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        /* Guitar spotlight column */
        .story-guitar-col {
          position: relative;
          display: flex; justify-content: center; align-items: flex-end;
        }
        .story-spotlight-wrap {
          position: relative;
          display: flex; justify-content: center; align-items: flex-end;
        }
        /* Spot cone from top */
        .story-spotlight-cone {
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 2px; height: 80px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.3));
          box-shadow: 0 0 60px 60px rgba(255,255,255,0.03);
          z-index: 1; pointer-events: none;
        }
        /* Floor reflection */
        .story-spotlight-floor {
          position: absolute;
          bottom: -10px; left: 50%;
          transform: translateX(-50%);
          width: 200px; height: 40px;
          background: radial-gradient(ellipse, rgba(0,229,255,0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(8px);
          z-index: 1; pointer-events: none;
        }
        .story-guitar-img {
          position: relative; z-index: 2;
          max-height: 580px;
          object-fit: contain;
          transform: rotate(12deg);
          filter:
            drop-shadow(0 40px 60px rgba(0,0,0,0.95))
            drop-shadow(0 0 30px rgba(0,229,255,0.2));
          animation: storyGuitarFloat 8s ease-in-out infinite alternate;
        }
        @keyframes storyGuitarFloat {
          0%   { transform: rotate(12deg) translateY(0); }
          100% { transform: rotate(15deg) translateY(-18px); }
        }
        .story-guitar-aura {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120%; height: 120%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 60%);
          filter: blur(40px);
          z-index: 0; pointer-events: none;
          animation: auraBreath 7s ease-in-out infinite alternate;
        }
        @keyframes auraBreath {
          0%   { transform: translate(-50%,-50%) scale(0.9); opacity: 0.6; }
          100% { transform: translate(-50%,-50%) scale(1.15); opacity: 1; }
        }

        /* ── Prose column ── */
        .story-prose-col {
          display: flex; flex-direction: column; gap: 0;
        }
        .story-lead {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin: 0 0 2.2rem 0;
          letter-spacing: 0.02em;
        }
        .story-para {
          font-size: clamp(0.9rem, 1.2vw, 1.05rem);
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
          margin: 0 0 1.6rem 0;
          max-width: 560px;
        }
        .story-rule {
          height: 1px;
          background: linear-gradient(90deg, rgba(0,229,255,0.3), rgba(255,255,255,0.04));
          transform-origin: left;
          margin: 2rem 0;
        }
        .story-closing {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0, 229, 255, 0.7);
          margin: 0;
        }

        /* ── Stats row ── */
        .story-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 5rem;
        }
        .story-stat {
          padding: 0 3rem 0 0;
          position: relative;
        }
        .story-stat::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.04);
        }
        .story-stat:last-child::after { display: none; }
        .story-stat-number {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.6rem;
          text-shadow:
            0 0 30px rgba(0, 229, 255, 0.35),
            0 0 60px rgba(0, 229, 255, 0.1);
          animation: statGlow 4s ease-in-out infinite alternate;
        }
        @keyframes statGlow {
          0%   { text-shadow: 0 0 20px rgba(0,229,255,0.2); }
          100% { text-shadow: 0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(0,229,255,0.15); }
        }
        .story-stat-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
        }
        .story-stat-line {
          width: 24px; height: 2px;
          background: linear-gradient(90deg, #00e5ff, transparent);
          margin-top: 1rem;
          border-radius: 1px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .story-feature {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .story-guitar-img { max-height: 380px; }
          .story-stats { grid-template-columns: repeat(2, 1fr); gap: 3rem 0; }
          .story-stat::after { display: none; }
          .story-stat { padding: 0; }
        }
        @media (max-width: 640px) {
          .story-inner { padding: 0 1.5rem; }
          .story-stats { grid-template-columns: repeat(2, 1fr); }
          .story-headline { font-size: 2.8rem; margin-bottom: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default AboutV2;
