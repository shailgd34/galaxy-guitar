import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, User, Settings, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const ConsultationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productType: 'guitar',
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    handSelection: 'right',
    measurements: '',
    customDetails: '',
    guitarFinish: 'blue',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(5);
    // Stardust confetti
    confetti({
      particleCount: 160,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#3B82F6', '#8B5CF6', '#ffffff']
    });
  };

  return (
    <section 
      id="consultation" 
      className="section-padding"
      style={{
        position: 'relative',
        width: '100%',
        background: 'transparent',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 10
      }}
    >
      <div className="container" style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
            Design Consultation
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#fff', marginTop: '0.5rem' }}>
            Request Allocation.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '1rem', fontWeight: 300 }}>
            Every build begins with a conversation. Submit your requirements below to secure your allocation. Your card is pre-authorized but **no charge is captured** until your specs are finalized with an engineer.
          </p>
        </div>

        {/* Console Box */}
        <div className="glass-panel" style={{ padding: '3.5rem', borderRadius: '4px', borderLeft: '1px solid rgba(139, 92, 246, 0.15)' }}>
          
          {/* Progress telemetry */}
          {step <= 4 && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '2%',
                right: '2%',
                height: '1px',
                background: 'rgba(255,255,255,0.04)',
                zIndex: 1
              }}>
                <div style={{
                  width: `${((step - 1) / 3) * 100}%`,
                  height: '100%',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 10px rgba(0, 229, 255, 0.4)',
                  transition: 'width 0.4s ease'
                }}></div>
              </div>

              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num} 
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '2px', // Minimal square aesthetic (Nothing style)
                    background: step >= num ? '#fff' : '#030712',
                    color: step >= num ? '#030712' : 'var(--text-secondary)',
                    border: step >= num ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    zIndex: 2,
                    fontFamily: 'var(--font-display)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {/* Category */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                    <Settings size={16} style={{ color: 'var(--accent-cyan)' }} />
                    01 // SELECT PROJECT CATEGORY
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      { id: 'guitar', title: 'Invader Custom Guitar', desc: 'Bespoke build allocations. Designed in partnership with engineering.' },
                      { id: 'protector', title: 'Fretwear Protectors', desc: 'Custom tactile sleeves for nerve protection and performance relief.' },
                      { id: 'extension', title: 'Orthopedic Extensions', desc: 'Structural prosthetic extensions designed for reach modification.' }
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, productType: opt.id })}
                        style={{
                          background: formData.productType === opt.id ? 'rgba(255,255,255,0.015)' : 'transparent',
                          border: formData.productType === opt.id ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.05)',
                          padding: '1.5rem',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        <h4 style={{ color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-display)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>{opt.title}</span>
                          <input 
                            type="radio" 
                            checked={formData.productType === opt.id}
                            onChange={() => {}}
                            style={{ accentColor: 'var(--accent-cyan)' }}
                          />
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 300 }}>{opt.desc}</p>
                      </div>
                    ))}
                  </div>

                  <button type="button" onClick={handleNextStep} className="btn-chrome" style={{ alignSelf: 'flex-end', marginTop: '1rem' }}>
                    <span>Continue</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}

              {/* Contact Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                    <User size={16} style={{ color: 'var(--accent-purple)' }} />
                    02 // CONTACT telemetry
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>FULL NAME</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        required
                        value={formData.fullName} 
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="cyber-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-sub-row">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          name="email" 
                          required
                          value={formData.email} 
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="cyber-input"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          value={formData.phone} 
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="cyber-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>ORGANIZATION / CLINIC (OPTIONAL)</label>
                      <input 
                        type="text" 
                        name="organization" 
                        value={formData.organization} 
                        onChange={handleInputChange}
                        placeholder="Medical Clinic, Hospital, or Prosthetic Firm"
                        className="cyber-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={handlePrevStep} className="btn-cyber">
                      <span>Back</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNextStep} 
                      className="btn-chrome"
                      disabled={!formData.fullName || !formData.email || !formData.phone}
                      style={{ opacity: (!formData.fullName || !formData.email || !formData.phone) ? 0.5 : 1 }}
                    >
                      <span>Continue</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Specifications */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                    <Settings size={16} style={{ color: 'var(--accent-cyan)' }} />
                    03 // DESIGN SPECIFICATIONS
                  </h3>

                  {formData.productType === 'guitar' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>INSTRUMENT SERIES SELECT</label>
                      <select 
                        name="guitarFinish" 
                        value={formData.guitarFinish} 
                        onChange={handleInputChange}
                        className="cyber-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="blue">TRB-3 Flamed Cyan Maple</option>
                        <option value="sunburst">TRB-3 Sunburst Alder</option>
                        <option value="black">TRB-3 Obsidian Gloss</option>
                        <option value="purple">TRB-3 Purple Nebula Edition</option>
                      </select>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>FINGER REQUIREMENT</label>
                        <select 
                          name="handSelection" 
                          value={formData.handSelection} 
                          onChange={handleInputChange}
                          className="cyber-input"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="right">Right Hand Articulations</option>
                          <option value="left">Left Hand Articulations</option>
                          <option value="both">Bilateral Fitting / Complex</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>ESTIMATED DIMENSIONS (MM)</label>
                        <input 
                          type="text" 
                          name="measurements" 
                          value={formData.measurements} 
                          onChange={handleInputChange}
                          placeholder="e.g. Index: 17.5mm, Mid: 18mm"
                          className="cyber-input"
                        />
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>NOTES / CLINICAL DETAILS</label>
                    <textarea 
                      name="customDetails" 
                      rows="4"
                      value={formData.customDetails} 
                      onChange={handleInputChange}
                      placeholder="Enter details regarding instrument fret configurations, orthopedic needs, or specific request specs."
                      className="cyber-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={handlePrevStep} className="btn-cyber">
                      <span>Back</span>
                    </button>
                    <button type="button" onClick={handleNextStep} className="btn-chrome">
                      <span>Continue</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Secure authorization */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                    <CreditCard size={16} style={{ color: 'var(--accent-purple)' }} />
                    04 // PRE-PAYMENT AUTHORIZATION
                  </h3>

                  {/* Guarantee Box */}
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.03)',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    padding: '1.25rem',
                    borderRadius: '2px',
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <ShieldCheck size={18} style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5', fontWeight: 300 }}>
                      No payment will be drawn. We hold card credentials to secure allocation rights. All parameters are verified in a direct 1-on-1 discussion before charging.
                    </p>
                  </div>

                  {/* Card fields */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>CARDHOLDER NAME</label>
                      <input 
                        type="text" 
                        name="cardName" 
                        required
                        value={formData.cardName} 
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="cyber-input"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>CREDIT CARD NUMBER</label>
                      <input 
                        type="text" 
                        name="cardNumber" 
                        required
                        value={formData.cardNumber} 
                        onChange={handleInputChange}
                        placeholder="•••• •••• •••• ••••"
                        maxLength="19"
                        className="cyber-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-sub-row">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>EXPIRATION (MM/YY)</label>
                        <input 
                          type="text" 
                          name="cardExpiry" 
                          required
                          value={formData.cardExpiry} 
                          onChange={handleInputChange}
                          placeholder="09/28"
                          maxLength="5"
                          className="cyber-input"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-display)' }}>SECURITY CODE (CVV)</label>
                        <input 
                          type="password" 
                          name="cardCvv" 
                          required
                          value={formData.cardCvv} 
                          onChange={handleInputChange}
                          placeholder="•••"
                          maxLength="4"
                          className="cyber-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <button type="button" onClick={handlePrevStep} className="btn-cyber">
                      <span>Back</span>
                    </button>
                    <button 
                      type="submit" 
                      className="btn-chrome"
                      disabled={!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvv}
                      style={{ opacity: (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvv) ? 0.5 : 1 }}
                    >
                      <span>Authorize Allocation</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Success Screen */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '2px',
                    background: 'rgba(0, 229, 255, 0.05)',
                    border: '1px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(0, 229, 255, 0.15)',
                    marginBottom: '0.5rem'
                  }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--accent-cyan)' }} />
                  </div>

                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>Allocation Locked.</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '480px', fontWeight: 300 }}>
                    Verification profile created for <strong style={{ color: '#fff' }}>{formData.fullName}</strong>. 
                    An allocation engineer will contact you shortly at <strong style={{ color: '#fff' }}>{formData.email}</strong> to review sizing telemetry.
                  </p>

                  <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '2px',
                    padding: '1.25rem',
                    width: '100%',
                    maxWidth: '420px',
                    textAlign: 'left',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Design Category</span>
                      <strong style={{ color: '#fff', textTransform: 'uppercase' }}>{formData.productType} STUDY</strong>
                    </div>
                    {formData.productType === 'guitar' ? (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Finish Model</span>
                        <strong style={{ color: '#fff', textTransform: 'uppercase' }}>{formData.guitarFinish} Finish</strong>
                      </div>
                    ) : (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>Limb Mapping</span>
                          <strong style={{ color: '#fff', textTransform: 'uppercase' }}>{formData.handSelection} Hand</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>Telemetry Diameter</span>
                          <strong style={{ color: '#fff' }}>{formData.measurements || 'Scans required'}</strong>
                        </div>
                      </>
                    )}
                  </div>

                  <button 
                    type="button" 
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        productType: 'guitar',
                        fullName: '',
                        email: '',
                        phone: '',
                        organization: '',
                        handSelection: 'right',
                        measurements: '',
                        customDetails: '',
                        guitarFinish: 'blue',
                        cardName: '',
                        cardNumber: '',
                        cardExpiry: '',
                        cardCvv: ''
                      });
                    }} 
                    className="btn-cyber"
                    style={{ marginTop: '1rem', padding: '0.8rem 2rem' }}
                  >
                    <span>Submit New Study</span>
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </form>

        </div>
      </div>

      <style>{`
        .cyber-input {
          width: 100%;
          background: rgba(3, 7, 18, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          padding: 0.95rem 1.25rem;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .cyber-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.1);
        }
        select.cyber-input option {
          background: #030712;
          color: #fff;
        }
        @media (max-width: 600px) {
          .form-sub-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ConsultationForm;
