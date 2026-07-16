import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/header_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Galaxy Custom Guitars', href: '#guitars' },
    { name: 'ITI Finger Protector', href: '#protectors' },
    { name: 'More Galaxy Guitars', href: '#guitars' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact Us', href: '#consultation' },
    { name: 'Policies', href: '#footer' }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '90px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        background: 'linear-gradient(to bottom, rgba(3, 7, 18, 0.65), rgba(3, 7, 18, 0))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      className="cinematic-nav"
    >
      {/* Brand Logo Only */}
      <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img 
          src={logo} 
          alt="Galaxy Guitar Products USA" 
          style={{ height: '75px', objectFit: 'contain', filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(0, 229, 255, 0.15))' }}
        />
      </a>

      {/* Nav Links */}
      <div style={{ display: 'none', gap: '2.5rem' }} className="nav-links-container">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-display)',
              transition: 'var(--transition-fast)',
              position: 'relative',
              padding: '0.5rem 0'
            }}
            className="nav-item-link"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Minimal CTA */}
      <a
        href="#consultation"
        onClick={(e) => handleScroll(e, '#consultation')}
        style={{
          display: 'none',
          textDecoration: 'none',
          padding: '0.75rem 1.75rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          color: '#fff',
          letterSpacing: '0.05em',
          transition: 'var(--transition-smooth)',
          fontFamily: 'var(--font-display)'
        }}
        className="nav-cta-btn"
      >
        <span>Build Request</span>
        <ArrowUpRight size={14} style={{ marginLeft: '4px', transition: 'var(--transition-fast)' }} />
      </a>

      {/* Mobile Drawer Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
        }}
        className="mobile-trigger"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* CSS overrides inside navbar */}
      <style>{`
        .nav-item-link:hover {
          color: #fff !important;
          text-shadow: 0 0 10px rgba(255,255,255,0.25);
        }
        .nav-cta-btn:hover {
          border-color: #fff;
          background: #fff;
          color: #030712;
        }
        .nav-cta-btn:hover svg {
          transform: translate(2px, -2px);
        }
        @media (min-width: 900px) {
          .nav-links-container {
            display: flex !important;
          }
          .nav-cta-btn {
            display: inline-flex !important;
          }
          .mobile-trigger {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .cinematic-nav {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: '90px',
              left: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: '3rem 2rem',
              alignItems: 'center',
              background: '#030712f5',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-display)'
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={(e) => handleScroll(e, '#consultation')}
              style={{
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1rem',
                border: '1px solid #fff',
                background: '#fff',
                color: '#030712',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-display)'
              }}
            >
              <span>Build Request</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
