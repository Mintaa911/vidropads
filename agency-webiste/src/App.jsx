import React, { useState } from 'react';
import Hero from './components/Hero';
import Modal from './components/Modal';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import ExampleVideos from './components/ExampleVideos';
import PricingAndPackage from './components/PricingAndPackage';
import ViralExamples from './components/Viral';
import Testimonials from './components/Testemonial';
import FAQs from './components/FAQ';
import Footer from './components/Footer';
import { MovingCards } from './components/aceternity/MovingCard';
import VideoAds from './components/VideoAds';
import IncreaseSale from './components/IncreaseSale';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="mb-4 md:mb-10" id="hero">
        <Hero onGetStartedClick={openModal} />
      </div>
      <div className="mb-4 md:mb-10" id="moving-card">
        <MovingCards/>
      </div>
      <div className="mb-4 md:mb-10" id="how-it-works">
        <HowItWorks/>
      </div>
      <div className="mb-4 md:mb-10" id="video-ads">
        <VideoAds/>
      </div>
      <div className="mb-4 md:mb-10" id="example-videos">
        <ExampleVideos />
      </div>
      <div className="mb-4 md:mb-10" id="pricing">
        <PricingAndPackage/>
      </div>
      <div className="mb-4 md:mb-10" id="increase-sale">
        <IncreaseSale/>
      </div>
      <div className="mb-4 md:mb-10" id="viral-examples">
        <ViralExamples />
      </div>
      <div className="mb-4 md:mb-10" id="testimonials">
        <Testimonials/>
      </div>
      <div className="mb-4 md:mb-10" id="faq">
        <FAQs/>
      </div>
    </div>
  );
}

export default App;
