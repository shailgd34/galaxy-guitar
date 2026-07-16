import React from 'react';
import Hero from './Hero';
import About from './About';
import CustomShopCards from './CustomShopCards';
import Usps from './Usps';
import VideoSection from './VideoSection';
import ShowcaseCarousel from './ShowcaseCarousel';
import ShippingNewsletter from './ShippingNewsletter';
import ConsultationForm from './ConsultationForm';

const HomeV1 = () => {
  return (
    <main style={{ position: 'relative', zIndex: 6 }}>
      {/* 1. Original Hero */}
      <Hero />
      {/* 2. Original About Us */}
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
  );
};

export default HomeV1;
