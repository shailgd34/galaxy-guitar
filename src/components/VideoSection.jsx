import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import galaxyVideo from '../assets/video/170480-843367912_medium.mp4';
import blueGuitar from '../assets/gitar.png';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-section" className="video-sec">
      <div className="video-sec-container">

        {/* Section Header */}
        <motion.div
          className="video-sec-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="video-sec-label">Featured Video</span>
          <h2 className="video-sec-title">
            Galaxy TRB-3 <span className="gradient-txt">INVADER</span>
          </h2>
          <p className="video-sec-subtitle">
            Checkout this Galaxy TRB-3 INVADER VIDEO — Shown in Cool Caribbean Blue Burst with Flamed Maple Top.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          className="video-player-wrapper"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="video-bezel">
            {!isPlaying ? (
              <div className="video-cover" onClick={() => setIsPlaying(true)}>
                <video
                  src={galaxyVideo}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="cover-bg-video"
                />
                
                {/* Caribbean Blue burst transparent guitar overlay */}
                <img 
                  src={blueGuitar} 
                  alt="Galaxy TRB-3 Invader Caribbean Blue burst" 
                  className="cover-guitar-overlay"
                />

                <div className="cover-overlay" />
                
                <div className="cover-content">
                  <button className="big-play-btn" aria-label="Play Video">
                    <Play size={32} fill="#fff" strokeWidth={0} />
                  </button>
                  <span className="play-text">Watch The Full Demo</span>
                </div>
              </div>
            ) : (
              <iframe
                className="yt-iframe"
                src="https://www.youtube.com/embed/isoYEFB7pfw?autoplay=1"
                title="Galaxy TRB-3 INVADER Guitar Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Bottom CTA link */}
        <motion.div
          className="video-sec-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.youtube.com/@Galaxyguitar/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-channel-link"
          >
            <span>Visit Our YouTube Channel</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>

      <style>{`
        .video-sec {
          position: relative;
          padding: 4.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          z-index: 6;
          overflow: hidden;
        }

        .video-sec-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        /* Header */
        .video-sec-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .video-sec-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          font-family: var(--font-display);
        }
        .video-sec-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          font-family: var(--font-display);
          margin: 0;
        }
        .gradient-txt {
          background: linear-gradient(90deg, #00e5ff, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .video-sec-subtitle {
          font-size: 0.92rem;
          color: var(--text-secondary);
          max-width: 560px;
          line-height: 1.6;
          margin: 0;
        }

        /* Video Player */
        .video-player-wrapper {
          width: 100%;
          max-width: 900px;
        }
        .video-bezel {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 25px 60px rgba(0,0,0,0.7),
            0 0 0 1px rgba(0,229,255,0.06);
          background: #000;
        }

        /* Cover State */
        .video-cover {
          position: absolute;
          inset: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cover-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
          filter: saturate(1.2);
        }
        .cover-guitar-overlay {
          position: absolute;
          width: 70%;
          height: 80%;
          object-fit: contain;
          z-index: 2;
          pointer-events: none;
          transform: rotate(-12deg);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .video-cover:hover .cover-guitar-overlay {
          transform: scale(1.06) rotate(-8deg);
        }
        .cover-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 40%, rgba(3,7,18,0.7) 100%);
          z-index: 3;
        }
        .cover-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .big-play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.25);
          background: rgba(239, 68, 68, 0.85);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding-left: 5px;
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .video-cover:hover .big-play-btn {
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.7);
        }
        .play-text {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          font-family: var(--font-display);
        }

        /* YouTube iframe */
        .yt-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Footer CTA */
        .video-sec-footer {
          text-align: center;
        }
        .yt-channel-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-decoration: none;
          letter-spacing: 0.06em;
          font-family: var(--font-display);
          border-bottom: 1px solid rgba(0,229,255,0.25);
          padding-bottom: 0.2rem;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .yt-channel-link:hover {
          color: #fff;
          border-color: #fff;
        }

        @media (max-width: 768px) {
          .video-sec-container { padding: 0 1.5rem; gap: 2rem; }
          .big-play-btn { width: 60px; height: 60px; }
          .video-sec-title { font-size: 1.6rem; }
          .video-player-wrapper { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .video-sec-container { padding: 0 1rem; }
          .video-sec-title { font-size: 1.3rem; }
          .big-play-btn { width: 50px; height: 50px; }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
