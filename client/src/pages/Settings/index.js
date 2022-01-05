import React from 'react'
import axios from 'axios'

import './styles.css'

import { Context } from '../../context/Context'
import { Sidebar } from '../../components/Sidebar'
import { UPDATE_FAILURE, UPDATE_START, UPDATE_SUCCESS } from '../../context/actionsTypes'

export const Settings = () => {
    const { user, dispatch } = React.useContext(Context)

    const PF = 'http://localhost:5000/images/'

    const [file, setFile] = React.useState(null)
    const [username, setUsername] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [success, setSuccess] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        dispatch({type: UPDATE_START})

        const updatedUser = {
          userId: user._id,
          username,
          email,
          password
        }
    
        if (file) {
          const data = new FormData()
          const filename = Date.now() + file.name
          data.append("name", filename)
          data.append("file", file)
          updatedUser.profilePicture = filename

          try {
                await axios.post('/upload', data)
            } catch (err) {}
        } 

        try {
            const res = await axios.put("/users/" + user._id, updatedUser)
            setSuccess(true)
            dispatch({type: UPDATE_SUCCESS, payload: res.data })
        } catch (err) {
            dispatch({type: UPDATE_FAILURE})
        }
    }
      
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Your Account</span>
                </div>
                
                <form 
                    className="settingsForm"
                    onSubmit={handleSubmit}
                >
                    <label>Profile Picture</label>

                    <div className="settingsPP">
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePicture }
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={{display: 'none'}}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                    
                    <label>email</label>
                    <input type="email" placeholder={user.email}  onChange={e => setEmail(e.target.value)}/>
                    
                    <label>Password</label>
                    <input type="paswword" onChange={e => setPassword(e.target.value)}/>  
                    
                    <button 
                        className="settingsSubmitButton"
                        type="submit"
                    >
                        Update
                    </button>

                    {
                        success && <span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>Profile hass been updated...</span>
                    }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}