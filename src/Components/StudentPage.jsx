import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
export default function StudentSignupPage() {
  const uri = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", roll_no: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.post(`${uri}/auth/studentSignup` , {
      form
    });
    if(data.signedUp){
      navigate("/studentslogin");
    }
    else{
      alert(data.message);
    }
    
  };

  return (
   <>
   <Header/>
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="flex flex-col lg:flex-row">
        {/* Left image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_shlbolh5d.webp"
            alt="students studying"
            className="w-full h-[70vh] lg:h-screen object-cover"
          />
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 w-full flex items-center">
          <div className="max-w-xl px-8 md:px-16 py-12 lg:py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span>Welcome,</span>
              <br />
              <span className="text-blue-500 text-5xl">Maharaja Agrasen</span>
              <br />
              <span>Students!</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl">
              Access your attendance records quickly and securely with our Attendance Management
              System. Stay informed about your attendance status and ensure you’re on track for
              success. Log in below to get started!
            </p>

            <div className="mt-8 flex items-center gap-4">
              {/* Primary hero button (filled blue) */}
              <button
                type="button"
                onClick={() => navigate("/studentslogin")}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
              >
                Login
              </button>

              {/* Secondary hero button (outline) */}
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-blue-300 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                Learn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNUP SECTION (below hero) */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-2">Student Signup</h2>
          <p className="text-gray-600 mb-8">
            Enter your credentials to access your personalized dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-green-600 font-medium mb-1">
                Username:
              </label>
              <input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full border border-gray-300 rounded-sm px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password:
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-sm px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Roll No */}
            <div>
              <label htmlFor="roll_no" className="block text-gray-700 font-medium mb-1">
                Roll No:
              </label>
              <input
                id="roll_no"
                name="roll_no"
                value={form.roll_no}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-sm px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Centered submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36 md:w-40 text-white bg-blue-600 font-semibold py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-8">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </div>
 <Footer/>
   </>
  );
}