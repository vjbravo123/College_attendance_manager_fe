import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './css/SubjectAttendance.css';

const SubjectAttendance = () => {
  const [attendanceRecord, setAttendanceRecord] = useState([]);
  const roll_no = useSelector(state => state.roll_no);
  const { subject } = useParams();

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/attendance/${subject}/${roll_no}`);
        setAttendanceRecord(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAttendance();
  }, [subject, roll_no]);

  return (
    <div className="attendance-container">
      <h2>Attendance for {subject}</h2>
      <div className="table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecord.length > 0 ? (
              attendanceRecord.map((r, idx) => (
                <tr key={idx}>
                  <td>{new Date(r.date).toLocaleDateString()}</td>
                  <td className={r.status ? 'present' : 'absent'}>
                    {r.status ? "Present" : "Absent"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="no-data">No data to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectAttendance;
