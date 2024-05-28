import React from 'react';
// Import your icons or images for each step
import StepOneIcon from '../assets/icon1.png';
import StepTwoIcon from '../assets/icon2.png';
import StepThreeIcon from '../assets/icon3.png';
import { ThreeDCard } from './aceternity/ThreeDCard';

const HowItWorks = () => {
  return (
    <section className="py-0 px-0">
        <div className="text-center mb-5">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            How It Works
          </h2>
          <p className="text-md lg:text-lg text-gray-500 mt-4 mb-10">
            We’ll help your products sell with our proven direct response video creatives
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap:6 md:gap-10 w-[90%] xl:w-[80%] justify-center mx-auto pt-4 items-strach">
          {/* Step 1 */}
          <div className='flex-1 mb-4 h-full'>
            <ThreeDCard bgColor={"bg-white"} textColor={"text-black"} padding='py-10' shadow='shadow-2xl'>
              <img src={StepOneIcon} alt="Step Three" className="w-30 h-40 mx-auto" />
              <h3 className="text-2xl font-semibold text-center mt-4">Customize It</h3>
              <p className="text-center text-lg px-4 mt-2 mb-10  w-[90%] mx-auto">
                We’ll help your products sell with our proven direct response video creatives
              </p>
            </ThreeDCard>
          </div>
          <div className='flex-1 mb-4 transform md:scale-110  z-10 transition duration-300 h-full'>
            <ThreeDCard padding={"py-10 xl:py-16"} bgColor={"bg-purple-normal"} textColor={"text-white"} shadow='shadow-2xl'>
                <img src={StepTwoIcon} alt="Step Three" className="w-30 h-40 mx-auto" />
                <h3 className="text-2xl font-semibold text-center mt-4">Answer Questionary</h3>
                <p className="text-center text-lg px-2 mt-2 mb-10 w-[90%] mx-auto">
                  We’ll help your products sell with our proven direct response video creatives
                </p>
            </ThreeDCard>
          </div>
          <div className='flex-1 h-full'>
            <ThreeDCard padding='py-10' bgColor={"bg-white"} textColor={"text-black"} shadow='shadow-2xl'>
                <img src={StepThreeIcon} alt="Step Three" className="w-30 h-40 mx-auto" />
                <h3 className="text-2xl font-semibold text-center mt-4">Share & Enjoy</h3>
                <p className="text-center text-lg px-2 md:px-40 lg:px-4 mt-2 mb-10 w-full">
                  Download your video and share it with the world.
                </p>
            </ThreeDCard>
          </div>
        </div>
    </section>
  );
};

export default HowItWorks;
