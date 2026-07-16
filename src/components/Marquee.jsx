import React from 'react';

const USAFlag = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 7410 3900" 
    style={{ 
      width: '28px', 
      height: '16px', 
      display: 'inline-block', 
      verticalAlign: 'middle', 
      margin: '0 2rem',
      borderRadius: '1px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
    }}
  >
    <rect width="7410" height="3900" fill="#b22234"/>
    <path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#fff" strokeWidth="300"/>
    <rect width="2964" height="2100" fill="#3c3b6e"/>
    <g fill="#fff">
      <circle cx="247" cy="210" r="45"/><circle cx="741" cy="210" r="45"/><circle cx="1235" cy="210" r="45"/><circle cx="1729" cy="210" r="45"/><circle cx="2223" cy="210" r="45"/><circle cx="2717" cy="210" r="45"/>
      <circle cx="494" cy="420" r="45"/><circle cx="988" cy="420" r="45"/><circle cx="1482" cy="420" r="45"/><circle cx="1976" cy="420" r="45"/><circle cx="2470" cy="420" r="45"/>
      <circle cx="247" cy="630" r="45"/><circle cx="741" cy="630" r="45"/><circle cx="1235" cy="630" r="45"/><circle cx="1729" cy="630" r="45"/><circle cx="2223" cy="630" r="45"/><circle cx="2717" cy="630" r="45"/>
      <circle cx="494" cy="840" r="45"/><circle cx="988" cy="840" r="45"/><circle cx="1482" cy="840" r="45"/><circle cx="1976" cy="840" r="45"/><circle cx="2470" cy="840" r="45"/>
      <circle cx="247" cy="1050" r="45"/><circle cx="741" cy="1050" r="45"/><circle cx="1235" cy="1050" r="45"/><circle cx="1729" cy="1050" r="45"/><circle cx="2223" cy="1050" r="45"/><circle cx="2717" cy="1050" r="45"/>
      <circle cx="494" cy="1260" r="45"/><circle cx="988" cy="1260" r="45"/><circle cx="1482" cy="1260" r="45"/><circle cx="1976" cy="1260" r="45"/><circle cx="2470" cy="1260" r="45"/>
      <circle cx="247" cy="1470" r="45"/><circle cx="741" cy="1470" r="45"/><circle cx="1235" cy="1470" r="45"/><circle cx="1729" cy="1470" r="45"/><circle cx="2223" cy="1470" r="45"/><circle cx="2717" cy="1470" r="45"/>
      <circle cx="494" cy="1680" r="45"/><circle cx="988" cy="1680" r="45"/><circle cx="1482" cy="1680" r="45"/><circle cx="1976" cy="1680" r="45"/><circle cx="2470" cy="1680" r="45"/>
      <circle cx="247" cy="1890" r="45"/><circle cx="741" cy="1890" r="45"/><circle cx="1235" cy="1890" r="45"/><circle cx="1729" cy="1890" r="45"/><circle cx="2223" cy="1890" r="45"/><circle cx="2717" cy="1890" r="45"/>
    </g>
  </svg>
);

const Marquee = () => {
  const marqueeTextList = [
    "The Global Leader for Professional Finger Protection for Injured Musicians.",
    "Find Your Galaxy Guitar Plug It In Rock Your Universe!.",
    "Galaxy Custom Designed Guitars."
  ];

  // Render a loop of texts with flags
  const renderLoop = () => (
    <div style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
      {marqueeTextList.map((text, i) => (
        <React.Fragment key={i}>
          <span style={{ 
            color: '#ffffff', 
            fontSize: '0.85rem', 
            fontWeight: 500, 
            fontStyle: 'italic', 
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.04em'
          }}>
            {text}
          </span>
          <USAFlag />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div 
      style={{
        width: '100%',
        background: 'rgba(4, 9, 20, 0.85)', // Semi-transparent glass
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0.75rem 0',
        overflow: 'hidden',
        position: 'fixed', // Sticky bottom
        bottom: 0,
        left: 0,
        zIndex: 99, // Float on top of sections
        display: 'flex',
        alignItems: 'center'
      }}
      className="global-marquee-bar"
    >
      {/* Decorative Red/White side stripes on the left margin (from screenshot) */}
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '16px',
        background: 'repeating-linear-gradient(to bottom, #b22234 0px, #b22234 3px, #ffffff 3px, #ffffff 6px)',
        borderRadius: '1px',
        zIndex: 10
      }} />

      {/* Infinite scrolling track container */}
      <div 
        style={{
          display: 'flex',
          gap: '0px',
          width: 'max-content',
          animation: 'marqueeLoop 30s linear infinite',
          paddingLeft: '40px'
        }}
      >
        {renderLoop()}
        {renderLoop()}
        {renderLoop()}
      </div>

      <style>{`
        @keyframes marqueeLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.33333%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
