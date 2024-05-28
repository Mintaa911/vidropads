"use client";
import React from "react";
import HeroImage from '../assets/hero.png';
import StarRatingImage from '../assets/star-rating.png'; // Replace with your actual star rating image path
import { MovingBorderButton } from './aceternity/MovingBorderButton';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 pt-5 md:pt-10 xl:pt-24 md:pb-28">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl md:text-6xl lg:text-4xl xl:text-7xl font-bold mb-6 md:w-full">
          Turn Videos Into Millions With Our Editing Magic
        </h1>
        <h2 className='text-sm md:text-xl mb-6 md:w-full'>
          We’ll help your products sell with our proven direct response video creatives
        </h2>
        <button className={`self-center md:self-start bg-purple-normal hover:opacity-80 rounded-full w-fit text-white px-4 py-2 md:px-8 md:py-4`}>Get Started</button>
        <div className='bg-purple-100 my-5 w-full h-1'></div>
        <div className="flex flex-row gap-8">
          <div className="lg:flex-1">
            <p className="md:text-lg">The #1st Video Service</p>
            <p>For Your Ecommerce</p>
            <img src={StarRatingImage} alt="Rated 5 stars" className="mt-2" />
          </div>
          <div className="lg:flex-1">
            <p className="md:text-lg">Trusted by 4,500+</p>
            <p>ECommerce brands</p>
            <img src={StarRatingImage} alt="Rated 5 stars" className='mt-2'/>
          </div>
        </div>
      </div>
      <div className="lg:flex-1 flex flex-row justify-center md:justify-end  xl:self-start">
        <img src={HeroImage} alt="Hero Illustration" className="md:w-[70%] h-auto" />
      </div>
    </section>
  );
};

export default Hero

