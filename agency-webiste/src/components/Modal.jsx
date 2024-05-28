import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Join Us</h2>
        <p className="mb-4">Sign up to get started!</p>
        <button onClick={closeModal} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};


export default Modal