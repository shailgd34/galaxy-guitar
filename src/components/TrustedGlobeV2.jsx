import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Radio, Shield, HelpCircle, Navigation } from 'lucide-react';

const activeDestinations = [
  { city: 'LOS ANGELES', coord: '34.05° N, 118.24° W', sector: 'SEC_01 // ACTIVE', latency: '24ms' },
  { city: 'LONDON', coord: '51.50° N, 0.12° W', sector: 'SEC_02 // ACTIVE', latency: '48ms' },
  { city: 'TOKYO', coord: '35.67° N, 139.65° E', sector: 'SEC_09 // ACTIVE', latency: '82ms' },
  { city: 'SYDNEY', coord: '33.86° S, 151.20° E', sector: 'SEC_07 // ACTIVE', latency: '112ms' },
  { city: 'MUNICH', coord: '48.13° N, 11.58° E', sector: 'SEC_03 // ACTIVE', latency: '52ms' },
];

const TrustedGlobeV2 = () => {
  const [activeDestIdx, setActiveDestIdx] = useState(0);

  // Cycle telemetry panel destinations
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDestIdx((prev) => (prev + 1) % activeDestinations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const dest = activeDestinations[activeDestIdx];

  return (
    <section className="tgv-section" id="trusted-globe">

      {/* Space Backdrop */}
      <div className="tgv-space-stars" />
      <div className="tgv-nebula" />

      <div className="tgv-inner">

        {/* Left Column: Mission Control Telemetry */}
        <div className="tgv-telemetry-col">
          <motion.div
            className="tgv-header-block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="tgv-hud-badge">GLOBAL CONVERGENCE NETWORK</span>
            <h2 className="tgv-title">Trusted Across The Planet</h2>
            <p className="tgv-subtitle">
              Handcrafted in the USA. Playing everywhere in the galaxy.
            </p>
          </motion.div>

          {/* NASA HUD Console Card */}
          <div className="tgv-console">
            <div className="tgv-console-header">
              <Radio size={14} className="console-icon blink" />
              <span className="console-title">LIVE ROUTING LOGS</span>
              <div className="status-indicator">SYSTEM STATE: NOMINAL</div>
            </div>

            <div className="tgv-console-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={dest.city}
                  className="tgv-console-slide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="tgv-log-row">
                    <span className="log-label">DESTINATION:</span>
                    <span className="log-val city-highlight">{dest.city}</span>
                  </div>
                  <div className="tgv-log-row">
                    <span className="log-label">COORDINATES:</span>
                    <span className="log-val">{dest.coord}</span>
                  </div>
                  <div className="tgv-log-row">
                    <span className="log-label">SYS VECTOR:</span>
                    <span className="log-val">{dest.sector}</span>
                  </div>
                  <div className="tgv-log-row">
                    <span className="log-label">CONN PING:</span>
                    <span className="log-val latency-highlight">{dest.latency}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="tgv-console-footer">
              <div className="footer-line">ESTABLISHED VECTOR MATRIX: SEC_01-SEC_09 OK</div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic 3D Rotating Earth Sphere */}
        <div className="tgv-globe-col">
          <div className="tgv-globe-stage">

            {/* Outer Atmosphere Glow layers */}
            <div className="tgv-atmosphere-rim" />
            <div className="tgv-atmosphere-glow" />

            {/* Subtle Satellite Orbit Ring & Satellite */}
            <div className="tgv-satellite-orbit">
              <div className="tgv-satellite" />
            </div>

            {/* Earth Sphere Wrapper */}
            <div className="tgv-earth-sphere">

              {/* Layer 1: Continents Map Wrapper (Rotates horizontally via CSS) */}
              <div className="tgv-map-layer continents-layer" />

              {/* Layer 2: Cloud Layer (Rotates slightly faster/slower for realism) */}
              <div className="tgv-map-layer clouds-layer" />

              {/* Layer 3: Night Light / City Glow Spots */}
              <div className="tgv-city-lights">
                <div className="city-dot spot-la" />
                <div className="city-dot spot-london" />
                <div className="city-dot spot-tokyo" />
                <div className="city-dot spot-sydney" />
                <div className="city-dot spot-munich" />
              </div>

              {/* Laser connecting lines */}
              <svg className="tgv-connections-svg" viewBox="0 0 100 100">
                {/* LA to Tokyo beam */}
                <path d="M 30,45 Q 45,30 68,43" className="beam-path beam-1" />
                {/* London to Munich beam */}
                <path d="M 48,32 Q 50,34 52,36" className="beam-path beam-2" />
                {/* Tokyo to Sydney beam */}
                <path d="M 68,43 Q 72,55 70,72" className="beam-path beam-3" />
              </svg>

            </div>

            {/* Space Laboratory Tech Lines framing the globe */}
            <div className="tgv-frame-corner tl" />
            <div className="tgv-frame-corner tr" />
            <div className="tgv-frame-corner bl" />
            <div className="tgv-frame-corner br" />
            <div className="tgv-scale-measure" />

          </div>
        </div>

      </div>

      <style>{`
        .tgv-section {
          position: relative;
          padding: 4rem 0;
          background: transparent;
          overflow: hidden;
          isolation: isolate;
        }

        /* Space and stars background */
        .tgv-space-stars {
          position: absolute; inset: 0; z-index: -3; pointer-events: none;
          background-image: 
            radial-gradient(1px 1px at 40px 80px, rgba(255,255,255,0.25), transparent),
            radial-gradient(1.5px 1.5px at 150px 100px, rgba(0, 229, 255, 0.15), transparent);
          background-size: 200px 200px;
        }

        .tgv-nebula {
          position: absolute; inset: 0; z-index: -2; pointer-events: none;
          background: radial-gradient(circle at 75% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 60%);
          filter: blur(100px);
        }

        .tgv-inner {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        /* Telemetry Column */
        .tgv-telemetry-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .tgv-hud-badge {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          color: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 0.4rem 1rem;
          border-radius: 2px;
          margin-bottom: 1.2rem;
          display: inline-block;
        }

        .tgv-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 0.8rem;
          letter-spacing: -0.01em;
        }

        .tgv-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 300;
          max-width: 480px;
          margin: 0 0 3.5rem;
          line-height: 1.6;
        }

        /* NASA HUD console */
        .tgv-console {
          width: 100%;
          max-width: 420px;
          background: rgba(4, 6, 16, 0.7);
          backdrop-filter: blur(20px);
          border-top: 2px solid #00e5ff;
          padding: 1.5rem 1.8rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .tgv-console-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }

        .console-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #00e5ff;
        }

        .status-indicator {
          font-family: monospace;
          font-size: 0.52rem;
          color: rgba(255, 255, 255, 0.35);
          margin-left: auto;
        }

        .tgv-console-body {
          min-height: 110px;
        }

        .tgv-log-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          font-family: monospace;
          font-size: 0.72rem;
        }
        .tgv-log-row:last-child { border-bottom: none; }

        .log-label {
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.05em;
        }

        .log-val {
          color: rgba(255, 255, 255, 0.75);
          text-align: right;
        }

        .city-highlight {
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .latency-highlight {
          color: #00e5ff;
          text-shadow: 0 0 6px rgba(0, 229, 255, 0.3);
        }

        .tgv-console-footer {
          margin-top: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 0.8rem;
          font-family: monospace;
          font-size: 0.55rem;
          color: rgba(255,255,255,0.22);
          text-align: left;
        }

        .blink {
          animation: consoleBlink 1.5s infinite ease-in-out;
        }
        @keyframes consoleBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* Globe stage column */
        .tgv-globe-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tgv-globe-stage {
          position: relative;
          width: 420px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 229, 255, 0.06);
        }

        /* Dynamic HUD frame markers around globe */
        .tgv-frame-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: rgba(0, 229, 255, 0.2);
          border-style: solid;
          pointer-events: none;
        }
        .tgv-frame-corner.tl { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
        .tgv-frame-corner.tr { top: 12px; right: 12px; border-width: 1px 1px 0 0; }
        .tgv-frame-corner.bl { bottom: 12px; left: 12px; border-width: 0 0 1px 1px; }
        .tgv-frame-corner.br { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

        .tgv-scale-measure {
          position: absolute; bottom: 12px; left: 30px; right: 30px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.15) 20%, rgba(0,229,255,0.15) 80%, transparent);
        }

        /* 3D atmosphere halo */
        .tgv-atmosphere-rim {
          position: absolute; inset: 40px; border-radius: 50%;
          box-shadow: inset 0 0 45px rgba(0, 229, 255, 0.25);
          z-index: 10; pointer-events: none;
        }

        .tgv-atmosphere-glow {
          position: absolute; inset: 20px; border-radius: 50%;
          background: radial-gradient(circle, transparent 55%, rgba(0, 229, 255, 0.08) 70%, transparent 75%);
          z-index: 9; pointer-events: none;
        }

        /* Satellite orbit path & Satellite dot */
        .tgv-satellite-orbit {
          position: absolute;
          width: 480px;
          height: 160px;
          border-radius: 50%;
          border: 1px dashed rgba(0, 229, 255, 0.08);
          transform: rotateX(65deg) rotateY(-15deg);
          z-index: 12;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tgv-satellite {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 10px #00e5ff, 0 0 20px rgba(0,229,255,0.6);
          animation: orbitSatellite 14s linear infinite;
        }

        @keyframes orbitSatellite {
          from { transform: rotate(0deg) translateX(240px); }
          to   { transform: rotate(360deg) translateX(240px); }
        }

        /* The Earth Sphere */
        .tgv-earth-sphere {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: #03030f;
          box-shadow: 
            0 15px 45px rgba(0,0,0,0.95), 
            inset -30px -30px 60px rgba(0,0,0,0.9);
          overflow: hidden;
          z-index: 5;
        }

        /* Moving map & clouds texture layer */
        .tgv-map-layer {
          position: absolute;
          top: 0; left: 0; width: 200%; height: 100%;
          background-size: 50% 100%;
          background-repeat: repeat-x;
        }

        /* Holographic continents (repeating vector outline) */
        .continents-layer {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300" opacity="0.32"><path fill="%2300e5ff" d="M 40,70 Q 55,60 70,80 T 110,65 T 150,90 T 180,60 T 210,120 T 180,180 T 130,220 T 60,190 T 30,120 Z M 350,90 Q 370,75 390,95 T 440,80 T 480,110 T 520,70 T 550,140 T 500,210 T 430,230 T 360,180 Z M 270,160 Q 285,150 300,170 T 320,200 T 290,220 Z"/></svg>');
          animation: rotateGlobe 35s linear infinite;
          opacity: 0.85;
          z-index: 1;
        }

        /* Realistic moving clouds */
        .clouds-layer {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300" opacity="0.15"><circle cx="80" cy="90" r="35" fill="white" filter="blur(10px)"/><circle cx="160" cy="140" r="45" fill="white" filter="blur(15px)"/><circle cx="420" cy="110" r="40" fill="white" filter="blur(12px)"/><circle cx="480" cy="180" r="50" fill="white" filter="blur(15px)"/></svg>');
          animation: rotateGlobe 26s linear infinite;
          opacity: 0.9;
          z-index: 2;
          mix-blend-mode: screen;
        }

        @keyframes rotateGlobe {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Night cities glow spots */
        .tgv-city-lights {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .city-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ffb703;
          box-shadow: 0 0 8px #ffb703, 0 0 16px rgba(255, 183, 3, 0.8);
          animation: cityBlink 2.5s infinite alternate;
        }
        .spot-la { top: 45%; left: 30%; }
        .spot-london { top: 32%; left: 48%; }
        .spot-munich { top: 36%; left: 52%; }
        .spot-tokyo { top: 43%; left: 68%; }
        .spot-sydney { top: 72%; left: 70%; }

        @keyframes cityBlink {
          0% { opacity: 0.4; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.3); }
        }

        /* Connections beams paths */
        .tgv-connections-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          pointer-events: none;
        }

        .beam-path {
          fill: none;
          stroke: #00e5ff;
          stroke-width: 0.8;
          stroke-dasharray: 4 4;
          opacity: 0.75;
          animation: strokeAnim 2.5s linear infinite;
        }
        
        @keyframes strokeAnim {
          to { stroke-dashoffset: -20; }
        }

        /* Responsive Layouts */
        @media (max-width: 1024px) {
          .tgv-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .tgv-telemetry-col {
            align-items: center;
          }
          .tgv-globe-stage {
            width: 380px;
            height: 380px;
          }
          .tgv-earth-sphere {
            width: 280px;
            height: 280px;
          }
          .tgv-satellite-orbit {
            width: 420px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedGlobeV2;
