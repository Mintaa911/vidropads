import React from 'react';
// Assuming you have these images in your assets for demonstration
import ExampleOne from '../assets/hero.png';
import ExampleTwo from '../assets/hero.png';
import ExampleThree from '../assets/hero.png';
import ViewIcon from '../assets/view.png';
import CommentIcon from '../assets/comment.png'
import LikeIcon from '../assets/like.png'
import RatingIcon from '../assets/star-rating.png'


const ViralExamples = () => {
  const examples = [
    { id: 1, image: ExampleOne, title: 'Project 1' },
    { id: 2, image: ExampleTwo, title: 'Project 2' },
    { id: 3, image: ExampleThree, title: 'Project 3' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-gray-800 mb-12">
          View Some of Our Viral Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={example.image} alt={example.title} className="w-full" />
              <div  className="p-6">
                <div className=''>
                  <div className='flex justify-between xl:w-2/5 items-center'>
                    <img src={ViewIcon}/>
                    <img src={CommentIcon} />
                    <img src={LikeIcon}/>
                  </div>
                  <div className='flex justify-between xl:w-2/5 items-center font-bold'>
                    <p>2.1M</p>
                    <p>2.1M</p>
                    <p>2.1M</p>
                  </div>
                </div>
                <div >
                  <img className='my-4' src={RatingIcon} />
                  <p className="">
                    We’ll help your products sell with our proven direct response video creatives with our proven direct response video creatives with our proven direct response video creatives  
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-16'>
          <button
            onClick={()=>{}}
            className="text-white bg-purple-normal hover:opacity-80 font-semibold py-3 px-8 rounded-full"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViralExamples;
