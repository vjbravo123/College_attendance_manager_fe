import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="max-w-4xl mx-auto px-5 py-8 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Student Dashboard</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded-lg font-medium text-sm hover:bg-red-700 hover:-translate-y-0.5 transform transition"
        >
          Logout
        </button>
      </div>

      {/* Subject list */}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_200px))] gap-5 justify-center">
        {subjectList.length > 0 ? (
          subjectList.map((s) => (
            <Link
              key={s.subject}
              to={`/subjectAttendance/${s.subject}`}
              className="flex items-center justify-center px-3 py-4 bg-blue-600 text-white rounded-lg font-medium text-base text-center shadow-md hover:bg-blue-700 hover:-translate-y-1 transform transition"
            >
              {s.subject}
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No subjects available</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
