import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaKeyboard, FaMicrophone, FaEllipsisH } from 'react-icons/fa';

const BotPage = () => {
  const location = useLocation();
  const { selectedRobot } = location.state || { selectedRobot: { name: '', image: '' } };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <img src={selectedRobot.image} alt={selectedRobot.name} className="w-32 mb-4 lg:w-64 lg:mb-8" />
      <p className="text-center text-xl mb-4 lg:text-2xl lg:mb-8">
        {selectedRobot.name}<span role="img" aria-label="emoji">🙂</span>
      </p>
      <div className="flex space-x-4 lg:space-x-8">
        <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition lg:p-6">
          <FaKeyboard className="text-2xl lg:text-3xl" />
        </button>
        <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition lg:p-6">
          <FaMicrophone className="text-2xl lg:text-3xl" />
        </button>
        <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition lg:p-6">
          <FaEllipsisH className="text-2xl lg:text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default BotPage;
