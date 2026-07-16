import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Wrench, X, Sparkles, ShieldCheck } from 'lucide-react';
import guitarImg from '../assets/pngwing.com.png';
import earthImg from '../assets/qimono-earth-1756274_1920.jpg';

const ConsultationFormV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', specs: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="ending-section" id="consultation">
      
      {/* ── BREATHTAKING ENDING SCENE BACKDROP ── */}
      <div className="ending-stars" />
      <div className="ending-nebula" />

      {/* Sunrise Earth lower half */}
      <div className="ending-earth-arc">
        <div className="ending-earth-img" style={{ backgroundImage: `url(${earthImg})` }} />
        <div className="ending-earth-corona" />
        <div className="ending-sunrise-flare" />
      </div>

      {/* Blue energy waves passing through background */}
      <div className="ending-energy-stream es-1" />
      <div className="ending-energy-stream es-2" />

      <div className="ending-inner">
        {/* Floating Featured Guitar illuminated by sunrise */}
        <div className="ending-guitar-showcase">
          <motion.div
            className="ending-guitar-wrap"
            animate={{
              y: [0, -20, 0],
              rotate: [15, 18, 15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <img 
              src={guitarImg} 
              alt="Galaxy Custom Guitar" 
              className="ending-guitar-img"
            />
            {/* Sunrise lighting overlay on the guitar */}
            <div className="ending-guitar-sunrise-sheen" />
          </motion.div>
        </div>

        {/* Cinematic Headline & Call to Action */}
        <div className="ending-text-block">
          <motion.h2 
            className="ending-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            YOUR NEXT GUITAR<br />
            <span className="h-accent">ISN'T BUILT.</span>
            <br />
            <br />
            IT'S CRAFTED<br />
            <span className="h-accent">FOR YOU.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <button className="ending-cta-btn" onClick={() => setIsOpen(true)}>
              <span>Begin Your Custom Build</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── LUXURY CONFIGURATION DIALOG OVERLAY (MODAL) ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="modal-backdrop-blur">
            <motion.div 
              className="modal-panel"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close Button */}
              <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>

              <div className="modal-inner-content">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="modal-form">
                    <div className="modal-header">
                      <Sparkles size={16} className="modal-header-icon" />
                      <span className="modal-eyebrow">CUSTOM ALLOCATION PROTOCOL</span>
                      <h3 className="modal-title">Luthier Specification Request</h3>
                      <p className="modal-desc">
                        Every build begins with a conversation. Detail your preferences below and a custom shop representative will connect to lock your specifications.
                      </p>
                    </div>

                    <div className="modal-fields">
                      <div className="modal-field">
                        <label className="modal-label">Your Name</label>
                        <input 
                          type="text" 
                          placeholder="Commander / Full Name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="modal-input"
                        />
                      </div>

                      <div className="modal-field">
                        <label className="modal-label">Contact Beacon (Email)</label>
                        <input 
                          type="email" 
                          placeholder="beacon@universe.com" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="modal-input"
                        />
                      </div>

                      <div className="modal-field">
                        <label className="modal-label">Build Preferences (Wood, Pickups, Sleeving details)</label>
                        <textarea 
                          placeholder="Describe your ideal custom shop setup..." 
                          rows={4}
                          value={formData.specs}
                          onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                          className="modal-textarea"
                        />
                      </div>
                    </div>

                    <button type="submit" className="modal-submit-btn">
                      Submit Specifications <Wrench size={14} />
                    </button>
                  </form>
                ) : (
                  <div className="modal-success">
                    <div className="success-badge">
                      <ShieldCheck size={36} />
                    </div>
                    <h3 className="success-title">SPECIFICATIONS QUEUED</h3>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. Our custom shop team has received your beacon. An engineer will initialize contact within 24 hours.
                    </p>
                    <button className="modal-close-confirm" onClick={() => { setIsOpen(false); setSubmitted(false); setFormData({ name: '', email: '', specs: '' }); }}>
                      Close Connection
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .ending-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          padding: 8rem 0 16rem;
          box-sizing: border-box;
          isolation: isolate;
        }

        /* Backdrop layers */
        .ending-stars {
          position: absolute; inset: 0; z-index: -3; pointer-events: none;
          background-image: radial-gradient(1px 1px at 80px 120px, rgba(255,255,255,0.18), transparent);
          background-size: 200px 200px;
        }
        .ending-nebula {
          position: absolute; inset: 0; z-index: -2; pointer-events: none;
          background: radial-gradient(circle at 50% 60%, rgba(0, 229, 255, 0.04) 0%, transparent 65%);
          filter: blur(80px);
        }

        /* Earth Arc in the lower viewport */
        .ending-earth-arc {
          position: absolute;
          left: -10%; right: -10%; bottom: -500px;
          height: 900px;
          border-radius: 50%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
          background: #020208;
          box-shadow: 
            0 0 100px rgba(0, 229, 255, 0.18),
            inset 0 60px 120px rgba(0, 229, 255, 0.25);
        }
        .ending-earth-img {
          width: 100%; height: 100%;
          background-size: cover;
          background-position: center top;
          opacity: 0.42;
          transform: rotate(-10deg);
        }
        .ending-earth-corona {
          position: absolute; inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 30px 100px rgba(0,229,255,0.4);
        }
        .ending-sunrise-flare {
          position: absolute;
          top: 0; left: 50%;
          transform: translate(-50%, -40%);
          width: 250px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%);
          filter: blur(35px);
        }

        /* Energy wave streams */
        .ending-energy-stream {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,0.18), transparent);
          z-index: -2; pointer-events: none;
        }
        .es-1 { top: 30%; animation: energySlide 9s infinite linear; }
        .es-2 { top: 60%; animation: energySlide 14s infinite linear reverse; }
        @keyframes energySlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .ending-inner {
          max-width: 1200px; width: 100%;
          padding: 0 4rem;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
        }

        /* Guitar column */
        .ending-guitar-showcase {
          display: flex; align-items: center; justify-content: center;
        }
        .ending-guitar-wrap {
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .ending-guitar-img {
          max-height: 580px;
          object-fit: contain;
          filter: 
            drop-shadow(0 40px 70px rgba(0,0,0,0.95))
            drop-shadow(0 0 30px rgba(0, 229, 255, 0.25));
        }

        /* Text column */
        .ending-text-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .ending-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2.5rem, 5.5vw, 4.2rem);
          font-weight: 900;
          color: #fff;
          line-height: 0.95;
          letter-spacing: -0.01em;
          margin: 0 0 3rem 0;
        }
        .ending-headline .h-accent {
          color: #fff;
          text-shadow: 
            0 0 35px rgba(0,229,255,0.45),
            0 0 70px rgba(0,229,255,0.15);
        }

        /* Premium CTA Button */
        .ending-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.78rem; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 1.1rem 2.4rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 0 15px rgba(255,255,255,0.02);
        }
        .ending-cta-btn:hover {
          border-color: #00e5ff;
          color: #00e5ff;
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.18);
          transform: translateY(-2px);
        }

        /* ── MODAL WINDOW STYLING ── */
        .modal-backdrop-blur {
          position: fixed;
          inset: 0;
          background: rgba(3, 4, 12, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          box-sizing: border-box;
        }

        .modal-panel {
          position: relative;
          background: rgba(8, 9, 24, 0.85);
          backdrop-filter: blur(35px) saturate(180%);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 3rem 2.5rem;
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          box-shadow: 
            0 40px 80px rgba(0,0,0,0.9),
            0 0 50px rgba(0, 229, 255, 0.1);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: transparent; border: none;
          color: rgba(255,255,255,0.4);
          cursor: pointer; transition: color 0.3s;
        }
        .modal-close-btn:hover { color: #fff; }

        .modal-header {
          margin-bottom: 2rem;
          text-align: left;
        }
        .modal-eyebrow {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem; font-weight: 800; letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3); display: block; margin-bottom: 0.6rem;
        }
        .modal-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 1.35rem; font-weight: 800; color: #fff;
          margin: 0 0 0.6rem;
        }
        .modal-desc {
          font-size: 0.82rem; color: rgba(255,255,255,0.45);
          line-height: 1.5; font-weight: 300; margin: 0;
        }

        .modal-fields {
          display: flex; flex-direction: column; gap: 1.2rem;
          margin-bottom: 2.2rem;
        }

        .modal-field {
          display: flex; flex-direction: column; gap: 0.4rem;
          text-align: left;
        }
        .modal-label {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35); text-transform: uppercase;
        }

        .modal-input, .modal-textarea {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          color: #fff;
          font-family: monospace; font-size: 0.72rem;
          padding: 0.85rem 1rem;
          box-sizing: border-box;
          transition: all 0.3s;
        }
        .modal-input:focus, .modal-textarea:focus {
          outline: none; border-color: rgba(0, 229, 255, 0.4);
          background: rgba(0,229,255,0.02);
        }

        .modal-submit-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: #fff;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 1rem; border-radius: 4px;
          cursor: pointer; transition: all 0.3s;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
        }
        .modal-submit-btn:hover {
          border-color: #00e5ff; color: #00e5ff;
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.18);
        }

        /* Success state inside modal */
        .modal-success {
          display: flex; flex-direction: column; align-items: center;
          padding: 1rem 0;
        }
        .success-badge {
          width: 64px; height: 64px; border-radius: 50%;
          border: 1px solid #00e5ff; color: #00e5ff;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(0,229,255,0.25);
        }
        .success-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.95rem; font-weight: 800; letter-spacing: 0.18em;
          color: #fff; margin: 0 0 0.6rem;
        }
        .success-desc {
          font-size: 0.85rem; color: rgba(255,255,255,0.45);
          line-height: 1.6; text-align: center; margin-bottom: 2.2rem;
        }
        .modal-close-confirm {
          background: transparent; border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.6); padding: 0.75rem 1.8rem; border-radius: 4px;
          cursor: pointer; font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
          transition: all 0.3s;
        }
        .modal-close-confirm:hover { border-color: #fff; color: #fff; }

        @media (max-width: 1024px) {
          .ending-inner { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .ending-guitar-img { max-height: 380px; }
          .ending-text-block { align-items: center; }
        }
      `}</style>
    </section>
  );
};

export default ConsultationFormV2;
