import { useNavigate } from 'react-router-dom';
import './ComponentsStyle/PostCard.css';


function PostCardComponent({ post }) {

  const navigate = useNavigate();

  return (
    <div id="post-card" className="post-container card-box" onClick={() => navigate(`/post/${post.id}`)}>
        <div className="post-card-title">
          <i className="bi bi-person-circle"></i>
          <h2  >{post.title}</h2>
        </div>
        
        <p className="post-card-body">{post.body}</p>
    </div>
  );
}
export default PostCardComponent;