import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
const StudentDashboard = () => {
  const [subjectList , setSubjectList] = useState([]);
  useEffect(()=>{
    async function fetchSubjectList(){
      const {data} = await axios.get('http://localhost:8080/attendance/subjectlist');
      setSubjectList(data);
      console.log(data[0]);
      
    }
    fetchSubjectList();
  },[])
  return (
    <div>{subjectList.length > 0 ? <>{subjectList.map((s)=>{return <><Link to={`/subjectAttendance/${s.subject}`} >{s.subject}</Link></>})}</> : <><p>No subject</p></>}</div>
 )
}

export default StudentDashboard