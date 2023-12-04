import { Link } from "react-router-dom";
import React, { useState } from 'react';


function Register() {
    const [emailAdress, setEmailAdress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleRegister = async () => {
        const response = await register(username, password);
        
        const data = await response.json();
        
        if (data.status === 'ok') {
        setMessage('Registration successful!');
        } else {
        setMessage(data.error);
        }
    };
    
    return (
        <div className="App">
        <header className="App-header">
            <h1>Register</h1>
            <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Email"
                value={emailAdress}
                onChange={(e) => setEmailAdress(e.target.value)}
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button onClick={handleRegister}>Register</button>
            <p>{message}</p>
            <Link to="/">Login</Link>
        </header>
        </div>
    )
} 

export default Register;