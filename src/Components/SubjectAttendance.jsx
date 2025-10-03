import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const SubjectAttendance = () => {
  const [attendanceRecord , setAttendanceRecord] = useState([]);
  const roll_no = useSelector(state => state.roll_no);
    const {subject} = useParams();
    console.log(subject);
    useEffect(()=>{
        const fetchAttendance = async () =>{
            const {data} = await axios.get(`http://localhost:8080/attendance/${subject}/${roll_no}`);
            console.log(data);
            setAttendanceRecord(data);
        }
        fetchAttendance();
    },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecord.length > 0 ? <>{attendanceRecord.map((r)=>{
            return <tr>
              <td>{new Date(r.date).toLocaleDateString()}</td>
              <td>{r.status ? "Present" : "Absent"}</td>
            </tr>
          })}</> : <><tr><td colSpan={2}>No data to display</td></tr></>}
        </tbody>
      </table>
    </div>
  )
}

export default SubjectAttendance