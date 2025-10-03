import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setData } from "../Store/CollegeSlice";


const TeacherDashboard = () => {
  const dispatch = useDispatch();
  async function handleClick(){
    const data = await axios.get(`http://localhost:8080/attendance/attendanceData/`)
    if(data){
      dispatch(setData(data.data))
      console.log(data.data);
      
    }
  }
  return (
    <div>
        <Link onClick={handleClick} to={'/Attendance'}>Take Attendance</Link>
        <br />
        <Link to={'/queries'}>Student Queries</Link>
        <br />
        <Link to={'/checkAttendance'}>View attendance</Link>
    </div>
  )
}

export default TeacherDashboard