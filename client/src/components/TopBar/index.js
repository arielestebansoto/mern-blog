import { Link } from 'react-router-dom'
import './styles.css'

export const TopBar = () => {
    const user = false
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT ME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        { user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImage" 
                            src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" 
                            alt="profile"
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link">REGISTER</Link>
                            </li>                        
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}