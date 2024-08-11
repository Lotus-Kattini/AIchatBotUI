import React, { useEffect, useState } from 'react';
import robotImage from '../Assets/bot.png'; 
import {FaEnvelope,FaEye,FaEyeSlash,FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookiePassword, setcookiePassword] = useState('')
  const [cookieEmail, setcookieEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const cookie = Cookie();
  const nav=useNavigate()

  useEffect(()=>{
    setcookiePassword(cookie.get('password'))
    setcookieEmail(cookie.get('email'))
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function HandelLogin(e){
    e.preventDefault();
    if(email === cookieEmail && password === cookiePassword){
      notify()
      setTimeout(() => {
        nav('/main')
      }, 2500);
    }else{
      errorNotify()
    }
  }

  const notify = () => toast.success(`Welcome Back!`,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const errorNotify=()=>toast.error('Email or Password are incorrect !', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <div className="flex justify-center mb-6">
          <img src={robotImage} alt="Robot" className="w-32 drop-shadow-lg" />
        </div>
        <h2 className="text-center text-xl font-semibold mb-4">Welcom Back</h2>
        <form className="space-y-4">
          
          <div className="relative">
            <input 
              type="email" 
              className="w-full p-4 pl-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="w-full p-4 pl-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
            </div>
          </div>
          <button onClick={HandelLogin} className="w-full py-3 mt-6 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-lg">
            Log in
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account? <Link to={'/sign-up'} className="text-blue-500">Sign up here</Link>
        </p>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

export default LoginPage;
