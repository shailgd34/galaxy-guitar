import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="back-to-top-btn"
          >
            {/* Pulsing outer ring */}
            <span className="btt-ring" />
            {/* Arrow icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btt-arrow"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 4.8rem;
          right: 2.5rem;
          z-index: 999;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(3, 7, 18, 0.75);
          border: 1.5px solid rgba(0, 229, 255, 0.5);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 0 20px rgba(0, 229, 255, 0.2),
            0 8px 25px rgba(0, 0, 0, 0.5);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          overflow: visible;
        }

        .back-to-top-btn:hover {
          border-color: rgba(0, 229, 255, 0.9);
          box-shadow:
            0 0 30px rgba(0, 229, 255, 0.45),
            0 8px 30px rgba(0, 0, 0, 0.6);
        }

        /* Pulsing ambient ring */
        .btt-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 255, 0.2);
          animation: bttPulse 2.5s ease-in-out infinite;
          pointer-events: none;
        }

        .btt-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.25s ease;
        }
        .back-to-top-btn:hover .btt-arrow {
          transform: translateY(-2px);
        }

        @keyframes bttPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0; }
        }

        @media (max-width: 576px) {
          .back-to-top-btn {
            bottom: 4.2rem;
            right: 1.5rem;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;
