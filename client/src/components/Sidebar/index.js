import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './styles.css'

export const Sidebar = () => {
    const [ categories, setCategories ] = React.useState([])

    React.useEffect( () => {
        const getCategories = async() => {
            const res = await axios.get('/categories')
            setCategories(res.data)
        }
        getCategories()
    }, [])
    
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs"
                    alt="about me"
                />
                <p>famoso lorem ipsum pero no me funca el automatico asi que escribo asi re villa.</p>
            </div>
            <div className="sidebarItem">
               <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        categories.map( (category, index) =>
                        <Link to={`/?cat=${category.name}`} className="link" key={index}>
                            <li className="sidebarListItem" >{category.name}</li>
                        </Link> 
                        )
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
            </div>
        </div>
    )
}