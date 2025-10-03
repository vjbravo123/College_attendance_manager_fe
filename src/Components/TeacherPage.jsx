import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const TeacherWelcome = () => {
  return (
    <>
    <Header/>
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome <span className="text-blue-600">Teachers!</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Access the Maharaja Agrasen College attendance management system to
            efficiently track and manage student attendance. Ensure secure and
            accurate record-keeping, saving valuable time and enhancing
            administrative processes. Login now to streamline your workflow and
            contribute to a more organized academic environment.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link to={'/TeacherLogin'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition">
              Login
            </Link>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-md transition">
              Learn
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_sb4pqsasu.webp" // Replace with your image
            alt="Teachers in classroom"
            className=" shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Teacher Login Section */}
      <section className="text-center px-6 md:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold">
          Teacher Login Access
        </h2>
        <p className="text-gray-600 mt-3 mb-6">
          Securely log in to manage attendance and view your dashboard
          efficiently.
        </p>

        <div className="flex justify-center gap-4">
          <Link to={'/TeacherLogin'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition">
            Login to Dashboard
          </Link>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-md transition">
            Need Help?
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default TeacherWelcome;