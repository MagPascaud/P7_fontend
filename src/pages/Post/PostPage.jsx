import Post from "../../components/Post/Post";
import { useState, useEffect, Navigate } from 'react';
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


function PostPage() {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [post, setPost] = useState({
        user: {}
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/posts/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(post => setPost(post))
            .catch(e => setError(e))

    }, {});
    return (
        token && !error ?
            <>
                <Header></Header>
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
                <Footer></Footer>
            </> : <Navigate to={'/login'}></Navigate>
    )
}

export default PostPage