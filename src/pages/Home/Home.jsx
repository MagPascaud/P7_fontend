// import logo from '../../logo.svg';
import { useState, useEffect } from 'react';
import './Home.css';
import Post from '../../components/Post/Post';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/',{
      headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjA4MjEzNzksImV4cCI6MTY2MDkwNzc3OX0.omALfLE8qQuHqMFHIo9WVMtUpMC-hnXcsn9W6T8e-nE"
      }
    })
    .then(res => res.json())
    .then(posts => setPosts(posts))
  });
  return (
    <main>
      {
      posts.map(post =>
        <Post
          postTitle={post.postTitle}
          _id={post._id}
          postText={post.postText}
          user={post.user}
          likes={post.likes}
          userLiked={post.userLiked}
          key={post._id}
          ></Post>
        )
    }
    </main>
  );
}

export default Home;
