import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set_roll_no } from '../Store/CollegeSlice';
import './css/StudentLogin.css';

const StudentLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const { data } = await axios.post('http://localhost:8080/auth/studentLogin', { username, password });
            if (data.validUser) {
                localStorage.setItem('token', data.token);
                dispatch(set_roll_no(data.roll_no));
                alert('Login Successful');
                navigate('/StudentDashboard');
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
                <h2>Student Login</h2>
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

export default StudentLogin;
