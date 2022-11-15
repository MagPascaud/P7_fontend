import { useCallback, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Post.css';

function Post({ _id, postText, postTitle, likes, user, imageUrl, createdAt, updatedAt }) {
  const token = localStorage.getItem('token');
  const currentUserId = localStorage.getItem('userId');
  const isAdmin = localStorage.getItem('isAdmin');
  const [updatePost, setUpdatePost] = useState(false);
  const [isOwnerOrAdmin] = useState(isAdmin === 'true' || user._id === currentUserId);
  const [deletePost, setSetDeletePost] = useState(false);
  const [resOK, setResOK] = useState(false);



  const onUpdate = () => {
    setUpdatePost(true);
  }
  const onLike = useCallback(() => {
    console.log("like");
    fetch('http://localhost:3000/api/posts/' + _id + '/like', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: currentUserId
      })
    })
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(value => {
        window.location.reload(false)
      })
      .catch(e => {
      })
  }, [])



  return (
    !updatePost && !resOK ?
      <article className='post'>
        <header className='user'>
          <Link className='a' to={'/user/' + user._id}>
            <img src={`${user.userImageUrl}`} alt="" className="avatar" />
            <span className='userName'>{`${user.userName}`} {updatedAt ? 'mis à jour le ' + new Date(updatedAt).toLocaleDateString('fr-FR') : createdAt ? 'créé le ' + new Date(createdAt).toLocaleDateString('fr-FR') : ''}</span>
          </Link>
          {
            isOwnerOrAdmin ?
              <div className='buttons'>
                <button onClick={onUpdate}><span class="material-symbols-outlined" title='Modifier'>
                  drive_file_rename_outline
                </span></button>
                <button onClick><span class="material-symbols-outlined" title='Supprimer'>
                  delete
                </span></button>
              </div> :
              ''
          }

        </header>

        <h3>{postTitle}</h3>
        <img src={`${imageUrl}`} alt={`${imageUrl}`} className="main-content" />
        <p className="desc">{`${postText}`}</p>
        <footer className='reacts'>
          <button onClick={onLike} >
            <span className="likes">{likes} <span class="material-symbols-outlined" title="J'aime">
              favorite
            </span></span>
          </button>
          <div className="comments">
            <span className="nb-comments"></span>
          </div>
        </footer>
      </article>
      :
      updatePost ? <Navigate to={'/form/' + _id} /> :
        '<Navigate to={' / '} /> '
  )
}

export default Post