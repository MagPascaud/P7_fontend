import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";



function User(user) {
    console.log(user);

    const { id } = useParams();
    const [posts, setPosts] = useState({
        user: {}
    });
    useEffect(() => {
        fetch('http://localhost:3000/api/users/' + id, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjU5ODcyNTIsImV4cCI6MTY2NjA3MzY1Mn0.PiWMp0MtD_EU06_CfRiCnBvCLZ6S4pkMwJu5sl6M4YE"
            }
        })
            .then(res => res.json())
            .then(post => setPosts(post))
    });
    return (

        <main>
            <header className='user'>
                <img src={`${user.userImageUrl}`} alt="" className="avatar" />
                <span>{`${user.userName}`}</span>
            </header>

            <h1>Mes publications</h1>
            <>
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
            </>
        </main>

    )
}

export default User