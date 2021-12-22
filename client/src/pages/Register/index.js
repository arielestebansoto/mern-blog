import './styles.css'

import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form className="registerForm">
                <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput"
                    placeholder="Enter your username..." 
                />
                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput"
                    placeholder="Enter your email..." 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="registerInput"
                    placeholder="Enter your password..." 
                />
                <button className="registerButton">register</button>
            </form>
                <button 
                    className="registerLoginButton"
                >
                    <Link to="/login" className="link">Login</Link>
                </button>
        </div>
    )
}