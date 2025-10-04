import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Attendance = () => {
  const uri = import.meta.env.VITE_API_URL;
  const rowdata = useSelector((state) => state.data);
  const subject = useSelector((state) => state.subject);

  const [attendance, setAttendance] = useState({});

  const handleCheckBoxChange = (roll_no) => {
    setAttendance((prev) => ({
      ...prev,
      [roll_no]: !prev[roll_no],
    }));
  };

  const downloadExcel = (attendanceList) => {
    const worksheet = XLSX.utils.json_to_sheet(attendanceList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, `attendance_${subject}_${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${uri}/attendance/takeAttendance`, {
        students: rowdata,
        AttendanceMap: attendance,
        subject: subject,
      });

      alert(data.message);

      const attendanceList = rowdata.map((student) => ({
        Name: student.name,
        Roll_No: student.roll_no,
        Subject: subject,
        Date: new Date().toLocaleDateString(),
        Status: attendance[student.roll_no] ? "Present" : "Absent",
      }));

      downloadExcel(attendanceList);
    } catch (err) {
      console.error("Error submitting attendance:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-5 py-8 max-w-4xl mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-center mb-6 text-gray-800 font-semibold text-2xl">
        Take Attendance - {subject}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white uppercase tracking-wide text-sm">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Roll No</th>
              <th className="px-4 py-3">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {rowdata && rowdata.length > 0 ? (
              rowdata.map((r) => (
                <tr key={r.roll_no} className="border-b border-gray-200 text-center">
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.roll_no}</td>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={attendance[r.roll_no] || false}
                      onChange={() => handleCheckBoxChange(r.roll_no)}
                      className="w-5 h-5 cursor-pointer accent-blue-600"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-5 text-gray-500 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSubmit}
        className="block mx-auto mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg font-medium text-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transform transition"
      >
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendance;
