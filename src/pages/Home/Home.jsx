import { useState, useEffect } from 'react';
import './Home.css';
import Post from '../../components/Post/Post';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/', {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjM1Njk0MjUsImV4cCI6MTY2MzY1NTgyNX0.rlwlRNGfdzuT3DzQsyX4RVf5dNjV6X0K5LDdkLEsASc"
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
