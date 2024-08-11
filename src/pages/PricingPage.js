import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
      
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Basic Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm lg:max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Basic Plan</h2>
          <p className="text-center text-gray-400 mb-6">$0.00/month</p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Access to basic features
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Limited AI consultations
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Email support
            </li>
          </ul>
          <Link 
            to="/signup" 
            className="block text-center py-3 bg-blue-500 text-white rounded-lg">
            Get Started
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm lg:max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Premium Plan</h2>
          <p className="text-center text-gray-400 mb-6">$29.99/month</p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Access to all features
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Unlimited AI consultations
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Priority email support
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Early access to new features
            </li>
          </ul>
          <Link 
            to="/signup" 
            className="block text-center py-3 bg-blue-500 text-white rounded-lg">
            Upgrade Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
