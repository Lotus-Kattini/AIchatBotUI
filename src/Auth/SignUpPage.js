import React, { useState } from 'react';
import robotImage from '../Assets/bot.png'; 
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpPage = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const nav=useNavigate()
  const cookie = Cookie();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== ''  && email !==''  && phone!== '' && password!== ''){
      notify()
      cookie.set('name',name)
      cookie.set('email',email)
      cookie.set('password',password)
      setTimeout(() => {
        nav('/main')
      }, 2500);
    }else{
      errorNotify()
     
    }
  };

  const notify = () => toast.success(`Welcome ${name}`,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const errorNotify=()=>toast.error('Something Went Wrong', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <div className="flex justify-center mb-6">
          <img src={robotImage} alt="Robot" className="w-32 drop-shadow-lg" />
        </div>
        <h2 className="text-center text-xl font-semibold mb-4">Create Account</h2>
        <form className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              className="w-full p-4 pl-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
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
              type="text" 
              className="w-full p-4 pl-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="w-full p-4 pl-12 pr-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              minLength={8}
              placeholder="Password ( 8 characters or more )"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
            </div>
          </div>
          <button type="button" className="w-full py-3 mt-6 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-lg" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have one? <Link to="/login" className="text-blue-500 ">Login here</Link>
        </p>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default SignUpPage;
