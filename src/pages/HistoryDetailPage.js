import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HistoryDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { botName, title, description } = location.state || { botName: '', title: '', description: '' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">History Details</h1>
        
        <div className="mb-4">
          <label className="text-gray-400 block mb-2">Bot Name:</label>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{botName}</h2>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-400 block mb-2">Main Title:</label>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-gray-400 block mb-2">Details and Solutions:</label>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <p className="text-gray-300">{description}</p>
          </div>
        </div>

        <button 
          onClick={() => navigate(-1)} 
          className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
          Go Back
        </button>
      </div>
    </div>
  );
}

export default HistoryDetailPage;
