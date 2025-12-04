import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
  // Prepare carousel items
  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer"
      src={item.image}
      alt=""
      role="presentation"
      onClick={() => window.location.href = item.path} // FIXED
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
    />
  );
};

export default MainCarousel;
