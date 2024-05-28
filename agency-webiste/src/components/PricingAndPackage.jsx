import React from 'react';
import CheckboxIcon from '../assets/checkbox-icon.png'; // Replace with your actual checkbox icon path
import WhitecheckBox from '../assets/white-checkbox.png'
import { buyPackage } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const PricingAndPackage = () => {
  // Dummy data for the pricing package
  const navigate = useNavigate();

  const packages = [
    { id: 1, name: 'Basic', price: '99', features: ['Feature 1', 'Feature 2', 'Feature 3'], perMonth: 'Per Month' },
    { id: 2, name: 'Premium', price: '299', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'], perMonth: 'Per Month', highlighted: true },
    { id: 3, name: 'Advanced', price: '199', features: ['Feature 1', 'Feature 2', 'Feature 3'], perMonth: 'Per Month' },
  ];

  return (
    <section className="">
        <div className='py-2 md:py-5'>
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-4">
            Pricing & Package
          </h2>
          <p className="w-[80%] md:w-[70%] mx-auto text-center text-sm md:text-lg  mb-4">
            Use Flair for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 xl:gap-16 mx-auto w-[90%]">
          {packages.map((pkg) => (
            <div key={pkg.id} className={` md:w-80 flex flex-col items-center text-center transition duration-300 ${pkg.highlighted ? 'bg-purple-normal text-white' : 'text-gray-800'} ${pkg.highlighted ? 'shadow-2xl z-10 py-8' : 'shadow-md py-6'} rounded-lg transform ${pkg.highlighted ? 'scale-105' : 'scale-100'} my-4 md:my-0`}>
              <h3 className="text-md font-semibold mb-4">{pkg.name}</h3>
              <p className="text-6xl font-bold mb-1">${pkg.price}</p>
              <p className="mb-6">{pkg.perMonth}</p>
              <ul className="flex flex-col items-center mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img src={pkg.highlighted? WhitecheckBox: CheckboxIcon} alt="Check" className={`w-4 h-4 mr-2 `} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`font-bold py-2 px-6  transition duration-300 ${pkg.highlighted ? 'bg-white text-purple-normal' : 'bg-white text-purple-normal border border-purple-normal'} hover:bg-purple-50`}
                style={{ borderRadius: '10px' }}
                onClick={() => {}} // Replace with your click handler
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

    </section>
  );
};

export default PricingAndPackage;
