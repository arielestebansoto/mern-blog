import React from 'react'
import axios from 'axios'

import './styles.css'

import { Link } from 'react-router-dom'

export const Register = () => {
    const [ username, setUsername ] = React.useState('')
    const [ email, setEmail] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [ error, setError ] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            }) 
            res.data && window.location.replace('/login')
        } catch (err) {
            setError(true)
            console.log(err)
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form 
                className="registerForm"
                onSubmit={handleSubmit}
            >
                <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput"
                    placeholder="Enter your username..." 
                    onChange={ e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput"
                    placeholder="Enter your email..." 
                    onChange={ e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="registerInput"
                    placeholder="Enter your password..." 
                    onChange={ e => setPassword(e.target.value)}
                />
                <button 
                    className="registerButton"
                    type="submit"
                >
                    register
                </button>
            </form>
                <button 
                    className="registerLoginButton"
                >
                    <Link to="/login" className="link">Login</Link>
                </button>
                {
                    error && <span style={{color: 'red', marginTop: '10px'}}> Something went wrong!</span>
                }
        </div>
    )
}