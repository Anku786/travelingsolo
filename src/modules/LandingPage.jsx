import React from 'react';
import DestinationComponent from './DestinationComponent';
import BannerPage from './BannerPage';
import CounterBanner from './CounterBanner';

const LandingPage = () => {
  return (
    <div>
    <BannerPage />
    <DestinationComponent />
    <CounterBanner />
    </div>
  );
};

export default LandingPage;
