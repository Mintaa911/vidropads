import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-gray-400">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
