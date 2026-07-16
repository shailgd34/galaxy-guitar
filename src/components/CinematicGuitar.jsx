import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import guitarPng from '../assets/gitar.png';

const CinematicGuitar = () => {
  const containerRef = useRef(null);

  // Hook into scroll progress to animate camera transitions
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // 1. Camera Zoom, Shift, and Rotate on scroll
  // Note: Since gitar.png is horizontal (3392x1216), we rotate it by -90deg to stand it vertical (upright).
  // Hero: Centered horizontally, translated downwards (y=220px), scale=0.85, tilt=-78deg (upright with slight tilt)
  // HUD: Pinned left-shifted x=-20%, y=0px, scale=1.25, straight vertical=-90deg
  // Exit: Fades out, zooms close scale=2.5
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.54, 0.65], [0.85, 1.25, 1.25, 2.5]);
  const xTranslate = useTransform(scrollYProgress, [0, 0.15, 0.54, 0.65], ["0%", "-20%", "-20%", "-45%"]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.15, 0.54, 0.65], ["220px", "0px", "0px", "-100px"]);
  const rotate = useTransform(scrollYProgress, [0, 0.15], [-78, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.54, 0.64], [1, 1, 0]);

  // 2. Individual callout opacity maps (fades in sequentially based on scroll, stays visible until exit)
  const op1 = useTransform(scrollYProgress, [0.12, 0.17, 0.54, 0.58], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.18, 0.23, 0.54, 0.58], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.24, 0.29, 0.54, 0.58], [0, 1, 1, 0]);
  const op4 = useTransform(scrollYProgress, [0.30, 0.35, 0.54, 0.58], [0, 1, 1, 0]);

  // 3. Individual line dash offset controls (drawing lines synchronously on scroll)
  const dash1 = useTransform(scrollYProgress, [0.12, 0.17], [60, 0]);
  const dash2 = useTransform(scrollYProgress, [0.18, 0.23], [60, 0]);
  const dash3 = useTransform(scrollYProgress, [0.24, 0.29], [60, 0]);
  const dash4 = useTransform(scrollYProgress, [0.30, 0.35], [60, 0]);

  // Floating oscillations (pitch, roll, float) using CSS keyframes
  const floatTransition = {
    duration: 6.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut"
  };

  // HUD Callouts specifications (Re-aligned coordinates for vertical upright guitar position)
  const hudCallouts = [
    {
      id: 1,
      dotX: 50,
      dotY: 28,
      lineX: 92,
      lineY: 26,
      title: "01 // CYBER-FRET TELEMETRY",
      desc: "Millimeter-calibrated fret spacing optimized to lock with custom protectors.",
      opacityVal: op1,
      dashVal: dash1
    },
    {
      id: 2,
      dotX: 50,
      dotY: 53,
      lineX: 92,
      lineY: 45,
      title: "02 // INVADER COIL CORE",
      desc: "High-output custom humbucker pickups delivering a calibrated, deep-space resonance.",
      opacityVal: op2,
      dashVal: dash2
    },
    {
      id: 3,
      dotX: 47,
      dotY: 48,
      lineX: 92,
      lineY: 63,
      title: "03 // LIQUID CYBER TOP",
      desc: "High-contrast bookmatched flamed maple top finished in liquid ocean stain.",
      opacityVal: op3,
      dashVal: dash3
    },
    {
      id: 4,
      dotX: 50,
      dotY: 67,
      lineX: 92,
      lineY: 82,
      title: "04 // BIOMECHANICAL ANCHORS",
      desc: "Reinforced bridge mounts engineered in partnership with prosthetic firms.",
      opacityVal: op4,
      dashVal: dash4
    }
  ];

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '750px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        pointerEvents: 'none'
      }}
      className="guitar-viewport-wrapper"
    >
      <motion.div
        style={{
          scale,
          opacity,
          x: xTranslate,
          y: yTranslate,
          rotate, // Rotation links directly to scroll, straightens up vertically
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {/* Floating, tilting 3D container */}
        <motion.div
          animate={{
            y: [-12, 12],
            rotateX: [-5, 5],
            rotateY: [-8, 8],
            rotateZ: [-1, 1]
          }}
          transition={{
            y: floatTransition,
            rotateX: { ...floatTransition, duration: 9.5 },
            rotateY: { ...floatTransition, duration: 12.5 },
            rotateZ: { ...floatTransition, duration: 14.5 }
          }}
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
            width: '60%',
            height: '80%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="guitar-floating-body"
        >
          {/* Main Guitar Image */}
          <img 
            src={guitarPng} 
            alt="TRB-3 Invader Custom" 
            style={{
              maxHeight: '92%',
              maxWidth: '92%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.85))'
            }}
          />
        </motion.div>

        {/* Holographic HUD Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
          className="holographic-hud-layer"
        >
          {/* HUD Lines SVG */}
          <svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 7
            }}
          >
            <defs>
              <linearGradient id="hudGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <filter id="neonFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.0" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing HUD Lines (draw progress bound directly to scroll) */}
            <g filter="url(#neonFilter)">
              {hudCallouts.map((callout) => (
                <motion.path 
                  key={callout.id}
                  d={`M ${callout.dotX} ${callout.dotY} C ${(callout.dotX + callout.lineX)/2} ${callout.dotY}, ${(callout.dotX + callout.lineX)/2} ${callout.lineY}, ${callout.lineX} ${callout.lineY}`}
                  fill="none"
                  stroke="url(#hudGlow)"
                  strokeWidth="0.15"
                  strokeDasharray="60"
                  style={{
                    strokeDashoffset: callout.dashVal,
                    opacity: callout.opacityVal
                  }}
                />
              ))}
            </g>
          </svg>

          {/* Render Blinking Hotspot Dots & Text Cards */}
          {hudCallouts.map((callout) => (
            <React.Fragment key={callout.id}>
              {/* Blinking Hotspot Dot */}
              <motion.div 
                style={{
                  position: 'absolute',
                  left: `${callout.dotX}%`,
                  top: `${callout.dotY}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  border: '2px solid #fff',
                  boxShadow: '0 0 15px rgba(0, 229, 255, 0.8)',
                  zIndex: 8,
                  opacity: callout.opacityVal
                }}
                className="blinking-dot"
              ></motion.div>

              {/* Holographic Text Panel */}
              <motion.div 
                style={{
                  position: 'absolute',
                  left: `${callout.lineX}%`,
                  top: `${callout.lineY}%`,
                  transform: 'translateY(-50%)',
                  width: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  zIndex: 8,
                  opacity: callout.opacityVal
                }}
                className="hud-text-card"
              >
                <h4 style={{ 
                  color: '#fff', 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-display)',
                  textShadow: '0 0 10px rgba(255,255,255,0.1)'
                }}>
                  {callout.title}
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.75rem', 
                  lineHeight: '1.4',
                  fontWeight: 300
                }}>
                  {callout.desc}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <style>{`
        .blinking-dot {
          animation: pulseGlow 2s infinite ease-in-out;
        }
        @keyframes pulseGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.6; }
        }
        @media (max-width: 991px) {
          .hud-text-card {
            display: none !important;
          }
          .guitar-floating-body {
            width: 85% !important;
            height: 85% !important;
          }
        }
        @media (max-width: 768px) {
          .guitar-viewport-wrapper {
            max-width: 440px !important;
            height: 440px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicGuitar;
