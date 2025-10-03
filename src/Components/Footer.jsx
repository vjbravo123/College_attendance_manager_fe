import React from "react";
import { Link } from "react-router-dom";
import './css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <h2>College Attendance Manager</h2>
      <p>© 2025 All Rights Reserved | Developed by Joshi</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
