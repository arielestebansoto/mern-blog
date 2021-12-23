import { Link } from "react-router-dom";
import "./styles.css";

export const Post = ({ post }) => {
  return (
    <div className="post">
      {
        post.photo && (
          <img
            className="postImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        )
      }
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map( (category, index) => {
              <span className="postCat" key={index}>
                { category.name }
              </span>
            })
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