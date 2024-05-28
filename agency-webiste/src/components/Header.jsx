import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="py-3 flex justify-between  items-center">
        <a className="text-3xl font-bold text-gray-800" href="/">Logo</a>
        <div className="md:hidden">
          {!isMobileMenuOpen && (
            <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-indigo-600 focus:outline-none">
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
            <a href="#hero" className="block text-gray-800 font-medium hover:text-indigo-600 py-2">Home</a>
            <a href="#example-videos" className="block text-gray-800 font-medium hover:text-indigo-600 py-2">Example</a>
            <a href="#testimonials" className="block text-gray-800 font-medium hover:text-indigo-600 py-2">Reviews</a>
            <a href="#faq" className="block text-gray-800 font-medium hover:text-indigo-600 py-2">FAQ</a>
          </div>
      </nav>
      {/* Mobile Menu */}
      <div ref={menuRef} className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-64 bg-white shadow-lg z-30 overflow-auto md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-indigo-600">
            {/* Close Icon */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
            <a href="#hero" className="block text-gray-800 hover:text-indigo-600 py-2">Home</a>
            <a href="#example-videos" className="block text-gray-800 hover:text-indigo-600 py-2">Example</a>
            <a href="#testimonials" className="block text-gray-800 hover:text-indigo-600 py-2">Reviews</a>
            <a href="#faq" className="block text-gray-800 hover:text-indigo-600 py-2">FAQ</a>
           </div>
      </div>
    </header>
  );
};

export default Header;
