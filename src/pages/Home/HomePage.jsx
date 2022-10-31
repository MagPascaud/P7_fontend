import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';

function Home() {
  const token = localStorage.getItem('token');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(posts => setPosts(posts))
      .catch(e => setError(e))
  }, []);

  return (
    token && !error ?
      <>
        <Header />
        <main>
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
                createdDate={post.createDate}
                updatedDate={post.updateDate}
              ></Post>
            )
          }
        </main>
        <Footer />
      </>
      : <Navigate to={'/login'}></Navigate>
  );
}

export default Home;
