import React, { useEffect, useState } from 'react';
import robotImage from '../Assets/bot.png'; 
import { Link } from 'react-router-dom';
import Cookie from 'cookie-universal';


const FirstPage = () => {
  const cookie = Cookie();
  const [email,setemail]=useState('')
  useEffect(()=>{
    setemail(cookie.get('email'))
  },[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="mt-10">
        <img src={robotImage} alt="Robot" className="w-48 mx-auto" />
      </div>
      <h1 className="mt-6 text-3xl font-bold text-center">Providing the Best Solutions</h1>
      <p className="mt-2 text-center text-gray-400">
        AI assistant can answer any of your questions. Just ask!
      </p>
      <Link to={`${email ? '/main' : '/login'}`} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full">
        Start Conversation
      </Link>
      <p className="mt-4 text-center text-gray-400">
        Already have an account? <Link to={'/sign-up'} className="text-blue-500">Sign in</Link>
      </p>
    </div>
  );
}

export default FirstPage;
