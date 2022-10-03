import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/', {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YjUwZjJhNGFiYjlhZDE2ZDQ4MDEiLCJpYXQiOjE2NjQ3ODAxNjcsImV4cCI6MTY2NDg2NjU2N30.xCypdmN9V54c63_LBZL-_VeAHvYZHryQFX7TYE206Iw"
      }
    })
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [posts]);
  return (
    <main>
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
  );
}

export default Home;