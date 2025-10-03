import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './css/Attendance.css';

const Attendance = () => {
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
      const { data } = await axios.post("http://localhost:8080/attendance/takeAttendance", {
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
    <div className="attendance-container">
      <h2>Take Attendance - {subject}</h2>
      <div className="table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {rowdata && rowdata.length > 0 ? (
              rowdata.map((r) => (
                <tr key={r.roll_no}>
                  <td>{r.name}</td>
                  <td>{r.roll_no}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={attendance[r.roll_no] || false}
                      onChange={() => handleCheckBoxChange(r.roll_no)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
};

export default Attendance;
