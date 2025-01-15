import React, { useState,useEffect } from "react";
import { postRequest } from "../Utils/api";
import './ComponentsStyle/AddPostForm.css';

function AddPostForm({ addPost, closeForm, isOpen }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [animationState, setAnimationState] = useState("");


  useEffect(() => {
    if (isOpen) {
      setAnimationState("fade-in");
    } else if (!isOpen) {
      setAnimationState("fade-out");
    }
  }, [isOpen]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setBody(e.target.value);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await postRequest("/posts", { title, body });
      addPost(newPost);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error adding post", error);
    }
  }

  const handleDisablingButton = () => {
    if(title.length>0 && body.length>0){
      return false;
    }
    return true;
  }

  return (
    <div>
      <div className={`overlay ${animationState}`} onClick={(closeForm)}></div>
      <div className={`add-post-form ${animationState} card-box`}>
          <div className="close-button" onClick={closeForm}>X</div>
          <form onSubmit={handleSubmit}>
            <input
              id="form-input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              id="form-textarea"
              placeholder="Content"
              value={body}
              onChange={handleContentChange}
            />
            <button disabled={handleDisablingButton()} type="submit">Add Post</button>
          </form>
      </div>
    </div>
    
    
  );
}

export default AddPostForm;