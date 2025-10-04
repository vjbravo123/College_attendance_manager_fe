import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoginSection = ({ heading, para1, para2, role }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos={role === 'student' ? 'fade-right' : 'fade-left'}
      data-aos-delay="200"
      className={`h-90 flex flex-col ${role === 'student' ? 'bg-[#007BBF]' : ''} justify-center items-center text-center py-10`}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="400"
        className={`${role === 'student' ? 'text-white' : ''} text-5xl font-bold mb-5`}
      >
        {heading}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className={`${role === 'student' ? 'text-white' : ''} text-center font-extralight mb-5 mt-5`}
        style={{ fontFamily: 'Montserrat', fontSize: '18px' }}
      >
        {para1} <br /> {para2}
      </p>
      <Link
        data-aos="flip-up"
        data-aos-delay="800"
        to={`${role === 'student' ? '/Studentslogin' : '/teacherLogin'}`}
        className={`${role === 'student' ? 'bg-white' : 'bg-[#007BBF] text-white'} border-1 rounded-sm py-[12px] px-[24px]`}
      >
        Login to Dashboard
      </Link>
    </div>
  );
};

export default LoginSection;
