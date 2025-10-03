import React, { useState } from "react";

const StudentQueries = () => {
  const [queries, setQueries] = useState([
    { id: 1, query: "I think my attendance is miscalculated for Math class." },
    { id: 2, query: "Can you please update attendance for 25th Sept?" },
    { id: 3, query: "My attendance in Physics shows absent but I was present." },
  ]);

  const handleCheckAttendance = () => {
    alert("Redirecting to attendance page...");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Student Queries
        </h1>

        {/* Queries List */}
        <div className="space-y-4">
          {queries.length > 0 ? (
            queries.map((q) => (
              <div
                key={q.id}
                className="border rounded-lg p-4 bg-gray-50 hover:shadow-sm transition"
              >
                <p className="text-gray-700">{q.query}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No queries available.</p>
          )}
        </div>

        {/* Attendance Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCheckAttendance}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Check Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentQueries;
