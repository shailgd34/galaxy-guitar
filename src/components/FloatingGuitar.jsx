import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import guitarHero from '../assets/guitar_hero.png';

const FloatingGuitar = () => {
  const ref = useRef(null);

  // Track full page scroll
  const { scrollYProgress } = useScroll();

  // Phase 1 (Hero): Guitar is centered, rotating
  // Phase 2 (Scroll): Guitar moves down into About section
  const guitarY = useTransform(scrollYProgress, [0, 0.08, 0.18], ['0vh', '0vh', '85vh']);
  const guitarRotate = useTransform(scrollYProgress, [0, 0.08, 0.18], [0, 0, 12]);
  const guitarScale = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 1, 0.85]);
  const guitarOpacity = useTransform(scrollYProgress, [0, 0.08, 0.22, 0.28], [0.55, 0.55, 0.9, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '340px',
        height: '520px',
        marginLeft: '-170px',
        marginTop: '-260px',
        zIndex: 7,
        pointerEvents: 'none',
        transformStyle: 'preserve-3d',
        perspective: '900px',
        y: guitarY,
        rotate: guitarRotate,
        scale: guitarScale,
        opacity: guitarOpacity
      }}
    >
      {/* Continuous 3D rotation wrapper */}
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: [-18, 18, -18],
          rotateX: [-4, 4, -4],
          y: [-8, 8, -8]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <img
          src={guitarHero}
          alt="Galaxy Custom Guitar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingGuitar;
