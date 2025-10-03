import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
     <footer id='contact' className="bg-black text-white px-6 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* College */}
            <div>
              <h3 className="font-semibold text-lg mb-3">College</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Academics</a></li>
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Facilities</a></li>
              </ul>
            </div>
    
            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Teacher Login</a></li>
                <li><a href="#" className="hover:text-white">Student Login</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
    
            {/* Connect */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Alumni</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
    
            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest news and updates from Maharaja Agrasen College.
              </p>
              <form className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-l-md text-black outline-none mb-3 sm:mb-0 sm:mr-2"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
    
          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>Copyright © 2025 Maharaja Agrasen College. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Terms-and-conditions</a>
              <a href="#" className="hover:text-white">Privacy-policy</a>
            </div>
    
            <div className="flex gap-4 mt-4 md:mt-0 text-lg">
              <a href="#"><FaFacebook className="hover:text-white" /></a>
              <a href="#"><FaLinkedin className="hover:text-white" /></a>
              <a href="#"><FaTwitter className="hover:text-white" /></a>
            </div>
          </div>
        </footer>
  )
}

export default Footer