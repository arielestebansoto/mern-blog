import { Sidebar } from '../../components/Sidebar'
import './styles.css'

export const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Name" />
                    <label>email</label>
                    <input type="email" placeholder="email@example.com" />
                    <label>Password</label>
                    <input type="paswword"/>  
                    <button 
                        className="settingsSubmitButton"
                        type="submit"
                    >
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}