import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'

import "./styles.css";

import { Context } from '../../context/Context'

export const SinglePost = () => {
  const PF = 'http://localhost:5000/images/'

  const { user } = React.useContext(Context)

  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [ post, setPost ] = React.useState({})

  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      console.log(res)
      setPost(res.data)
    }
    getPost()
  }, [path])

  const handleDelete = async() => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username }
      })
      window.location.replace('/')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo &&
            <img
              className="singlePostImg"
              src={PF + post.photo}
              alt=""
            />
        }
        <h1 className="singlePostTitle">
          {post.title}
          { 
          post.username === user?.username && 
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          }
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
       </p>
      </div>
    </div>
  );
}