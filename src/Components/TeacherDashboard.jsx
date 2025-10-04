import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAttendance, setData } from "../Store/CollegeSlice";

const TeacherDashboard = () => {
  const uri = import.meta.env.VITE_API_URL;
  const subject = useSelector(state=>state.subject);
  const dispatch = useDispatch();

  async function handleClick() {
    const { data } = await axios.get(`${uri}/attendance/attendanceData/`);
    if (data) {
      dispatch(setData(data));
      console.log(data);
    }
  }

  async function handleCheckAttendance() {
    const { data } = await axios.get(`${uri}/attendance/getMonthlyAttendace/${subject}`);
    dispatch(setAttendance(data));
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
        Teacher Dashboard
      </h1>

      <div className="flex flex-col gap-5 w-full max-w-xs">
        <Link
          onClick={handleClick}
          to={'/Attendance'}
          className="block px-5 py-3 bg-blue-600 text-white font-medium text-base rounded-lg text-center shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transform transition hover:shadow-lg"
        >
          Take Attendance
        </Link>

        <Link
          to={'/queries'}
          className="block px-5 py-3 bg-blue-600 text-white font-medium text-base rounded-lg text-center shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transform transition hover:shadow-lg"
        >
          Student Queries
        </Link>

        <Link
          onClick={handleCheckAttendance}
          to={'/checkAttendance'}
          className="block px-5 py-3 bg-blue-600 text-white font-medium text-base rounded-lg text-center shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transform transition hover:shadow-lg"
        >
          View Attendance
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
