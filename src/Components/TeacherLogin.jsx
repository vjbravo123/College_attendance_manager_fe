import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSubject } from '../Store/CollegeSlice';

const TeacherLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      const { data } = await axios.post('http://localhost:8080/auth/teacherLogin', { username, password });
      if (data.validUser) {
        localStorage.setItem('token', data.token);
        dispatch(setSubject(data.subject));
        navigate('/TeacherDashboard');
        alert('Login Successful');
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Teacher Login</h2>
        <p className="text-gray-500 text-sm md:text-base mb-8">Enter your credentials to continue</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-400 outline-none transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-md border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-400 outline-none transition"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 font-semibold rounded-lg text-lg text-white transition transform hover:scale-105 hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #4b6cb7, #182848)' }}
        >
          Login
        </button>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-15px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 0.8s ease-in-out; }
          `}
        </style>
      </div>
    </div>
  );
};

export default TeacherLogin;
