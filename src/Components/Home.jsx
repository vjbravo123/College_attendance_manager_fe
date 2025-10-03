import { Link } from 'react-router-dom';
import LoginSection from './LoginSection';
import CountUp from "react-countup";

const Home = () => {
  const features = [
  {
    img:"https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_rlrsn8haq.webp",
    title: "Intuitive User Interface",
    desc: "Our system offers a user-friendly interface, ensuring ease of use for both teachers and students at Maharaja Agrasen College."
  },
  {
    img:"https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_reuwigmle.webp",
    title: "Efficient Attendance Tracking",
    desc: "Teachers can efficiently track attendance, reducing manual errors and saving valuable time at Maharaja Agrasen College."
  },
  {
    img:"https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_r8crolduo.webp",
    title: "Real-Time Data Access",
    desc: "Access real-time attendance data, empowering students and teachers with up-to-date information at Maharaja Agrasen College."
  },
  {
    img:"https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_rl4qmbo0l.webp",
    title: "Comprehensive Reporting",
    desc: "Generate comprehensive reports to analyze attendance trends and improve overall efficiency at Maharaja Agrasen College."
  }
];
  return (
   <>
   
     <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-6 md:px-16 lg:px-28 py-10">
        
        {/* Heading */}
        <h1  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Welcome to <br /> Attendance <br /> Management <br /> System
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
          Streamlining attendance tracking for Maharaja Agrasen College. Our system 
          offers efficient attendance management, saving time and enhancing accuracy. 
          Sign up to experience seamless attendance tracking and management, designed 
          to improve administrative processes and academic oversight.
        </p>

        {/* Signup Form */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md bg-white text-black w-full sm:w-72 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold w-full sm:w-auto">
            Sign up
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_ry97pr0bb.webp" 
          alt="Attendance Dashboard" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
     <div className="loginsections" id='login'>
       <LoginSection role={'teacher'} heading={'Teacher Login Portal'} para1={'Access your attendance management dashboard securely and manage student '} para2={'attendance efficiently.'}/>
      <LoginSection role={'student'} heading={'Student Login Portal'} para1={'Access your attendance records and stay updated with your academic progress'} para2={' through our secure login system.'}/>
     </div>
       <section className="bg-gray-50 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-lg bg-white p-6"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-96 object-cover rounded-md mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-xl text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
      <section  id='about' className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://exciting-python.10web.cloud/wp-content/uploads/2025/10/tenweb_media_r1hyhgs1y.webp"
            alt="Students"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2  className="text-4xl md:text-5xl font-bold mb-10">
            About Maharaja <br /> Agrasen College
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 md:mb-18 md:mt-18">
            Maharaja Agrasen College is a renowned educational institution
            committed to fostering academic excellence and technological
            advancement. Established with the vision to enhance learning
            experiences through innovative solutions, the college continuously
            strives to integrate modern technology into its educational
            framework. Our core values include integrity, innovation,
            inclusivity, and a commitment to lifelong learning.
          </p>

          {/* Stats → 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <CountUp end={1000} duration={2.5} />+
              </h3>
              <p className="text-gray-600 text-sm">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <CountUp end={5000} duration={2.5} />+
              </h3>
              <p className="text-gray-600 text-sm">Total Students</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <CountUp end={150} duration={2.5} />%
              </h3>
              <p className="text-gray-600 text-sm">Growth in Attendance</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                <CountUp end={1200} duration={2.5} />k
              </h3>
              <p className="text-gray-600 text-sm">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  );
};

export default Home;
