import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, X } from 'lucide-react';
import galaxyVideo from '../assets/video/170480-843367912_medium.mp4';
import posterImg from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg'; // Another premium product image

const VideoSectionV2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Handle cursor lighting reaction
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const currentMute = videoRef.current.muted;
      videoRef.current.muted = !currentMute;
      setIsMuted(!currentMute);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="trailer-section-static"
      onMouseMove={handleMouseMove}
      id="trailer"
    >
      {/* Subtle Reacting Background Glow */}
      <div 
        className="trailer-bg-glow" 
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      <div className="trailer-container-inner">
        
        {/* Editorial Text Header */}
        <div className="trailer-header-text">
          <span className="trailer-badge">FEATURED SCHEMATIC</span>
          <h2 className="trailer-headline">Experience The Sound</h2>
          <p className="trailer-subheading">Watch Galaxy craftsmanship come alive.</p>
        </div>

        {/* Cinematic Movie Poster Video Player */}
        <div className="trailer-video-box-static">
          
          {/* Black Vignette Over Video */}
          <div className="trailer-darkness-overlay" />

          {/* Loop Video Player */}
          <video
            ref={videoRef}
            src={galaxyVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={posterImg}
            onTimeUpdate={handleTimeUpdate}
            className="trailer-native-video"
          />

          {/* HUD Tech Borders */}
          <div className="trailer-hud-corner tl" />
          <div className="trailer-hud-corner tr" />
          <div className="trailer-hud-corner bl" />
          <div className="trailer-hud-corner br" />

          {/* Player controls / buttons */}
          <div className="trailer-player-overlay">
            {!isPlaying ? (
              <motion.button 
                onClick={handlePlayClick}
                className="trailer-play-button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play Trailer"
              >
                <div className="play-glass-inner">
                  <Play size={30} fill="#fff" stroke="none" />
                </div>
              </motion.button>
            ) : (
              <div className="active-controls">
                <button onClick={toggleMute} className="control-btn mute-btn" title={isMuted ? "Unmute" : "Mute"}>
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button onClick={handleCloseClick} className="control-btn close-btn" title="Close">
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Custom Timeline Progress Bar */}
          <div className="trailer-timeline-track">
            <div className="trailer-timeline-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Telemetry Corner Info */}
          <div className="trailer-corner-specs">
            <span className="spec-item">AUDIO: DOLBY ATMOS 7.1</span>
            <span className="spec-item">STREAM: 4K HDR</span>
          </div>

          <div className="trailer-corner-telemetry">
            <span className="tel-item">COORD: RA 05H / DEC -05°</span>
            <span className="tel-item">RES: 432 HZ ACTIVE</span>
          </div>
        </div>

      </div>

      <style>{`
        .trailer-section-static {
          position: relative;
          padding: 6rem 2rem;
          background: transparent;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          isolation: isolate;
        }

        /* Reacting backlight */
        .trailer-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
          filter: blur(80px);
        }

        .trailer-container-inner {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Header copy */
        .trailer-header-text {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .trailer-badge {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.8rem;
        }

        .trailer-headline {
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
        }

        .trailer-subheading {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 300;
          letter-spacing: 0.05em;
          margin: 0;
        }

        /* Static video container box */
        .trailer-video-box-static {
          position: relative;
          width: 100%;
          height: 540px;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 25px 60px rgba(0,0,0,0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trailer-darkness-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(3,7,18,0.65) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .trailer-native-video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        /* HUD tech corners */
        .trailer-hud-corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: rgba(0, 229, 255, 0.25);
          border-style: solid;
          z-index: 3;
          pointer-events: none;
        }
        .trailer-hud-corner.tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .trailer-hud-corner.tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .trailer-hud-corner.bl { bottom: 25px; left: 20px; border-width: 0 0 2px 2px; }
        .trailer-hud-corner.br { bottom: 25px; right: 20px; border-width: 0 2px 2px 0; }

        /* Player buttons overlay */
        .trailer-player-overlay {
          position: relative;
          z-index: 10;
        }

        .trailer-play-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .play-glass-inner {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .trailer-play-button:hover .play-glass-inner {
          background: rgba(0, 229, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.35);
          box-shadow: 0 15px 35px rgba(0, 229, 255, 0.2), inset 0 2px 2px rgba(0, 229, 255, 0.15);
        }

        /* Active state buttons */
        .active-controls {
          display: flex;
          gap: 1.2rem;
        }

        .control-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: #fff;
        }

        /* Scrubber timeline */
        .trailer-timeline-track {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 10;
        }
        .trailer-timeline-fill {
          height: 100%;
          background: #00e5ff;
          box-shadow: 0 0 8px #00e5ff;
          transition: width 0.1s linear;
        }

        /* Corner stats logs */
        .trailer-corner-specs {
          position: absolute;
          bottom: 2rem;
          left: 2.5rem;
          display: flex;
          gap: 1.5rem;
          z-index: 10;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.58rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.12em;
        }

        .trailer-corner-telemetry {
          position: absolute;
          bottom: 2rem;
          right: 2.5rem;
          display: flex;
          gap: 1.5rem;
          z-index: 10;
          font-family: var(--font-display, 'Orbitron', sans-serif);
          font-size: 0.58rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.12em;
        }

        @media (max-width: 900px) {
          .trailer-video-box-static { height: 380px; }
          .trailer-corner-specs, .trailer-corner-telemetry { display: none; }
        }

        @media (max-width: 640px) {
          .trailer-video-box-static { height: 280px; }
        }
      `}</style>
    </section>
  );
};

export default VideoSectionV2;
