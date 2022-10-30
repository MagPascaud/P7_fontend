import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Post.css';

//composant Post
function Post({ _id, postText, postTitle, likes, user, imageUrl, createdDate, updatedDate }) {
  const token = localStorage.getItem('token');
  const [updatePost, setUpdatePost] = useState(false);
  const [deletePost, setSetDeletePost] = useState(false);
  const [resOK, setResOK] = useState(false);

  const onDeletePost = () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer la publication ?");
    if (confirmDelete) {
      setSetDeletePost(true);
    }
  }
  const onUpdate = () => {
    setUpdatePost(true);
  }


  useEffect(() => {
    if (!deletePost) return

    fetch('http://localhost:3000/api/posts/' + _id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(value => {
        setResOK(true)
      })
      .catch(e => {
        setSetDeletePost(false)
      })
  })

  return (
    !updatePost && !resOK ?
      <article className='post'>
        <header className='user'>
          <Link className='a' to={'/user/' + user._id}>
            <img src={`${user.userImageUrl}`} alt="" className="avatar" />
            <span>{`${user.userName}`}, {updatedDate ? 'mis à jour le ' + updatedDate : 'créé le ' + createdDate}</span>
          </Link>
          <div className='buttons'>
            <button onClick={onUpdate}>Editer</button>
            <button onClick={onDeletePost}>Supprimer</button>
          </div>
        </header>

        <Link className='a' to={'/post/' + _id}>
          <h3>{postTitle}</h3>
          <img src={`${imageUrl}`} alt={`${imageUrl}`} className="main-content" />
          <p className="desc">{`${postText}`}</p>
          <footer className='reacts'>
            <button className="likes">
              <span>{likes} 🤍</span>
            </button>
            <div className="comments">
              <span className="nb-comments"> commentaires</span>
            </div>
          </footer>
        </Link>
      </article>
      :
      updatePost ? <Navigate to={'/form/' + _id} /> :
        '<Navigate to={' / '} /> '
  )
}

export default Post