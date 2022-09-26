import { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/', {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjQxNzMwNjMsImV4cCI6MTY2NDI1OTQ2M30.1jRU1zfXCQHKv_6zjvumG0DtLP4Mg7FGe_2gvdXAFlk"
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
            imageUrl={post.imageUrl}
            createdDate={post.createdDate}
          ></Post>
        )
      }
    </main>
  );
}

export default Home;
