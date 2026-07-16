import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CustomShopCards from './components/CustomShopCards';
import Usps from './components/Usps';
import VideoSection from './components/VideoSection';
import ShowcaseCarousel from './components/ShowcaseCarousel';
import ShippingNewsletter from './components/ShippingNewsletter';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Marquee from './components/Marquee';
import galaxyBgVideo from './assets/video/vecteezy_glowing-shinny-particles-stars-animation-on-black-background_3538909.mp4';

function App() {
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
      
      {/* Page Sections */}
      <main style={{ position: 'relative', zIndex: 6 }}>
        {/* 1. Hero */}
        <Hero />
        {/* 2. About Us */}
        <About />
        {/* 3. Shop */}
        <CustomShopCards />
        {/* 4. Our Services */}
        <Usps />
        {/* 5. Video Section */}
        <VideoSection />
        {/* 6. Product Slide Showcase Carousel */}
        <ShowcaseCarousel />
        {/* 7. Shipping Policy & Main Mailing List */}
        <ShippingNewsletter />
        {/* 8. CTA Form */}
        <ConsultationForm />
      </main>
      
      {/* 9. Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Sticky Bottom Scrolling Marquee Banner */}
      <Marquee />
    </>
  );
}

export default App;
