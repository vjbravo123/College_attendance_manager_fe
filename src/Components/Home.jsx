import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();
     
  return (
     <div>
      <button onClick={()=>{navigate('/Teacherlogin')}}>Teacher login</button>
      <button onClick={()=>{navigate('/Studentslogin')}}>Students login</button>
    </div>
  )
}

export default Home