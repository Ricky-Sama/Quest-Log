import { Link } from "react-router-dom";
import React, { useState } from 'react';


function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    
    const handleLogin = async () => {
        const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        
        if (data.status === 'ok') {
        setMessage('Login successful!');
        } else {
        setMessage(data.error);
        }
    };
    
    return (
        <div className="App">
        <header className="App-header">
            <h1>Login</h1>
            <div>
            <input
                type="text"
                placeholder="Username/Email"
                value={username || emailAdress}
                onChange={(e) => setUsername(e.target.value)}
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
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
            <Link to="/register_page">Register</Link>
        </header>
        </div>
    )
}

export default login;