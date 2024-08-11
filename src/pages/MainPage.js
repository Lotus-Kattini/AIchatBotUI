import React from 'react';
import { FaHome, FaComments, FaFolder, FaUser, FaPen, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import robotImage from '../Assets/bot.png';
import '../App.css';

const MainPage = () => {


const historyItems = [
  { botName: 'Bot 1', title: 'Give me ideas for writing a novel...', description: 'Some detailed description for writing a novel.' },
  { botName: 'Bot 2', title: 'Help me write a detailed character...', description: 'Some detailed description for writing a character.' },
  { botName: 'Bot 1', title: 'Describe and show me the perf...', description: 'Some detailed description for a performance.' },
  { botName: 'Bot 2', title: 'Suggest several ways to describe...', description: 'Some detailed description for description methods.' },
  // Add more history items here
];

const navigate = useNavigate();

  const handleHistoryClick = (item) => {
    navigate('/history-detail', { state: item });
  };


  return (
    <div className='bg-black'>
    <div className="flex flex-col items-center min-h-screen lg:mx-60 md:mx-30 sm:mx-2 text-black p-4 custom-bg ">
      
      {/* Navbar */}
      <nav className="w-full bg-gray-800 p-4 mb-4 fixed top-0 left-0 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">VR therapy</div>
        <div className="flex space-x-4">
          <FaHome className="text-white text-2xl" />
          <FaComments className="text-gray-400 text-2xl" />
          <FaFolder className="text-gray-400 text-2xl" />
          <FaUser className="text-gray-400 text-2xl" />
        </div>
      </nav>

      <div className="w-full pt-16">
        {/* Premium Plan Block */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full h-[30vh] lg:h-[35vh] xl:h-[40vh] custom flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <div className='flex items-center mb-4'>
            <img src={robotImage} alt="Robot" className="w-12 lg:w-20 lg:mr-4" />
            <h2 className="text-xl font-bold lg:text-2xl">Premium Plan</h2>
            </div>
          <p className="text-black text-sm mb-4 lg:text-base font-semibold w-[17rem]">
            Harness the full power of AI with a Premium Plan
            Harness the full power of AI with a Premium Plan
            Harness the full power of AI with a Premium Plan 
          </p>
          </div>
          <div>
          <Link to={'/pricing'}>
          <button className="w-full py-2 bg-black text-white rounded-lg lg:text-lg">
            Upgrade now
          </button>
          </Link>
          </div>
        </div>

        {/* Functionality Buttons */}
        <div>
        <h1 className='text-white text-xl font-semibold mb-3'>Start a new consultation?</h1>
        <div className="bg-gray-800 p-4 rounded-lg mb-4 lg:flex lg:space-x-4 flex items-start justify-between">
          <div>
          <h3 className='text-white text-sm lg:text-xl font-semibold mb-3'>Select your favoriate character and begin!</h3>
          <Link to={'/select-bot'} className="flex items-center justify-center p-4 bg-gray-700 rounded-lg mb-4 lg:mb-0  cursor-pointer">
            <FaPen className="text-blue-500 text-2xl mb-2 lg:text-3xl" />
            <p className="text-center text-sm lg:text-base text-white">Start new consultation</p>
          </Link>
          </div>
        <img src={robotImage} alt='bot' className='animated-bot sm:w-[10rem] self-center'/>

        </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 text-white">
          <h3 className="text-lg font-semibold mb-4 lg:text-2xl">Your consultation History</h3>
          <div className="space-y-2 lg:space-y-4">
          {historyItems.map((item, index) => (
              <button 
                key={index} 
                className="w-full flex justify-between items-center py-2 px-4 bg-gray-700 rounded-lg lg:py-3 lg:px-6 lg:text-lg"
                onClick={() => handleHistoryClick(item)}
              >
                <span>{item.title}</span>
                <FaArrowRight />
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MainPage;
