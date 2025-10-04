import React from 'react';
import { useSelector } from 'react-redux';

const CheckAttendance = () => {
  const attendanceData = useSelector(state => state.attendance);

  if (!attendanceData || attendanceData.length === 0) {
    return (
      <div className="text-center mt-12 text-gray-500 text-lg">
        No attendance data available
      </div>
    );
  }

  const students = Array.from(
    new Map(attendanceData.map(a => [a.roll_no, { roll_no: a.roll_no, name: a.name }])).values()
  );

  const days = Array.from(
    new Set(attendanceData.map(a => new Date(a.date).getDate()))
  ).sort((a, b) => a - b);

  return (
    <div className="px-5 py-8 max-w-5xl mx-auto">
      <h2 className="text-center mb-6 text-gray-800 font-semibold text-2xl">
        Monthly Attendance
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse bg-white rounded-lg shadow-md">
          <thead className="sticky top-0 bg-blue-600 text-white">
            <tr>
              <th className="px-3 py-2 text-center text-sm font-medium uppercase tracking-wide">Roll No</th>
              <th className="px-3 py-2 text-center text-sm font-medium uppercase tracking-wide">Name</th>
              {days.map(day => (
                <th key={day} className="px-3 py-2 text-center text-sm font-medium uppercase tracking-wide">{day}</th>
              ))}
              <th className="px-3 py-2 text-center text-sm font-medium uppercase tracking-wide">Total P</th>
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
                <tr key={student.roll_no} className="hover:bg-gray-100">
                  <td className="px-3 py-2 text-center text-sm">{student.roll_no}</td>
                  <td className="px-3 py-2 text-center text-sm">{student.name}</td>
                  {dailyStatus.map((status, idx) => (
                    <td
                      key={idx}
                      className={`px-3 py-2 text-center text-sm font-semibold ${
                        status === "P" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {status}
                    </td>
                  ))}
                  <td className="px-3 py-2 text-center text-sm font-semibold">{totalPresent}</td>
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
