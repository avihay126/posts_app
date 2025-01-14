import {React, useEffect, useState} from 'react';
import {getRequest} from '../Utils/api.js';
import PostCardComponent from '../Components/PostCardComponent.js';
import AddPostForm from '../Components/AddPostForm.js';
import './PagesStyle/PostPage.css';
import Loading from '../Components/Loading.js';
import NotFoundPage from './NotFoundPage.js';


function PostsPage(){
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [search, setSearch] = useState('');


    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const posts = await getRequest('/posts');
                setPosts(posts);
            } catch (error) {
                console.error('Error fetching posts', error);
                setError(error);
            }
            setIsLoading(false);
        }
        fetchPosts();
    },[])

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
        closeForm()
        clearSearch()
    }

    const closeForm = () => {
        setIsFormOpened(false);
    }

    const openForm = () =>{
        setIsFormOpened(true)
    }

    const clearSearch = () =>{
        setSearch('')
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filterPosts = (posts, search) => {
        if (!search) return posts
        return posts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }


    if(isLoading){ return <Loading/>}

    if(error){ return <NotFoundPage/>}


    

    return (
        <div className="posts-page">
            <div className="posts-page-header">
                <h1>Explore Your Feed</h1>
                <div className="search-container">
                    <input id="search-posts"
                           type="text"
                           placeholder="Search posts" 
                           value={search} 
                           onChange={handleSearchChange}/>
                    <span 
                        id="clear-search" 
                        onClick={clearSearch}>
                        Clear
                    </span>
                </div>
                <button id="start-post" onClick={openForm}>Start new post</button>
            </div>
            {
                isFormOpened && 
                <AddPostForm addPost={addPost} closeForm={closeForm} isOpen={isFormOpened}/>
            }
            {
                filterPosts(posts, search)?.length === 0 ?
                    <h1>No posts found</h1> 
                    :
                    filterPosts(posts, search)?.map((post)=>{
                        return(
                                <PostCardComponent  post={post} key={post.title}/>                    )
                    })
            }
        </div>
    )
}

export default PostsPage;