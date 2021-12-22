import './styles.css'

import { Post } from "../Post";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {
        posts.map( (post, index)=> (
          <Post post={post} key={index}/>
        ))
      }
    </div>
  );
}