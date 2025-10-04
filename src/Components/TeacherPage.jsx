import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const TeacherWelcome = () => {
  const uri = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    subject: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${uri}/auth/teacherSignup`, { formData });
      if (data.signedUp) {
        alert("Signup completed");
        navigate("/TeacherLogin");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div className="w-full flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left px-6 md:px-16 py-10 space-y-6">
            <h1 data-aos="fade-right" className="text-3xl md:text-4xl font-bold">
              Welcome <span className="text-blue-600">Teachers!</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 leading-relaxed">
              Access the Maharaja Agrasen College attendance management system
              to efficiently track and manage student attendance. Ensure secure
              and accurate record-keeping, saving valuable time and enhancing
              administrative processes. Login now to streamline your workflow
              and contribute to a more organized academic environment.
            </p>

            <div data-aos="zoom-in" data-aos-delay="400" className="flex justify-center md:justify-start gap-4 flex-wrap">
              <Link
                to={"/TeacherLogin"}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
              >
                Login
              </Link>
              <a
                href="#teacher-signup"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-md transition"
              >
                Signup
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="md:w-1/2 w-full md:h-auto">
            <img
              src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_sb4pqsasu.webp"
              alt="Teachers in classroom"
              className="w-full h-[70vh] md:h-full object-cover md:rounded-none rounded-b-md"
            />
          </div>
        </section>

        {/* Teacher Signup Section */}
        <section
          id="teacher-signup"
          className="text-center px-6 md:px-16 py-16 bg-gray-50"
        >
          <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-bold">
            Teacher Signup Access
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 mt-3 mb-6">
            Create your account to securely manage attendance and access your
            dashboard.
          </p>

          <form
            onSubmit={handleSignup}
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-md mx-auto flex flex-col gap-4"
          >
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Add your subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
            >
              Signup
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TeacherWelcome;
