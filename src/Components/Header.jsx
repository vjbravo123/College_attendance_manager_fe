import React from "react";
import { Link } from "react-router-dom";
import './css/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Attendance Manager</h1>
      <nav>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/subjects" className="nav-link">Subjects</Link>
        <Link to="/students" className="nav-link">Students</Link>
        <Link to="/reports" className="nav-link">Reports</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
