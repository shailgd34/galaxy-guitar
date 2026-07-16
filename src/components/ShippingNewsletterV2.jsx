import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';
import earthImg from '../assets/qimono-earth-1756274_1920.jpg';

const ShippingNewsletterV2 = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="portal-section" id="newsletter">
      {/* Space & Earth Background Grid */}
      <div className="portal-space-bg" />
      
      {/* Floating Earth Sphere behind portal */}
      <div className="portal-earth-container">
        <div className="portal-earth-bg" style={{ backgroundImage: `url(${earthImg})` }} />
        <div className="portal-earth-shadow" />
      </div>

      {/* Floating Space Particles */}
      <div className="portal-particles">
        <span className="p-dot pd-1" />
        <span className="p-dot pd-2" />
        <span className="p-dot pd-3" />
        <span className="p-dot pd-4" />
        <span className="p-dot pd-5" />
      </div>

      <div className="portal-inner">
        {/* The Glowing Cosmic Portal */}
        <motion.div 
          className="cosmic-portal-frame"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner portal swirls */}
          <div className="portal-glow-ring" />
          <div className="portal-swirl" />
          <div className="portal-energy-pulse" />

          {/* Form Content */}
          <div className="portal-content-box">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="portal-badge">
                <Sparkles size={12} className="badge-spark" />
                <span>MEMBERSHIP PROTOCOL</span>
              </div>
              <h2 className="portal-headline">Join The Galaxy</h2>
              <p className="portal-subheading">
                Become part of an exclusive community receiving new releases, behind-the-scenes craftsmanship, and special offers.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="portal-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="portal-input-wrap">
                    <Mail size={16} className="input-mail-icon" />
                    <input 
                      type="email" 
                      placeholder="ENTER CONTACT BEACON (EMAIL)" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="portal-input-field"
                    />
                  </div>
                  
                  <button type="submit" className="portal-submit-btn">
                    <span>Initialize Sync</span>
                    <Send size={14} className="send-icon" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="thanks"
                  className="portal-thanks"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="thanks-checkmark">✓</div>
                  <h4 className="thanks-title">CONNECTION ESTABLISHED</h4>
                  <p className="thanks-desc">Your contact beacon is verified. Welcome to the fleet.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Portal Stats Line */}
            <div className="portal-telemetry-status">
              <span>SYNC STATE: STANDBY</span>
              <span>•</span>
              <span>VECTOR LINK: 100% ONLINE</span>
            </div>
          </div>

        </motion.div>
      </div>

      <style>{`
        .portal-section {
          position: relative;
          padding: 12rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          isolation: isolate;
        }

        .portal-space-bg {
          position: absolute; inset: 0; z-index: -3; pointer-events: none;
          background-image: 
            radial-gradient(1px 1px at 50px 100px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 200px 300px, rgba(0, 229, 255, 0.15), transparent);
          background-size: 300px 300px;
        }

        /* Floating Earth behind the portal */
        .portal-earth-container {
          position: absolute;
          width: 500px;
          height: 500px;
          right: -100px;
          bottom: -150px;
          border-radius: 50%;
          z-index: -2;
          pointer-events: none;
          transform: rotate(-15deg);
        }
        .portal-earth-bg {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          opacity: 0.38;
          animation: floatEarthSlow 40s linear infinite;
        }
        @keyframes floatEarthSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .portal-earth-shadow {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: radial-gradient(circle, transparent 40%, rgba(3,7,18,0.95) 85%);
          box-shadow: inset -50px -50px 100px rgba(0,0,0,0.95);
        }

        /* Floating tiny particles */
        .portal-particles {
          position: absolute; inset: 0; pointer-events: none; z-index: -1;
        }
        .p-dot {
          position: absolute; width: 3px; height: 3px; background: #00e5ff;
          border-radius: 50%; box-shadow: 0 0 8px #00e5ff;
        }
        .pd-1 { top: 25%; left: 15%; animation: floatParticle 8s infinite ease-in-out; }
        .pd-2 { top: 75%; left: 20%; animation: floatParticle 12s infinite ease-in-out 1s; }
        .pd-3 { top: 15%; left: 80%; animation: floatParticle 10s infinite ease-in-out 2s; }
        .pd-4 { top: 60%; left: 85%; animation: floatParticle 14s infinite ease-in-out 1.5s; }
        .pd-5 { top: 40%; left: 48%; animation: floatParticle 16s infinite ease-in-out 0.5s; }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(0.8); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.3); opacity: 1; }
        }

        .portal-inner {
          max-width: 1200px; width: 100%;
          padding: 0 4rem;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 5;
        }

        /* Glowing cosmic portal frame */
        .cosmic-portal-frame {
          position: relative;
          width: 100%;
          max-width: 680px;
          padding: 4.5rem 3rem;
          border-radius: 24px;
          background: rgba(4, 5, 15, 0.65);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 229, 255, 0.15);
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.85),
            inset 0 0 40px rgba(0, 229, 255, 0.04);
          overflow: hidden;
        }

        /* Swirling neon core */
        .portal-glow-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120%; height: 120%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%);
          z-index: 1; pointer-events: none;
        }

        .portal-swirl {
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 255, 0.08);
          animation: portalRotate 25s linear infinite;
          z-index: 2; pointer-events: none;
        }
        @keyframes portalRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .portal-energy-pulse {
          position: absolute;
          top: -20%; left: 50%;
          transform: translateX(-50%);
          width: 80%; height: 3px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent);
          z-index: 2; pointer-events: none;
          animation: energyScan 6s infinite ease-in-out;
        }
        @keyframes energyScan {
          0% { top: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }

        /* Content inside portal */
        .portal-content-box {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .portal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.58rem; font-weight: 800; letter-spacing: 0.35em;
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.25);
          background: rgba(0, 229, 255, 0.03);
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          margin-bottom: 2rem;
          text-shadow: 0 0 6px rgba(0,229,255,0.3);
        }

        .badge-spark {
          animation: consoleBlink 1.5s infinite;
        }

        .portal-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem 0;
          letter-spacing: -0.01em;
          text-shadow: 0 0 40px rgba(0,229,255,0.15);
        }

        .portal-subheading {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
          font-weight: 300;
          max-width: 520px;
          margin: 0 0 3rem 0;
        }

        /* Glassmorphic Form input */
        .portal-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
          max-width: 440px;
        }

        .portal-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .input-mail-icon {
          position: absolute;
          left: 1.2rem;
          color: rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        .portal-input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-family: monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          padding: 1.1rem 1.2rem 1.1rem 3rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .portal-input-field:focus {
          outline: none;
          border-color: rgba(0, 229, 255, 0.4);
          background: rgba(0, 229, 255, 0.02);
          box-shadow: 
            0 0 25px rgba(0, 229, 255, 0.08),
            inset 0 0 10px rgba(0, 229, 255, 0.02);
        }

        /* Submit Button emits subtle blue energy */
        .portal-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: transparent;
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: #fff;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 1.1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.35s ease;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.05);
        }

        .portal-submit-btn:hover {
          border-color: #00e5ff;
          color: #00e5ff;
          box-shadow: 
            0 0 25px rgba(0, 229, 255, 0.22),
            inset 0 0 10px rgba(0, 229, 255, 0.05);
          transform: translateY(-1px);
        }

        /* Thanks screen */
        .portal-thanks {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        }

        .thanks-checkmark {
          width: 54px; height: 54px; border-radius: 50%;
          border: 1px solid #00e5ff;
          color: #00e5ff;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.2rem;
          box-shadow: 0 0 15px rgba(0,229,255,0.25);
        }

        .thanks-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.82rem; font-weight: 800; letter-spacing: 0.2em;
          color: #fff; margin: 0 0 0.5rem 0;
        }

        .thanks-desc {
          font-size: 0.85rem; color: rgba(255,255,255,0.4);
          font-weight: 300; margin: 0;
        }

        .portal-telemetry-status {
          margin-top: 3.5rem;
          display: flex; gap: 1rem;
          font-family: monospace; font-size: 0.58rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.08em;
        }

        @media (max-width: 640px) {
          .portal-inner { padding: 0 1.5rem; }
          .cosmic-portal-frame { padding: 3rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default ShippingNewsletterV2;
