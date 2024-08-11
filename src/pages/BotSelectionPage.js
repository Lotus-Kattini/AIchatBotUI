import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bot1Image from '../Assets/bot.png';
import bot2Image from '../Assets/bot2.png';

const robots = [
  { name: 'Bot 1', image: bot1Image },
  { name: 'Bot 2', image: bot2Image },
];

const BotSelectionPage = () => {
  const [selectedRobot, setSelectedRobot] = useState(robots[0]);

  const handleChange = (e) => {
    const selectedBot = robots.find(robot => robot.name === e.target.value);
    setSelectedRobot(selectedBot);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className='text-2xl font-bold mb-4'>Befor we start select the vertual therapy character you want:</h1>
      {/* <h1 className="text-xl mb-4">Select a Robot</h1> */}
      <select 
        className="p-2 bg-gray-700 rounded-lg mb-4" 
        value={selectedRobot.name} 
        onChange={handleChange}
      >
        {robots.map(robot => (
          <option key={robot.name} value={robot.name}>
            {robot.name}
          </option>
        ))}
      </select>
      <img src={selectedRobot.image} alt={selectedRobot.name} className="w-32 mb-4" />
      <Link to="/bot" state={{ selectedRobot }}>
        <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Start</button>
      </Link>
    </div>
  );
};

export default BotSelectionPage;
