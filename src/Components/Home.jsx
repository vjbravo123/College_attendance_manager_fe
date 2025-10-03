import { useNavigate } from "react-router-dom";
import "./css/Home.css"; // CSS is in css folder

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>College Attendance Manager</h1>
        <p>Select your login to continue</p>
        <div className="button-group">
          <button className="home-btn teacher-btn" onClick={() => navigate("/Teacherlogin")}>
            Teacher Login
          </button>
          <button className="home-btn student-btn" onClick={() => navigate("/Studentslogin")}>
            Student Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
