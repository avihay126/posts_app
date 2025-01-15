import {React,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../Utils/api";
import './PagesStyle/PostDetailsPage.css';
import Loading from "../Components/Loading";
import NotFoundPage from "./NotFoundPage";

function PostDetailsPage() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        
        const fetchPostDetails = async () => {
            try {
                const post = await getRequest(`/posts/${postId}`);
                const comments = await getRequest(`/comments?postId=${postId}`);
                setComments(comments);
                setPost(post);
            } catch (error) {
                console.error('Error fetching post', error);
                setError(error);
            }
            setIsLoading(false);
        }
        fetchPostDetails();
    },[postId])

    if(isLoading){ return <Loading/>}

    if(error){ return <NotFoundPage/>}
  

  return (
    <div>
        <div className="post-container card-box">
            <h2 id="post-title" className="post-card-title">{post.title}</h2>
            <p id="post-body" className="post-card-body">{post.body}</p>
            <div className="comments-container">
                <h3 id="comments-title">Comments</h3>
                {
                    comments?.length === 0 ? 
                    <h3>No comments yet</h3>
                    :
                    <div className="comments-list">
                        {comments?.map(comment => (
                            <div className="comment card-box" key={comment.id}>
                                <h4>
                                    <i className="bi bi-chat-right"></i> {comment.name}
                                </h4>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                }
            
            </div>
        </div>
        
      
    </div>
  );
}

export default PostDetailsPage;