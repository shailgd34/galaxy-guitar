import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import caribBlue from '../assets/Galaxy TRB-3 INVADER  Caribbean Blue Flamed Maple Top.jpg';
import midnightBlack from '../assets/Galaxy TRB-3 INVADER  Midnight Gloss Black.jpg';
import sunburst from '../assets/Galaxy TRB-3 INVADER FLAMED MAPLE TOP in SunBurst.jpg';
import purpleBurst from '../assets/Galaxy Trb-3 Invader Purple Burst.jpg';

const ShowcaseCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      image: caribBlue,
      title: "Caribbean Blue Burst",
      model: "TRB-3 INVADER // CONCEPT 2026",
      desc: "Stunning flamed maple top finished in a rich ocean blue gradient. Powered by hot-rodded Galaxy F-17 Stinger Humbuckers."
    },
    {
      id: 2,
      image: midnightBlack,
      title: "Midnight Gloss Black",
      model: "TRB-3 INVADER // STEALTH",
      desc: "Deep high-gloss pure obsidian finish designed for a stealth presence. Custom chrome hardware accents."
    },
    {
      id: 3,
      image: sunburst,
      title: "Sunburst Flamed Maple",
      model: "TRB-3 INVADER // CLASSIC",
      desc: "Traditional hand-rubbed warm sunburst top highlighting bookmatched premium wood grain patterns."
    },
    {
      id: 4,
      image: purpleBurst,
      title: "Cosmic Purple Burst",
      model: "TRB-3 INVADER // NEBULA",
      desc: "Electric deep purple gradient body veneer coupled with an ebony neck and compound fretboard markers."
    }
  ];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="guitar-carousel-sec" className="carousel-section">
      <div className="carousel-container">
        
        {/* Header */}
        <div className="carousel-header">
          <span className="carousel-meta">Galaxy Custom Series</span>
          <h2 className="carousel-title">
            Product <span className="title-glow">Showcase</span>
          </h2>
        </div>

        {/* Carousel Slider Panel */}
        <div className="carousel-slider-box">
          
          <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-slide-viewport">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="carousel-slide"
              >
                {/* Left Side Slide Image */}
                <div className="slide-media-wrapper">
                  <img src={slides[index].image} alt={slides[index].title} className="slide-img" />
                  <div className="slide-media-shine" />
                </div>

                {/* Right Side Slide Specs */}
                <div className="slide-details-wrapper">
                  <div className="slide-details-header">
                    <span className="slide-tag">
                      <Sparkles size={11} /> FEATURED MODEL
                    </span>
                    <span className="slide-model-code">{slides[index].model}</span>
                  </div>

                  <h3 className="slide-title">{slides[index].title}</h3>
                  <p className="slide-desc">{slides[index].desc}</p>

                  <div className="slide-specs-mini">
                    <div className="mini-spec-item">
                      <span className="spec-label">Body</span>
                      <span className="spec-val">Premium Mahogany</span>
                    </div>
                    <div className="mini-spec-item">
                      <span className="spec-label">Hardware</span>
                      <span className="spec-val">Wilkinson Tremolo</span>
                    </div>
                    <div className="mini-spec-item">
                      <span className="spec-label">Neck</span>
                      <span className="spec-val">Hard Maple</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Carousel Indicators / Dots */}
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot-btn ${idx === index ? 'active' : ''}`}
              onClick={() => {
                setDirection(idx > index ? 1 : -1);
                setIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .carousel-section {
          position: relative;
          padding: 4.5rem 0;
          width: 100%;
          z-index: 6;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .carousel-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .carousel-meta {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          font-family: var(--font-display);
        }
        .carousel-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          font-family: var(--font-display);
          margin: 0.4rem 0 0 0;
        }
        .title-glow {
          background: linear-gradient(90deg, #00e5ff, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Slider Bezel Panel */
        .carousel-slider-box {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .carousel-slide-viewport {
          flex: 1;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          min-height: 400px;
          backdrop-filter: blur(12px);
          display: flex;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.5),
            inset 0 0 15px rgba(255,255,255,0.02);
        }

        .carousel-slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }

        /* Slide Left Media */
        .slide-media-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
          background: rgba(3, 7, 18, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
        .slide-img {
          width: 90%;
          height: 90%;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.55));
        }
        .slide-media-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(0,229,255,0.02) 100%);
          pointer-events: none;
        }

        /* Slide Right Info details */
        .slide-details-wrapper {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .slide-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .slide-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(0, 229, 255, 0.08);
          padding: 0.3rem 0.7rem;
          border-radius: 30px;
          border: 1px solid rgba(0, 229, 255, 0.2);
        }
        .slide-model-code {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.35);
          font-family: var(--font-display);
          letter-spacing: 0.1em;
        }

        .slide-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-display);
          margin: 0 0 1rem 0;
          letter-spacing: 0.01em;
        }
        .slide-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0 0 2rem 0;
        }

        .slide-specs-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }
        .mini-spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .spec-label {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: var(--font-display);
        }
        .spec-val {
          font-size: 0.8rem;
          color: #ffffff;
          font-weight: 600;
        }

        /* Nav Buttons */
        .carousel-nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .carousel-nav-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.4);
          color: #ffffff;
        }

        /* Indicator Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .carousel-dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot-btn.active {
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 991px) {
          .carousel-slide {
            grid-template-columns: 1fr;
          }
          .slide-media-wrapper {
            min-height: 260px;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .slide-details-wrapper {
            padding: 2rem;
          }
          .carousel-container {
            padding: 0 2rem;
          }
          .slide-specs-mini {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .carousel-nav-btn {
            display: none;
          }
          .carousel-container {
            padding: 0 1rem;
          }
          .slide-title { font-size: 1.3rem; }
          .slide-details-wrapper { padding: 1.5rem; }
          .slide-specs-mini {
            grid-template-columns: 1fr;
          }
          .carousel-header { margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default ShowcaseCarousel;
