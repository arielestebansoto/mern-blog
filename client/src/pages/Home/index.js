import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'

import './styles.css'

import { Header } from "../../components/Header"
import { Posts } from "../../components/Posts"
import { Sidebar } from "../../components/Sidebar"

export const Home = () => {
    const [ posts, setPosts ] = React.useState([])
    const { search } = useLocation()

    React.useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${search}`)
            setPosts(res.data)
        }
        fetchPost()
    }, [search])

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