import React, { useState } from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import bgImageTwo from '../assets/bgimageTwo.png';

const ShippingNewsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="shipping-newsletter-sec">
      {/* Background image overlay */}
      <div 
        className="newsletter-sec-bg"
        style={{ backgroundImage: `url(${bgImageTwo})` }}
      />
      <div className="newsletter-sec-overlay" />

      <div className="newsletter-sec-container">
        
        {/* Main interactive call-out box */}
        <div className="promo-box-frame">
          {/* Top Neon Pink Horizontal Divider */}
          <div className="pink-neon-line" />
          
          <div className="promo-content">
            <h3 className="promo-title">Join Our "Members Only" Email List Below!</h3>
            <p className="promo-savings">Get $100.00 $aving$ $pecial$.</p>
            <p className="promo-shipping">Right Now: Free Shipping in the USA.</p>
          </div>

          {/* Bottom Neon Pink Horizontal Divider */}
          <div className="pink-neon-line" />
        </div>

        {/* Dynamic subscription input & button */}
        <div className="newsletter-action-area">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="custom-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email to claim savings..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-newsletter-input"
                required
              />
              <button type="submit" className="custom-blue-email-btn">
                <div className="btn-inner-chrome">
                  <Mail size={18} className="email-icon-pulse" />
                  <span>Join Our Email List</span>
                </div>
              </button>
            </form>
          ) : (
            <div className="success-badge-glow">
              <ShieldCheck size={18} />
              <span>Subscription Active! Welcome to Galaxy VIP Discounts.</span>
            </div>
          )}
        </div>

        {/* Detailed Shipping & Logistics Paragraph */}
        <div className="shipping-legal-paragraph">
          <p>
            Galaxy ships worldwide 6 Days a week. We ship our Guitars Domestically via FedEx 3 Day Air Express. 
            Galaxy FT-1 Finger Protectors are shipped via FedEx as well. International orders must clear Customs in 
            your country. FedEx helps clear your order. There maybe Customs charges that are not covered by Galaxy. 
            For shipping details visit our Policies Page. If you have questions or Business Inquiries, Technical 
            Product Questions click on the Contact Us Tab. For exisitng Customer support email our Client 
            Service's Help Desk. Our International Tel:702-476-9031. Receive Members Only Discounts- Join our mailing list.
          </p>
        </div>

      </div>

      <style>{`
        .shipping-newsletter-sec {
          position: relative;
          padding: 5.5rem 0;
          width: 100%;
          z-index: 6;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-sec-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
          opacity: 0.38;
          z-index: 1;
          filter: contrast(1.1) brightness(0.9);
        }

        .newsletter-sec-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 20%, #030712 90%);
          z-index: 2;
        }

        .newsletter-sec-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1000px;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2.2rem;
        }

        /* Pink frame box wrapper */
        .promo-box-frame {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .pink-neon-line {
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, transparent, #ec4899 20%, #db2777 50%, #ec4899 80%, transparent);
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
        }

        .promo-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .promo-title {
          font-size: 1.15rem;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.04em;
          font-family: var(--font-sans);
          margin: 0;
        }

        .promo-savings {
          font-size: 1.25rem;
          color: #00e5ff;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-shadow: 0 0 12px rgba(0, 229, 255, 0.45);
          margin: 0;
        }

        .promo-shipping {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
        }

        /* Action form & glowing button */
        .newsletter-action-area {
          width: 100%;
          max-width: 580px;
        }

        .custom-newsletter-form {
          display: flex;
          gap: 1rem;
          width: 100%;
          background: rgba(3, 7, 18, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.4rem;
          border-radius: 8px;
          backdrop-filter: blur(8px);
        }

        .custom-newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.85rem;
          padding: 0 1rem;
          font-family: var(--font-sans);
        }

        /* Chrome metallic email button styling matching screenshot concept */
        .custom-blue-email-btn {
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          border-radius: 6px;
          overflow: hidden;
        }
        .btn-inner-chrome {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(180deg, #38bdf8 0%, #0284c7 50%, #0369a1 51%, #0ea5e9 100%);
          border: 2px solid #0284c7;
          border-radius: 6px;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.8rem;
          font-family: var(--font-display);
          letter-spacing: 0.05em;
          padding: 0.75rem 1.4rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          box-shadow: 
            0 4px 10px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .custom-blue-email-btn:hover .btn-inner-chrome {
          transform: translateY(-1px);
          box-shadow: 
            0 6px 14px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .email-icon-pulse {
          animation: iconPulse 2s infinite;
        }

        /* Shipping Legal Text Paragraph */
        .shipping-legal-paragraph {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.6rem;
        }
        .shipping-legal-paragraph p {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.8;
          font-weight: 400;
          text-align: justify;
          margin: 0;
        }

        .success-badge-glow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: #10b981;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        @keyframes iconPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        @media (max-width: 768px) {
          .custom-newsletter-form {
            flex-direction: column;
            padding: 0.6rem;
            background: transparent;
            border: none;
          }
          .custom-newsletter-input {
            background: rgba(3, 7, 18, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.15);
            height: 48px;
            border-radius: 6px;
            margin-bottom: 0.6rem;
          }
          .btn-inner-chrome {
            height: 48px;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ShippingNewsletter;
