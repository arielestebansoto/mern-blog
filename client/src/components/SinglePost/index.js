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

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [updateMode, setUpdateMode] = React.useState(false)

  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
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
  
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username, title, description 
      })
      // window.location.reload()
      setUpdateMode(false)
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

        {
          updateMode ? 
            <input 
              type="text" 
              value={title} 
              className="singlePostTitleInput" 
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            /> : (
            <h1 className="singlePostTitle">
              {title}
                { 
                  post.username === user?.username && 
                  <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                  </div>
                }
            </h1>
            )
          }

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

        {
          updateMode ? 
            <textarea 
              className="singlePostDescInput" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            /> : (
            <p className="singlePostDesc">
              {description}
          </p>
          )
        }

        {
          updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        }
      </div>
    </div>
  );
}