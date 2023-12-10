import { Link } from "react-router-dom";
import React, { useState } from 'react';


function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    
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
        navigate('/dashboard') // redirect to dashboard
        } else {
        setMessage(data.error);
        }
    };
    
    return (
        <div className="h-screen text-white flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
            <div className="App-header max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
                <h2 className="text-center text-2xl font-extrabold text-gray-200">Login to your account</h2>
                <div>
                <input
                    type="text"
                    placeholder="Username/Email"
                    value={username || emailAdress}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded  focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
                </div>
                <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
                </div>
                <button onClick={handleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Login</button>
                <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
                <Link to="/register_page">Register</Link>
            </div>
        </div>
    )
}

export default Login;