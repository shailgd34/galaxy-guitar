import React from 'react';
import HeroV2 from './HeroV2';
import AboutV2 from './AboutV2';
import EngineeringShowcaseV2 from './EngineeringShowcaseV2';
import LuxuryGuitarPresentation from './LuxuryGuitarPresentation';
import CustomShopCardsV2 from './CustomShopCardsV2';
import MissionControlTimelineV2 from './MissionControlTimelineV2';
import VideoSectionV2 from './VideoSectionV2';
import ShowcaseCarouselV2 from './ShowcaseCarouselV2';
import TrustedGlobeV2 from './TrustedGlobeV2';
import ShippingNewsletterV2 from './ShippingNewsletterV2';
import ConsultationFormV2 from './ConsultationFormV2';

const HomeV2 = () => {
  return (
    <main style={{ position: 'relative', zIndex: 6 }}>
      {/* 1. Cinematic Hero V2 */}
      <HeroV2 />
      
      {/* 2. About Us V2 */}
      <AboutV2 />
      
      {/* 3. Engineering Showcase V2 */}
      <EngineeringShowcaseV2 />
      
      {/* 4. Luxury Clickable Product Presentation */}
      <LuxuryGuitarPresentation />

      {/* 5. Custom Shop Grid Cards */}
      <CustomShopCardsV2 />
      
      {/* 6. NASA Mission Control Timeline */}
      <MissionControlTimelineV2 />
      
      {/* 7. Video Section V2 */}
      <VideoSectionV2 />
      
      {/* 8. Cinematic Floating Space Earth Globe */}
      <TrustedGlobeV2 />
      
      {/* 10. Shipping Policy & Main Mailing List V2 */}
      <ShippingNewsletterV2 />
      
      {/* 11. CTA Form V2 */}
      <ConsultationFormV2 />
    </main>
  );
};

export default HomeV2;
