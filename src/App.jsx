import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeV1 from './components/HomeV1';
import HomeV2 from './components/HomeV2';
import Footer from './components/Footer';
import FooterV2 from './components/FooterV2';
import BackToTop from './components/BackToTop';
import Marquee from './components/Marquee';
import galaxyBgVideo from './assets/video/vecteezy_glowing-shinny-particles-stars-animation-on-black-background_3538909.mp4';

import Lenis from 'lenis';

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with internal routing updates
    const stopLenis = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', stopLenis);

    return () => {
      window.removeEventListener('popstate', stopLenis);
      lenis.destroy();
    };
  }, []);
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isV2 = location.pathname === '/v2';

  // Enable global momentum smooth scrolling
  useSmoothScroll();

  return (
    <>
      {/* Fixed Full-Viewport Galaxy Stars Video Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <video
          src={galaxyBgVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45
          }}
        />
      </div>

      {/* Subtle Vignette Overlay for Premium Contrast */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle, transparent 20%, rgba(3, 7, 18, 0.55) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Transparent Floating Navigation Header */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomeV1 />} />
        <Route path="/v2" element={<HomeV2 />} />
      </Routes>

      {/* Footer */}
      {isV2 ? <FooterV2 /> : <Footer />}

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Sticky Bottom Scrolling Marquee Banner */}
      <Marquee />

      {/* Floating Version Switcher */}
      <div
        onClick={() => navigate(isV2 ? '/' : '/v2')}
        style={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 9999,
          cursor: 'pointer',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          padding: '1rem 0.5rem',
          background: isV2
            ? 'linear-gradient(180deg, #8a2be2, #00e5ff)'
            : 'linear-gradient(180deg, #00e5ff, #8a2be2)',
          color: '#fff',
          fontFamily: "var(--font-display, 'Orbitron', sans-serif)",
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          borderRadius: '8px 0 0 8px',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.paddingRight = '0.8rem';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.paddingRight = '0.5rem';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.4)';
        }}
      >
        {isV2 ? '← V1 Classic' : '→ V2 Cinematic'}
      </div>
    </>
  );
}

export default App;
