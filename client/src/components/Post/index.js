import { Link } from "react-router-dom";
import "./styles.css";

export const Post = ({ post }) => {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className="post">
      {
        post.photo && (
          <img
            className="postImg"
            src={PF + post.photo}
            alt=""
          />
        )
      }
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map( (category, index) => (
              <span className="postCat" key={index}>
                { category.name }
              </span>
            ))
          }  
            {/* <Link className="link" to="/posts?cat=Music"> */}
              Music
            {/* </Link> */}

        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
          { post.title }
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        { post.description}
      </p>
    </div>
  );
}