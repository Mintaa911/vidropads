import React from 'react';
// Replace with the paths to your video thumbnails or placeholder images
import VideoThumbnailOne from '../assets/hero.png';
import VideoThumbnailTwo from '../assets/hero.png';
import VideoThumbnailThree from '../assets/hero.png';

const ExampleVideos = ({ onViewMoreClick }) => {
  return (
    <section className="bg-white py-16 mt-0">
      <div className="container mx-auto px-4">
        <div>
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
          Example Videos
        </h2>
        <p className="text-center text-md font-medium text-gray-800 mb-8">
          Check Out Some of Our Examples
        </p>
        </div>
        <div className='py-6 flex flex-row justify-evenly'>
          <button
            onClick={()=>{}}
            className="bg-purple-normal text-white font-bold pr-1 py-1 md:py-3 md:px-8 w-fit text-xs md:text-base"
          >
           Classic Examples
          </button>
          <button
            onClick={()=>{}}
            className="font-bold md:py-3 md:px-8 w-fit pr-1 py-1 text-xs md:text-base"
          >
           TikTok Ad Examples
          </button>
          <button
            onClick={()=>{}}
            className="font-bold md:py-3 md:px-8 w-fit pr-1 py-1 text-xs md:text-base"
          >
            Vertical Ad Examples
          </button>
          <button
            onClick={()=>{}}
            className="font-bold md:py-3 md:px-8 w-fit pr-1 py-1 text-xs md:text-base"
          >
            User Generated Ad Examples
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Video 1 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src={VideoThumbnailOne} alt="Video Thumbnail 1" className="w-full" />
            {/* Additional markup for video details if necessary */}
          </div>
          {/* Video 2 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src={VideoThumbnailTwo} alt="Video Thumbnail 2" className="w-full" />
            {/* Additional markup for video details if necessary */}
          </div>
          {/* Video 3 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src={VideoThumbnailThree} alt="Video Thumbnail 3" className="w-full" />
            {/* Additional markup for video details if necessary */}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={onViewMoreClick}
            className="text-white bg-purple-normal hover:opacity-80 font-semibold py-3 px-8 rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExampleVideos;
