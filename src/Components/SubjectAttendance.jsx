import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './css/SubjectAttendance.css';

const SubjectAttendance = () => {
  const [attendanceRecord, setAttendanceRecord] = useState([]);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
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

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      await axios.post(`http://localhost:8080/attendance/query`, {
        roll_no,
        subject,
        query
      });
      setMessage("Query submitted successfully!");
      setQuery('');
    } catch (err) {
      console.error(err);
      setMessage("Error submitting query.");
    }
  };

  // Calculate attendance percentage
  const total = attendanceRecord.length;
  const presentCount = attendanceRecord.filter(r => r.status).length;
  const percentage = total > 0 ? Math.round((presentCount / total) * 100) : 0;

  return (
    <div className="attendance-container">
      <h2>Attendance for {subject}</h2>

      <div className="attendance-overview">
        <div className="circular-progress">
          <CircularProgressbar 
            value={percentage} 
            text={`${percentage}%`} 
            styles={buildStyles({
              textColor: '#2f80ed',
              pathColor: '#2f80ed',
              trailColor: '#d6d6d6',
              textSize: '16px'
            })}
          />
        </div>
        <div className="summary">
          <p><strong>Total Classes:</strong> {total}</p>
          <p><strong>Present:</strong> {presentCount}</p>
          <p><strong>Absent:</strong> {total - presentCount}</p>
        </div>
      </div>

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

      <div className="query-form">
        <h3>Submit Attendance Query</h3>
        <form onSubmit={handleQuerySubmit}>
          <textarea 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Write your query here..."
            required
          />
          <button type="submit">Submit Query</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default SubjectAttendance;
