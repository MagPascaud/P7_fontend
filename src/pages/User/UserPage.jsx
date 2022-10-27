import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";



function User() {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/api/users/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(user => {
                setUser(user);
                setPosts(user.posts || []);
            })
            .catch(e => setError(e))

    }, []);
    return (
        token && !error ?
            <>
                <Header></Header>
                <main>
                    <h1>Mon compte</h1>
                    <header className='user'>
                        <img src={`${user.userImageUrl}`} alt="" className="avatar" />
                        <span>{`${user.userName}`}</span>
                    </header>


                    {
                        posts.map(post =>
                            <Link to={post._id}>
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
                            </Link>
                        )
                    }
                </main>
                <Footer></Footer>
            </>
            : <Navigate to={'/login'}></Navigate>
    )
}

export default User