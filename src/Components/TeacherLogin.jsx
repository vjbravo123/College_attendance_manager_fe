import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSubject } from '../Store/CollegeSlice';
const TeacherLogin = () => {
    const navigate = useNavigate();
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch();

    async function handleLogin(){
        const data = await axios.post('http://localhost:8080/auth/teacherLogin' ,{ username , password })
        if(data.data.validUser){
            localStorage.setItem('token' , data.data.token);
            dispatch(setSubject(data.data.subject))
            navigate('/TeacherDashboard');
            alert('Login Sucessfull');

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

export default TeacherLogin