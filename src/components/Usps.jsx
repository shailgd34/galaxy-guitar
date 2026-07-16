import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, Cpu, CheckCircle } from 'lucide-react';

// Import local assets
import protectorsImg from '../assets/GalaxyFT-1FingerProtectors.jpg';
import extenderImg from '../assets/Galaxy_FT-1_Ultra_ Extender.jpg';
import extensionXL from '../assets/Galaxy Guitar FT-1 XL Finger Extension3.jpg';
import ft2Extender from '../assets/galaxyguitarproductsft-2fingerextensions.jpg';

const Usps = () => {
  const [activeTab, setActiveTab] = useState('musician');

  const specs = {
    musician: {
      category: 'Play Without Pain',
      title: 'FT-1 Tactical Finger Sleeves',
      description: 'Made for guitar players who want to play without finger pain. Protects your skin from steel strings while keeping your guitar\'s natural tone and slide feel.',
      image: protectorsImg,
      stats: [
        { label: 'Sound Quality', value: '100%' },
        { label: 'Real Touch Feel', value: '98%' },
        { label: 'Thickness', value: '0.2mm' }
      ]
    },
    medical: {
      category: 'Medical Support',
      title: 'Comfort Finger Protectors',
      description: 'Custom-made shapes designed for doctors, physical therapists, and skin patients. Supports your finger joints and helps you perform regular daily tasks.',
      image: extenderImg,
      stats: [
        { label: 'Joint Support', value: 'Excellent' },
        { label: 'Skin Safe', value: '100%' },
        { label: 'Flexibility', value: 'High' }
      ]
    },
    prosthetic: {
      category: 'Custom Extensions',
      title: 'Extender XL Finger Extensions',
      description: 'The only custom guitar finger extensions in the world. Made with prosthetic clinics to give you the exact reach you need to press down strings and fret notes.',
      image: extensionXL,
      stats: [
        { label: 'Extra Reach', value: '+1.5cm' },
        { label: 'Press Power', value: '100%' },
        { label: 'Build Quality', value: 'Premium' }
      ]
    }
  };

  const current = specs[activeTab];

  return (
    <section 
      id="protectors" 
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Simplified Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '6rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
            Finger Protection & Extensions
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', maxWidth: '800px' }}>
            Bespoke Finger <br />
            Guards & Extensions.
          </h2>
          <p style={{ maxWidth: '550px', color: 'var(--text-secondary)', fontWeight: 300 }}>
            We are the only company on the planet that makes custom-fitted finger guards and extensions for guitar players, doctors, and prosthetic clinics.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          gap: '2.5rem',
          marginBottom: '4rem',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          paddingBottom: '1rem'
        }} className="cyber-tabs">
          {Object.keys(specs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === key ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              {specs[key].category}
              {activeTab === key && (
                <motion.div 
                  layoutId="activeCyberTabLine"
                  style={{
                    position: 'absolute',
                    bottom: '-17px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'var(--accent-cyan)',
                    boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetrical Showcase Details */}
        <div className="glass-panel" style={{ padding: '4rem', borderLeft: '1px solid rgba(0, 229, 255, 0.15)' }} className="glass-panel u-showcase">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="u-grid">
            
            {/* Info Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                  {current.category}
                </span>
                <motion.h3 
                  key={current.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: '#fff', fontSize: '2rem', marginTop: '0.5rem', fontFamily: 'var(--font-display)' }}
                >
                  {current.title}
                </motion.h3>
              </div>

              <motion.p 
                key={current.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontWeight: 300 }}
              >
                {current.description}
              </motion.p>

              {/* Engineering Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '2rem'
              }} className="stats-grid">
                {current.stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>
                      {stat.label}
                    </span>
                    <strong style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Box */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '440px',
                height: '350px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }} className="u-image-box">
                
                {/* Tech HUD Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '1px solid rgba(0, 229, 255, 0.1)',
                  pointerEvents: 'none',
                  zIndex: 2
                }}></div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={current.image}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(0.1) contrast(1.02)'
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* Secondary Technical Specs Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          marginTop: '4rem'
        }} className="spec-sub-grid">
          
          <div className="glass-panel" style={{ padding: '2.5rem', borderLeft: '1px solid rgba(139, 92, 246, 0.2)' }} className="glass-panel sub-spec-card">
            <h4 style={{ color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={16} style={{ color: 'var(--accent-purple)' }} />
              FT-2 Advanced Design
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', fontWeight: 300 }}>
              Special fiber weaves that fit perfectly around your knuckle joints. Great for acoustic and heavy electric string playing.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', borderLeft: '1px solid rgba(0, 229, 255, 0.2)' }} className="glass-panel sub-spec-card">
            <h4 style={{ color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={16} style={{ color: 'var(--accent-cyan)' }} />
              Exact Measurement Match
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', fontWeight: 300 }}>
              Every single guard is made to match your precise hand measurements or caliper scans submitted through our form.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        .cyber-tabs::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 900px) {
          .u-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .spec-sub-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .u-showcase {
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }
        .sub-spec-card {
          transition: var(--transition-smooth);
        }
        .sub-spec-card:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .u-grid { grid-template-columns: 1fr !important; }
          .spec-sub-grid { grid-template-columns: 1fr 1fr !important; }
          .u-showcase { max-height: 320px; }
        }
        @media (max-width: 576px) {
          .spec-sub-grid { grid-template-columns: 1fr !important; }
          .cyber-tabs { gap: 0.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Usps;
