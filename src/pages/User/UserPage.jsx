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
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
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
                    <header className='user'>
                        <img src={`${user.userImageUrl}`} alt="" className="avatar" />
                        <span>{`${user.userName}`}</span>
                    </header>

                    <h1>Mon compte</h1>
                    {
                        posts.map(post =>
                            <Post
                                postTitle={post.postTitle}
                                key={post._id}
                                _id={post._id}
                                postText={post.postText}
                                user={post.user}
                                likes={post.likes}
                                imageUrl={post.imageUrl}
                                createdAt={post.createdAt}
                                updatedAt={post.updatedAt}
                            ></Post>
                        )
                    }
                </main>
                <Footer></Footer>
            </>
            : <Navigate to={'/login'}></Navigate>
    )
}

export default User