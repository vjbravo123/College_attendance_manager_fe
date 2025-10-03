import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAttendance, setData } from "../Store/CollegeSlice";
import "./css/TeacherDashboard.css";

const TeacherDashboard = () => {
  const dispatch = useDispatch();

  async function handleClick() {
    const { data } = await axios.get(`http://localhost:8080/attendance/attendanceData/`);
    if (data) {
      dispatch(setData(data));
      console.log(data);
    }
  }

  async function handleCheckAttendance() {
    const { data } = await axios.get('http://localhost:8080/attendance/getMonthlyAttendace');
    dispatch(setAttendance(data));
  }

  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>
      <div className="dashboard-buttons">
        <Link onClick={handleClick} to={'/Attendance'} className="dashboard-btn">
          Take Attendance
        </Link>
        <Link to={'/queries'} className="dashboard-btn">
          Student Queries
        </Link>
        <Link onClick={handleCheckAttendance} to={'/checkAttendance'} className="dashboard-btn">
          View Attendance
        </Link>
      </div>
    </div>
  )
}

export default TeacherDashboard;
