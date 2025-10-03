import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSubject } from '../Store/CollegeSlice';
import './css/TeacherLogin.css'; // CSS file

const TeacherLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const { data } = await axios.post('http://localhost:8080/auth/teacherLogin', { username, password });
            if (data.validUser) {
                localStorage.setItem('token', data.token);
                dispatch(setSubject(data.subject));
                navigate('/TeacherDashboard');
                alert('Login Successful');
            } else {
                alert('Invalid Credentials');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed. Please try again.');
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Teacher Login</h2>
                <p>Enter your credentials to continue</p>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default TeacherLogin;
