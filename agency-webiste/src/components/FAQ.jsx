import React from 'react';
import FAQItem from './FAQItem'; // Adjust the import path as necessary

const FAQs = () => {
  const faqList = [
    { id: 1, question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase." },
    { id: 2, question: "How do I track my order?", answer: "You can track your order through our website using your order number." },
    { id: 3, question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase." },
    { id: 4, question: "How do I track my order?", answer: "You can track your order through our website using your order number." },
    // Add more FAQs here
  ];

  return (
    <section className="py-12">
      <div className="px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="w-[80%] md:w-[50%] mx-auto">
          {faqList.map(faq => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
