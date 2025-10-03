import React from 'react';
import { useSelector } from 'react-redux';
import './css/CheckAttendance.css';

const CheckAttendance = () => {
  const attendanceData = useSelector(state => state.attendance);

  if (!attendanceData || attendanceData.length === 0) {
    return <div className="no-data">No attendance data available</div>;
  }

  const students = Array.from(
    new Map(attendanceData.map(a => [a.roll_no, { roll_no: a.roll_no, name: a.name }])).values()
  );

  const days = Array.from(
    new Set(attendanceData.map(a => new Date(a.date).getDate()))
  ).sort((a, b) => a - b);

  return (
    <div className="check-attendance-container">
      <h2>Monthly Attendance</h2>
      <div className="table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              {days.map(day => <th key={day}>{day}</th>)}
              <th>Total P</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => {
              const dailyStatus = days.map(day => {
                const record = attendanceData.find(
                  a => a.roll_no === student.roll_no && new Date(a.date).getDate() === day
                );
                return record?.Attendance === "Present" ? "P" : "A";
              });

              const totalPresent = dailyStatus.filter(s => s === "P").length;

              return (
                <tr key={student.roll_no}>
                  <td>{student.roll_no}</td>
                  <td>{student.name}</td>
                  {dailyStatus.map((status, idx) => <td key={idx} className={status === "P" ? "present" : "absent"}>{status}</td>)}
                  <td>{totalPresent}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckAttendance;
