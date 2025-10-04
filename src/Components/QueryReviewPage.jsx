import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const QueryReviewPage = () => {
  const student_id = useSelector((state) => state.queryStudentid);
  const subject = useSelector((state) => state.subject);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/query/queryReview/${student_id}/${subject}`
        );
        setAttendance(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };
    if (student_id) fetchAttendance();
  }, [student_id]);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...attendance];
    updated[index].status = newStatus;
    setAttendance(updated);
  };

  const handleSave = async (record) => {
    try {
      await axios.put(
        `http://localhost:8080/query/changeAttendance/${record._id}`,
        { status: record.status }
      );
      alert("Attendance updated successfully!");
    } catch (error) {
      console.error("Error updating attendance:", error);
      alert("Failed to update attendance.");
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Query Review: Student Attendance
        </h1>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 border-b">Name</th>
                <th className="text-left py-3 px-4 border-b">Roll No.</th>
                <th className="text-left py-3 px-4 border-b">Date</th>
                <th className="text-left py-3 px-4 border-b">Status</th>
                <th className="text-center py-3 px-4 border-b">Change Status</th>
                <th className="text-center py-3 px-4 border-b">Save</th>
              </tr>
            </thead>
            <tbody>
              {attendance.length > 0 ? (
                attendance.map((record, index) => (
                  <tr key={record._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{record.name}</td>
                    <td className="py-3 px-4 border-b">{record.roll_no}</td>
                    <td className="py-3 px-4 border-b">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 border-b">{record.status}</td>
                    <td className="py-3 px-4 border-b text-center">
                      <select
                        value={record.status}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                        className="px-2 py-1 border rounded-md"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 border-b text-center">
                      <button
                        onClick={() => handleSave(record)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No attendance records available.
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

export default QueryReviewPage;
