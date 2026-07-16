import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Truck, Heart } from 'lucide-react';

// Import local assets
import alienImg from '../assets/Alien.jpg';
import redCrossImg from '../assets/American Red Cross.jpg';
import davImg from '../assets/DAVLogo.jpg';
import woundedWarriorImg from '../assets/Wounded-Warrior-Logo.jpg';
import googleSafeImg from '../assets/Google_safe_site_checker.jpg';
import sslImg from '../assets/Rapid SSL Secure.jpg';
import nortonImg from '../assets/nortonsafewebsite.jpg';
import fedexImg from '../assets/fedexshipping.jpg';
import worldwideImg from '../assets/We Ship Worldwide.jpg';

const TrustSection = () => {
  return (
    <section 
      id="trust" 
      className="section-padding"
      style={{
        position: 'relative',
        width: '100%',
        background: '#030712',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '5rem',
          alignItems: 'center'
        }} className="trust-main-grid">
          
          {/* Alien tech */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}
            className="alien-panel-col"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '4px', // square tech theme
                overflow: 'hidden',
                border: '1px solid rgba(57, 255, 20, 0.4)',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(57, 255, 20, 0.15)'
              }}
            >
              <img 
                src={alienImg} 
                alt="Invader Tech" 
                style={{ width: '80%', height: '80%', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1)' }} 
              />
            </motion.div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', fontFamily: 'var(--font-display)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                OUT-OF-THIS-WORLD CODING
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '350px', fontWeight: 300 }}>
                Calibration tolerances that bridge extreme biomechanical prosthetic extensions and musical resonance. Standardized across 30 years.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }} className="trust-cards-vertical">
              
              {/* Checkout Safety */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel" 
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '4px' }}
              >
                <h4 style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <ShieldCheckIcon />
                  ENCRYPTED KEY AUTHORIZATION
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                  Pre-authorization channels utilize standard web SSL protocols. Credentials are kept under encrypted locks until engineering reviews custom millimeter telemetry.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', alignItems: 'center' }}>
                  <img src={sslImg} alt="SSL Badge" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                  <img src={googleSafeImg} alt="Google Safe Site" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                  <img src={nortonImg} alt="Norton Safe Site" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                </div>
              </motion.div>

              {/* Shipping */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel" 
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '4px' }}
              >
                <h4 style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <Truck size={16} style={{ color: 'var(--accent-cyan)' }} />
                  COURIER TELEMETRY
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                  Bespoke builds are packed inside custom flight cases and routed globally via FedEx priority cargo services directly from USA facilities.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', alignItems: 'center' }}>
                  <img src={fedexImg} alt="FedEx Courier" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                  <img src={worldwideImg} alt="Worldwide Shipping" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                </div>
              </motion.div>

              {/* Charity */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel" 
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '4px' }}
              >
                <h4 style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <Heart size={16} style={{ color: 'var(--accent-purple)' }} />
                  COMMUNITY IMPACT MAPPING
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                  A portion of every custom study goes towards rehabilitation centers. We actively work with disabled veterans and prosthetic foundations.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.5rem', alignItems: 'center' }}>
                  <img src={davImg} alt="DAV" style={{ height: '35px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                  <img src={woundedWarriorImg} alt="Wounded Warrior" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                  <img src={redCrossImg} alt="Red Cross" style={{ height: '30px', filter: 'grayscale(1) brightness(1.5)', opacity: 0.6 }} />
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .trust-main-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
            gap: 3rem !important;
          }
          .alien-panel-col {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

// Local minimal shield icon for cleaner rendering
const ShieldCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 11 2 2 4-4"/>
  </svg>
);

export default TrustSection;
