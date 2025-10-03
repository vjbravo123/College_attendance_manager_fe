import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Attendance = () => {
  const rowdata = useSelector((state) => state.data);
  const subject = useSelector((state) => state.subject);

  const [attendance, setAttendance] = useState({});

  // Handle checkbox toggle
  const handleCheckBoxChange = (roll_no) => {
    setAttendance((prev) => ({
      ...prev,
      [roll_no]: !prev[roll_no],
    }));
  };

  // Convert attendance data to Excel and download
  const downloadExcel = (attendanceList) => {
    // Convert JSON → Sheet
    const worksheet = XLSX.utils.json_to_sheet(attendanceList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

    // Generate buffer //cpnverts workbook into binary array in .xlsx format
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array", //returns the workbook as a byte array, ready to be saved.
    });

    // Save as file
    // Creates a Blob from the binary array.
    // Blob is a file-like object in JS that browsers can download.
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });

    // Uses file-saver to trigger the download in the browser.
    // File is named like attendance_math_2025-10-02.xlsx.
    saveAs(file, `attendance_${subject}_${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  // Handle form submit
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/attendance/takeAttendance", {
        students: rowdata,
        AttendanceMap: attendance, // ✅ make sure key matches backend
        subject: subject,
      });

      alert(data.message);

      // Create a neat array for Excel export
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
    <div>
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", margin: "20px auto" }}
      >
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
              <td colSpan="3" style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
        }}
      >
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendance;
