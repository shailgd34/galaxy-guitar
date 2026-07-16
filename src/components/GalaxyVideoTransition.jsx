import React from 'react';
import { motion } from 'framer-motion';
import galaxyVideo from '../assets/video/170480-843367912_medium.mp4';

const GalaxyVideoTransition = () => {
  return (
    <div className="video-transition-container">
      {/* Looping Ambient Cosmic Video */}
      <video 
        src={galaxyVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="transition-bg-video"
      />
      
      {/* Volumetric overlays to blend the video edges */}
      <div className="video-edge-overlay top-fade" />
      <div className="video-edge-overlay bottom-fade" />
      <div className="video-edge-overlay side-fade" />

      {/* Floating telemetry labels */}
      <div className="transition-hud-content">
        <motion.div 
          className="hud-telemetry-badge"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <span className="hud-pulse" />
          <span className="hud-label">ENTER INITIATING COGNITIVE LOGISTICS ZONE</span>
        </motion.div>
        <h3 className="hud-heading">WARPING INTO GALAXY SYSTEM</h3>
      </div>

      <style>{`
        .video-transition-container {
          position: relative;
          width: 100%;
          height: 50vh;
          overflow: hidden;
          background: #000;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .transition-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          filter: saturate(1.15) contrast(1.1);
        }

        /* Ambient Fades to integrate with deep black sections */
        .video-edge-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .top-fade {
          background: linear-gradient(180deg, #030712 0%, rgba(3, 7, 18, 0.4) 30%, transparent 100%);
        }
        .bottom-fade {
          background: linear-gradient(0deg, #030712 0%, rgba(3, 7, 18, 0.4) 30%, transparent 100%);
        }
        .side-fade {
          background: radial-gradient(circle, transparent 40%, rgba(3, 7, 18, 0.85) 100%);
        }

        /* Floating HUD content */
        .transition-hud-content {
          position: absolute;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .hud-telemetry-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          backdrop-filter: blur(8px);
        }
        .hud-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 10px #00e5ff;
          animation: hudDotPulse 1.6s infinite;
        }
        .hud-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: #00e5ff;
          letter-spacing: 0.15em;
          font-family: var(--font-display);
        }

        .hud-heading {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.2em;
          font-family: var(--font-display);
          text-transform: uppercase;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
        }

        @keyframes hudDotPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .video-transition-container { height: 35vh; }
          .hud-heading { font-size: 1.1rem; letter-spacing: 0.12em; }
        }
      `}</style>
    </div>
  );
};

export default GalaxyVideoTransition;
