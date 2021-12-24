import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './styles.css'

import { Context } from '../../context/Context'
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../context/actionsTypes'

export const Login = () => {

    const userRef = React.useRef()
    const passwordRef = React.useRef()
    const { dispatch, isFetching } = React.useContext(Context)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: LOGIN_START })
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            })            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({type: LOGIN_FAILURE })
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className="loginInput"
                    placeholder="Enter your username..." 
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="loginInput"
                    placeholder="Enter your password..." 
                    ref={passwordRef}
                />
                <button 
                    type="submit" 
                    className="loginButton"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
                <button 
                    className="loginRegisterButton"
                >
                    <Link to="/register" className="link">Register</Link>
                </button>
        </div>
    )
}