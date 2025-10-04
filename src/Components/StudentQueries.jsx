import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQueryStudentID } from "../Store/CollegeSlice";
import {Link} from 'react-router-dom';
const StudentQueries = () => { 
  const uri = import.meta.env.VITE_API_URL; 
  const dispatch = useDispatch();
  const subject = useSelector(state=>state.subject);
  const [queries, setQueries] = useState([]);

  const fetchQueries =async () =>{
      let uri =`${uri}/attendance/getAllQueries/${subject}`
      
      const {data} = await axios.get(uri);
      setQueries(data)
      // console.log(data);
      
    }
  useEffect(()=>{
    fetchQueries();
  } , [])

  const handleCheckAttendance = (student_id) => {
      dispatch(setQueryStudentID(student_id));

  };

  const handleAction = async(id) => {
    const {data} = await axios.delete(`${uri}/attendance/deleteQuery/${id}`)

    if(data.queryDeleted){
      alert(data.message);
    }
    fetchQueries();
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Student Queries
        </h1>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 border-b">Name</th>
                <th className="text-left py-3 px-4 border-b">Roll No.</th>
                <th className="text-left py-3 px-4 border-b">Query</th>
                <th className="text-center py-3 px-4 border-b">
                  Check Attendance
                </th>
                <th className="text-center py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {queries.length > 0 ? (
                queries.map((q) => (
                  <tr key={q.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{q.name}</td>
                    <td className="py-3 px-4 border-b">{q.rollNo}</td>
                    <td className="py-3 px-4 border-b">{q.query}</td>
                    <td className="py-3 px-4 border-b text-center">
                      <Link 
                        to={'/queryAttendanceReview'}
                        onClick={() => handleCheckAttendance(q.student_id)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                      >
                        Check
                      </Link>
                    </td>
                    <td className="py-3 px-4 border-b text-center">
                      <button
                        onClick={() => handleAction(q.id)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
                      >
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No queries available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentQueries;
