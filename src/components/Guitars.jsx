import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Import local assets
import guitarBlue from '../assets/Galaxy TRB-3 INVADER  Caribbean Blue Flamed Maple Top.jpg';
import guitarSunburst from '../assets/Galaxy TRB-3 INVADER FLAMED MAPLE TOP in SunBurst.jpg';
import guitarPurple from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';
import guitarBlack from '../assets/Galaxy TRB-3 INVADER  Midnight Gloss Black.jpg';
import headstockHoney from '../assets/TRB-3 Invader Honey Burst Headstock.jpg';
import guitarSG2 from '../assets/SG2.jpg';

const Guitars = () => {
  const customShopStudios = [
    {
      id: 'invader-blue',
      name: 'TRB-3 Flamed Cyan',
      series: 'Design Study 01',
      image: guitarBlue,
      features: ['Bookmatched Maple Top', 'Bespoke Invader Pickups', 'Chambered Light Body']
    },
    {
      id: 'invader-sunburst',
      name: 'TRB-3 Sunburst Flame',
      series: 'Design Study 02',
      image: guitarSunburst,
      features: ['Tiger Stripe AAA Top', 'Alnico V Vintage Voice', 'Custom Tone Pots']
    },
    {
      id: 'invader-purple',
      name: 'TRB-3 Purple Nebula',
      series: 'Design Study 03',
      image: guitarPurple,
      features: ['Stardust Purple Gradient', 'Active Circuit EQ', 'Premium Ebony Board']
    },
    {
      id: 'invader-black',
      name: 'TRB-3 Obsidian Gloss',
      series: 'Design Study 04',
      image: guitarBlack,
      features: ['Mirror Midnight Finish', 'High Gain Output Humbuckers', 'Nickel Hardware']
    },
    {
      id: 'invader-honey',
      name: 'TRB-3 Honey Burst Detail',
      series: 'Design Study 05',
      image: headstockHoney,
      features: ['Matched Flame Headstock', 'Custom Gold Tuners', 'Abalone Headstock Logo']
    },
    {
      id: 'custom-sg2',
      name: 'Galaxy Custom SG-2',
      series: 'Design Study 06',
      image: guitarSG2,
      features: ['Solid Carved Mahogany', 'Trapezoid Mother-of-Pearl', 'Handwired Voicings']
    }
  ];

  return (
    <section 
      id="guitars" 
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '6rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
            Instrument Design Studies
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', maxWidth: '800px' }}>
            Precision Crafted <br />
            Invader Series.
          </h2>
          <p style={{ maxWidth: '550px', color: 'var(--text-secondary)', fontWeight: 300 }}>
            Luxury custom instruments designed with premium bookmatched flame-tops and custom electronics, hand-filed frets, and calibrated pickups.
          </p>
        </div>

        {/* Cinematic Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '3rem'
        }} className="guitar-cinematic-grid">
          {customShopStudios.map((guitar, i) => (
            <motion.div
              key={guitar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                padding: '2rem',
                position: 'relative'
              }}
              className="glass-panel studio-card"
            >
              {/* Top Details */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  {guitar.series}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', border: '1px solid rgba(0, 229, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '20px' }}>
                  CUSTOM BUILD
                </span>
              </div>

              {/* Guitar Image Visualizer */}
              <div style={{
                height: '300px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.01)',
                marginBottom: '2rem',
                position: 'relative'
              }} className="studio-img-box">
                <img 
                  src={guitar.image} 
                  alt={guitar.name} 
                  style={{
                    maxHeight: '90%',
                    maxWidth: '90%',
                    objectFit: 'contain',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="studio-img"
                />
              </div>

              {/* Title & Info */}
              <h3 style={{ color: '#fff', fontSize: '1.25rem', fontFamily: 'var(--font-display)', marginBottom: '0.25rem' }}>
                {guitar.name}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '1.5rem',
                marginBottom: '2rem',
                flex: 1
              }}>
                {guitar.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '4px', height: '4px', background: 'var(--accent-cyan)' }}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => {
                  document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-cyber"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem', padding: '0.9rem' }}
              >
                <span>Request Allocation</span>
                <ArrowUpRight size={14} />
              </button>

            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .studio-card {
          border-radius: 4px !important;
          transition: var(--transition-cinematic) !important;
        }
        .studio-card:hover {
          border-color: rgba(255,255,255,0.08) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8) !important;
        }
        .studio-card:hover .studio-img {
          transform: scale(1.06) rotate(1deg);
        }
      `}</style>
    </section>
  );
};

export default Guitars;
