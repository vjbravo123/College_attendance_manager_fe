import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SubjectAttendance = () => {
  const uri = import.meta.env.VITE_API_URL;
  const [attendanceRecord, setAttendanceRecord] = useState([]);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const roll_no = useSelector(state => state.roll_no);
  const { subject } = useParams();

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axios.get(`${uri}/attendance/${subject}/${roll_no}`);
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
      await axios.post(`${uri}/attendance/query`, { roll_no, subject, query });
      setMessage("Query submitted successfully!");
      setQuery('');
    } catch (err) {
      console.error(err);
      setMessage("Error submitting query.");
    }
  };

  const total = attendanceRecord.length;
  const presentCount = attendanceRecord.filter(r => r.status).length;
  const percentage = total > 0 ? Math.round((presentCount / total) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-5">Attendance for {subject}</h2>

      {/* Attendance Overview */}
      <div className="flex flex-wrap items-center justify-around mb-6">
        <div className="w-28 h-28 mb-2">
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
        <div className="space-y-1 text-gray-700 font-medium">
          <p><strong>Total Classes:</strong> {total}</p>
          <p><strong>Present:</strong> {presentCount}</p>
          <p><strong>Absent:</strong> {total - presentCount}</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead className="bg-blue-600 text-white font-semibold">
            <tr>
              <th className="px-4 py-2 text-center">Date</th>
              <th className="px-4 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecord.length > 0 ? (
              attendanceRecord.map((r, idx) => (
                <tr key={idx} className="bg-gray-50 hover:bg-blue-50 transition">
                  <td className="px-4 py-2 text-center">{new Date(r.date).toLocaleDateString()}</td>
                  <td className={`px-4 py-2 text-center font-medium ${r.status ? 'text-green-600' : 'text-red-500'}`}>
                    {r.status ? "Present" : "Absent"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center text-gray-500 italic py-4">
                  No data to display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Query Form */}
      <div className="mt-6">
        <h3 className="text-blue-600 mb-2 font-semibold text-lg">Submit Attendance Query</h3>
        <form onSubmit={handleQuerySubmit} className="space-y-2">
          <textarea 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Write your query here..."
            required
            className="w-full min-h-[100px] p-2 text-sm border border-gray-300 rounded-md resize-y"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit Query
          </button>
        </form>
        {message && <p className="mt-2 text-green-600 font-medium">{message}</p>}
      </div>
    </div>
  );
};

export default SubjectAttendance;
