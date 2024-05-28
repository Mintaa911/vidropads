import React from 'react';
// Assume you have these icons in your assets folder
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-center md:px-8">
      <div className="mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" className="inline-block w-6 h-6 mx-2"/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter" className="inline-block w-6 h-6 mx-2"/></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className="inline-block w-6 h-6 mx-2"/></a>
      </div>
      <div className="mb-4 text-xs md:text-lg">
        <Link to={"/term-and-codition"} className="hover:text-gray-400 transition duration-300 mx-2">Terms of Service</Link>
        <Link to={"/privacy-policy"} className="hover:text-gray-400 transition duration-300 mx-2">Privacy Policy</Link>
        <Link to={"/refund-policy"} className="hover:text-gray-400 transition duration-300 mx-2">Refund Policy</Link>
        <Link to={"/"} className="hover:text-gray-400 transition duration-300 mx-2">Contact Us</Link>
        <Link to={"/"} className="hover:text-gray-400 transition duration-300 mx-2">Pricing</Link>
      </div>
      <div className="mb-4">
        <a href="https://www.vidropads.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">VIDropads.com</a>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
