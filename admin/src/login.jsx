// src/Login.jsx
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <input type="password" placeholder="Password" required />
                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
               
            </div>
            <div className="login-right">
                <h3>Check Your Project Progress</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                <div className="progress-image">
                    {/* Your image/illustration here */}
                </div>
            </div>
        </div>
    );
}

export default Login;
