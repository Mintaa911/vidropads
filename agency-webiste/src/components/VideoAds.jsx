import React from 'react';
import YourImage from '../assets/ads.png'; // Replace with the path to your image
import { ThreeDCard } from './aceternity/ThreeDCard';

const VideoAds = () => {
  return (
      <div className=" text-white mt-16 gap-4 flex flex-row  md:justify-end">
        <div className='flex-1 md:relative md:basis-8/12 md:my-4'>
            <div className=' bg-purple-normal opacity-35 relative right-[14%] md:right-[16%] xl:right-[18%] 2xl:right-[27%]  xl:right-[28%] top-[10%] lg:top-[0%] py-5 rounded-r-[50px] md:rounded-r-[80px] md:rounded-r-[100px] h-[50%] z-0'></div>
            <div className=' bg-purple-normal relative right-[10%] xl:right-[10%] 2xl:right-[21%] z-10 bottom-[30%] lg:bottom-[40%] h-[100%]  xl:h-[85%] rounded-r-[50px] md:rounded-r-[80px] xl:rounded-r-[100px] flex flex-col py-2 pt-4 sm:py-16 md:py-16 justify-center pr-6 pl-12 md:pr-16 md:pl-32 lg:pr-20 lg:pl-20 xl:pl-44 xl:pr-16'>
                <h2 className="text-lg md:text-3xl xl:text-5xl font-bold mb-4">
                    Your Go-To Place For Direct Response Video Ads
                </h2>
                <p className="mb-4 md:mb-6 text-xs md:text-lg">
                    We’ll help your products sell with our proven direct response video creatives
                </p>
                <button className="text-xs md:text-lg bg-white w-fit text-black font-bold py-2 px-2 md:py-2 md:px-4 rounded-full">
                    Get Started
                </button>
            </div>
        </div>
        <div className="hidden lg:block flex-1 md:basis-4/12 ">
          <ThreeDCard>
            <img src={YourImage} alt="Facebook Ads Mockup" className="rounded-none" />
          </ThreeDCard>
        </div>
      </div>
  );
};

export default VideoAds;
