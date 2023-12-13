import { Link } from "react-router-dom";
import React, { useState } from 'react';


function Register() {
    const [emailAdress, setEmailAdress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleRegister = async () => {
        const response = await fetch('/api/userRoutes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();

        if (data.status === 'ok') {
            setMessage('Registration successful!');
        } else {
            setMessage(data.error);
        }
    };
    
    return (
        <div className="h-screen text-white flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
        <header className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl">
            <h1 className="text-center text-2xl font-extrabold text-gray-200">Register</h1>
            <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Email"
                value={emailAdress}
                onChange={(e) => setEmailAdress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
            />
            </div>
            <button onClick={handleRegister} className="group relative w-full py-2 ox-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800">Register</button>
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
            <Link to="/">Login</Link>
        </header>
        </div>
    )
} 

export default Register;