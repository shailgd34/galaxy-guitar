import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Compass, Shield, Wrench, Eye, Globe, MessageSquare } from 'lucide-react';

const timelineSteps = [
  {
    id: '01',
    title: 'Consultation',
    icon: MessageSquare,
    phase: 'PHASE_01 // COMMUNICATIONS',
    telemetry: 'SYS_CONN: ACTIVE // LATENCY: 22ms',
    desc: 'Initial custom shop briefing. We discuss body geometry, neck profile preferences, wood selection, and specific playing requirements.',
  },
  {
    id: '02',
    title: 'Personal Design',
    icon: Compass,
    phase: 'PHASE_02 // SYSTEM_SCHEMATICS',
    telemetry: 'CAD_MODEL: V4.12 // RENDERS: COMPILED',
    desc: 'Our engineers draft customized CAD orthographic blueprints. Scale dimensions and weight parameters are fine-tuned to your hands.',
  },
  {
    id: '03',
    title: 'Engineering Review',
    icon: Radio,
    phase: 'PHASE_03 // ORBITAL_CALIBRATION',
    telemetry: 'RESONANCE: 432 HZ // TOLERANCE: ±0.01mm',
    desc: 'Structural resonance and material tension metrics are simulated to ensure peak acoustics and longevity of the compound finger sleeving.',
  },
  {
    id: '04',
    title: 'Customer Approval',
    icon: Eye,
    phase: 'PHASE_04 // COMM_LINK_VERIFIED',
    telemetry: 'USER_AUTH: PENDING // SIGNAL: STRONG',
    desc: 'High-fidelity technical renders and specifications sheets are transmitted to you for final feedback, configuration locks, and signature.',
  },
  {
    id: '05',
    title: 'Hand Crafting',
    icon: Wrench,
    phase: 'PHASE_05 // CORE_MATRICES',
    telemetry: 'MATERIAL: ALDER_MAPLE // STATUS: IN_PROGRESS',
    desc: 'Luthiers hand-carve the body core, set the frets, route pickguard cavities, and spray multiple layers of premium nitrocellulose.',
  },
  {
    id: '06',
    title: 'Quality Inspection',
    icon: Shield,
    phase: 'PHASE_06 // SYSTEM_DIAGNOSTICS',
    telemetry: 'ACCURACY: 100% // SCAN_DIAG: VERIFIED',
    desc: 'Microscopic fret inspections, laser intonation sweeps, electronic shielding checks, and dynamic playing tests by master inspectors.',
  },
  {
    id: '07',
    title: 'Worldwide Shipping',
    icon: Globe,
    phase: 'PHASE_07 // DEPLOYMENT_VECTOR',
    telemetry: 'TRANSIT: FLIGHT_MODE // ETA: CALIBRATING',
    desc: 'Secured inside a customized vacuum-sealed flight-case, your custom shop instrument is dispatched via express global transit.',
  },
];

const MissionControlTimelineV2 = () => {
  return (
    <section className="mct-section" id="mission-timeline">
      
      {/* Space Background */}
      <div className="mct-space-bg" />
      <div className="mct-space-nebula" />
      
      {/* Vertical Flight Tracker Grid lines */}
      <div className="mct-grid-line gl-left" />
      <div className="mct-grid-line gl-right" />

      <div className="mct-inner">
        
        {/* Header */}
        <motion.div
          className="mct-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="mct-hud-badge">FLIGHT PATH PROTOCOL // GALAXY CUSTOMS</span>
          <h2 className="mct-title">Mission Control Timeline</h2>
          <p className="mct-subtitle">Tracing the exact lifecycle of custom shop engineering, step-by-step.</p>
        </motion.div>

        {/* Timeline Pipeline */}
        <div className="mct-pipeline">
          
          {/* Central Laser Path Line */}
          <div className="mct-laser-track">
            <motion.div 
              className="mct-laser-fill"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps */}
          {timelineSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={step.id} 
                className={`mct-step-block ${isLeft ? 'left-align' : 'right-align'}`}
              >
                
                {/* Orbital Station Node (Center) */}
                <div className="mct-node-anchor">
                  <motion.div 
                    className="mct-node-ring"
                    initial={{ scale: 0.7, opacity: 0.3 }}
                    whileInView={{ 
                      scale: [1, 1.15, 1], 
                      opacity: 1,
                      borderColor: '#00e5ff',
                      boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
                    }}
                    viewport={{ once: false, margin: '-15%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <div className="mct-node-core">
                      <span className="mct-node-id">{step.id}</span>
                    </div>
                  </motion.div>
                  
                  {/* Glowing vertical connector lines */}
                  <div className="mct-node-wing" />
                </div>

                {/* HUD Information Panel (Side) */}
                <motion.div 
                  className="mct-hud-panel"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mct-panel-header">
                    <step.icon size={14} className="panel-icon" />
                    <span className="phase-lbl">{step.phase}</span>
                    <span className="ping-dot" />
                  </div>
                  
                  <div className="mct-panel-body">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>

                  <div className="mct-panel-footer">
                    <span className="telemetry-log">{step.telemetry}</span>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>

      </div>

      <style>{`
        .mct-section {
          position: relative;
          padding: 8rem 0;
          background: transparent;
          overflow: hidden;
          isolation: isolate;
        }

        /* Twinkling star space background */
        .mct-space-bg {
          position: absolute; inset: 0; z-index: -3; pointer-events: none;
          background-image: 
            radial-gradient(1px 1px at 30px 50px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, rgba(0, 229, 255, 0.2), transparent);
          background-size: 300px 300px;
        }

        .mct-space-nebula {
          position: absolute; inset: 0; z-index: -2; pointer-events: none;
          background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.04) 0%, rgba(138, 43, 226, 0.03) 50%, transparent 80%);
          filter: blur(80px);
        }

        /* Outer HUD vertical layout grid lines */
        .mct-grid-line {
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.03) 80%, transparent);
          z-index: 1; pointer-events: none;
        }
        .gl-left { left: 10%; }
        .gl-right { right: 10%; }

        .mct-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
          z-index: 5;
        }

        /* Header design */
        .mct-header {
          text-align: center;
          margin-bottom: 7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mct-hud-badge {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.25);
          background: rgba(0, 229, 255, 0.04);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          margin-bottom: 1.2rem;
          text-shadow: 0 0 8px rgba(0, 229, 255, 0.3);
        }

        .mct-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 0.8rem 0;
          letter-spacing: -0.01em;
        }

        .mct-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 300;
          max-width: 480px;
          margin: 0;
        }

        /* Pipeline wrapper */
        .mct-pipeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5rem;
          width: 100%;
        }

        /* Central laser track path */
        .mct-laser-track {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(-50%);
          z-index: 1;
        }
        .mct-laser-fill {
          width: 100%;
          background: linear-gradient(180deg, #00e5ff, #8a2be2, #00e5ff);
          box-shadow: 0 0 10px #00e5ff, 0 0 20px rgba(0, 229, 255, 0.4);
        }

        /* Step Block Layout */
        .mct-step-block {
          position: relative;
          display: flex;
          width: 100%;
          align-items: center;
          box-sizing: border-box;
        }

        /* Alignments */
        .left-align {
          justify-content: flex-start;
          padding-right: 50%;
        }
        .right-align {
          justify-content: flex-end;
          padding-left: 50%;
        }

        /* Central Anchor points */
        .mct-node-anchor {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mct-node-ring {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #020208;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
        }

        .mct-node-core {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mct-node-id {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.65rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Connector line from node to card */
        .mct-node-wing {
          position: absolute;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 229, 255, 0.3), transparent);
          z-index: -1;
          display: none; /* hidden on small screen, clean editorial look */
        }
        .left-align .mct-node-wing {
          right: 42px;
          transform: rotate(180deg);
        }
        .right-align .mct-node-wing {
          left: 42px;
        }

        /* NASA HUD Spec cards (borders & background clean style, no box border solid) */
        .mct-hud-panel {
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          border-left: 2px solid rgba(0, 229, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 1.4rem 1.8rem;
          width: 90%;
          max-width: 450px;
          transition: all 0.3s ease;
        }
        .mct-hud-panel:hover {
          border-left-color: #00e5ff;
          background: rgba(0, 229, 255, 0.01);
          box-shadow: inset 1px 0 0 rgba(0, 229, 255, 0.3);
        }

        .left-align .mct-hud-panel {
          margin-right: 5rem;
          margin-left: auto;
        }
        .right-align .mct-hud-panel {
          margin-left: 5rem;
          margin-right: auto;
        }

        /* Panel Header styling */
        .mct-panel-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }
        .panel-icon {
          color: rgba(255, 255, 255, 0.45);
        }
        .phase-lbl {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.55rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.15em;
        }
        .ping-dot {
          width: 5px;
          height: 5px;
          background: #00e5ff;
          border-radius: 50%;
          margin-left: auto;
          box-shadow: 0 0 6px #00e5ff;
          animation: statusPing 1.8s infinite ease-in-out;
        }
        @keyframes statusPing {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .step-title {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.02em;
        }

        .step-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.42);
          line-height: 1.65;
          margin: 0;
          font-weight: 300;
        }

        .mct-panel-footer {
          margin-top: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 0.8rem;
        }

        .telemetry-log {
          font-family: monospace;
          font-size: 0.58rem;
          color: rgba(0, 229, 255, 0.45);
          letter-spacing: 0.08em;
        }

        /* Responsive Layouts */
        @media (max-width: 900px) {
          .mct-laser-track {
            left: 20px;
          }
          .mct-node-anchor {
            left: 20px;
          }
          .left-align, .right-align {
            padding-left: 55px;
            padding-right: 0;
            justify-content: flex-start;
          }
          .left-align .mct-hud-panel, .right-align .mct-hud-panel {
            margin-left: 0;
            margin-right: 0;
            width: 100%;
            max-width: 100%;
          }
          .gl-left, .gl-right {
            display: none;
          }
          .mct-inner {
            padding: 0 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionControlTimelineV2;
