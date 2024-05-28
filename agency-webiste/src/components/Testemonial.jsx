import React from 'react';
import StarRating from '../assets/star-rating.png'
import QuoteIcon from '../assets/quote.png'

const Testimonials = () => {
  const testimonials = [
    { id: 1, quote: "Just received my custom cape and I'm thrilled! The design process was a breeze, the quality is top-notch, and the customer support was fantastic. My new favorite destination for unique capes!", author: "Customer A" },
    { id: 3, quote: "I've never seen anything like it. Truly remarkable!", author: "Customer C" },
    { id: 5, quote: "Just received my custom cape and I'm thrilled! The design process was a breeze, the quality is top-notch, and the customer support was fantastic.", author: "Customer B" },
    { id: 2, quote: "Just received my custom cape and I'm thrilled! The design process was a breeze, the quality is top-notch, and the customer support was fantastic.", author: "Customer B" },
    { id: 4, quote: "I've never seen anything like it. Truly remarkable!", author: "Customer C" },
  ];

  return (
    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-gray-800 mb-12">
          What Our Customers Are Saying?
        </h2>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-1  flex flex-col gap-4 text-center shadow-xl p-6 rounded-lg  mb-6 md:mb-0  ">
              <div className=' w-full '>
                <img src={StarRating}  className='mx-auto'/>
              </div>
              <div className='w-full '>
                <img src={QuoteIcon}  className='mx-auto'/>
              </div>
              <blockquote className="italic">"{testimonial.quote}"</blockquote>
              <p className="mt-4 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
