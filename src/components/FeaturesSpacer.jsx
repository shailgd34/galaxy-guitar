import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Star, ShieldCheck } from 'lucide-react';

const FeaturesSpacer = () => {
  const specs = [
    {
      id: "01",
      num: "01",
      icon: <Layers size={18} style={{ color: 'var(--accent-cyan)' }} />,
      title: "CYBER-FRET TELEMETRY",
      desc: "Millimeter-calibrated fret spacing optimized to lock with custom musical protectors and hand attachments."
    },
    {
      id: "02",
      num: "02",
      icon: <Zap size={18} style={{ color: 'var(--accent-blue)' }} />,
      title: "INVADER COIL CORE",
      desc: "High-output custom humbucker pickups delivering a calibrated, deep-space resonance."
    },
    {
      id: "03",
      num: "03",
      icon: <Star size={18} style={{ color: 'var(--accent-purple)' }} />,
      title: "LIQUID CYBER TOP",
      desc: "AAA bookmatched flamed maple top finished in liquid ocean stain."
    },
    {
      id: "04",
      num: "04",
      icon: <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} />,
      title: "BIOMECHANICAL ANCHORS",
      desc: "Reinforced bridge mounts engineered in partnership with orthopedic prosthetic firms."
    }
  ];

  return (
    <section 
      id="features-telemetry" 
      style={{
        position: 'relative',
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        zIndex: 6,
        padding: '5rem 0'
      }}
      className="features-chapter-section"
    >
      <div className="container" style={{ width: '100%' }}>
        
        {/* Core Instrument Specifications Grid */}
        <div className="specs-chapter-display">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
              Telemetry Specifications
            </span>
            <h3 style={{ fontSize: '2.5rem', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              Core Instrument Features
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            width: '100%'
          }}>
            {specs.map((spec) => (
              <motion.div 
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  borderRadius: '6px'
                }}
              >
                <div style={{
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                  display: 'flex'
                }}>
                  {spec.icon}
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.6rem', letterSpacing: '0.03em' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontWeight: 600, 
                      color: 'var(--accent-cyan)',
                      marginRight: '0.5rem',
                      fontSize: '0.9rem'
                    }}>
                      {spec.num} //
                    </span>
                    {spec.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                    {spec.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSpacer;
