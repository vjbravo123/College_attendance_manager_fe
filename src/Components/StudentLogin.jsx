import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { set_roll_no } from '../Store/CollegeSlice';
const StudentLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');
  

    async function handleLogin(){
        const data = await axios.post('http://localhost:8080/auth/studentLogin' ,{ username , password })
        if(data.data.validUser){
            localStorage.setItem('token' , data.data.token);
            dispatch(set_roll_no(data.data.roll_no))
            alert('Login Sucessfull');
            navigate('/StudentDashboard');
        }
    }
  return (
     <div>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default StudentLogin