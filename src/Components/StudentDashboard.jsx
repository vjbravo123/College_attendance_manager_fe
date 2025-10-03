import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './css/StudentDashboard.css';

const StudentDashboard = () => {
  const [subjectList, setSubjectList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSubjectList() {
      try {
        const { data } = await axios.get('http://localhost:8080/attendance/subjectlist');
        setSubjectList(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSubjectList();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="student-dashboard-container">
      <div className="dashboard-header">
        <h2>Student Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="subject-list">
        {subjectList.length > 0 ? (
          subjectList.map((s) => (
            <Link key={s.subject} to={`/subjectAttendance/${s.subject}`} className="subject-card">
              {s.subject}
            </Link>
          ))
        ) : (
          <p className="no-subject">No subjects available</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
