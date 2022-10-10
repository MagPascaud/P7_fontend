import Post from "../../components/Post/Post";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({
        user: {}
    });
    useEffect(() => {
        fetch('http://localhost:3000/api/posts/' + id, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjUzOTE0NDUsImV4cCI6MTY2NTQ3Nzg0NX0.GuupShgkmqbo-XNN2eL3J_mnLMpSjrPsaxvfgez_KS0"
            }
        })
            .then(res => res.json())
            .then(post => setPost(post))
    });
    return (
        <main>
            <Post
                postTitle={post.postTitle}
                _id={post._id}
                postText={post.postText}
                user={post.user}
                likes={post.likes}
                userLiked={post.userLiked}
                key={post._id}
                imageUrl={post.imageUrl}
                createdDate={post.createdDate}
            ></Post>
        </main>
    )
}

export default PostPage