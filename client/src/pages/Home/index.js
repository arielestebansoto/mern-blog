import React from 'react'
import axios from 'axios'

import './styles.css'

import { Header } from "../../components/Header"
import { Posts } from "../../components/Posts"
import { Sidebar } from "../../components/Sidebar"

export const Home = () => {
    const [ posts, setPosts ] = React.useState([])

    React.useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/posts')
            setPosts(res.data)
        }
        fetchPost()
    }, [])

    return(
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}