import React from 'react';
import './Post.css';
// import heart from '../../assets/heart-solid.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// import PostStyle from '../../utils/style/PostStyle';



function Post({ _id, postText, postTitle, likes, userLiked, user, imageUrl, createdDate, updatedDate, userImageUrl }) {
  console.log(_id, postText, postTitle, likes, userLiked, user);
  return (
    <article className='post'>
      <header className='user'>
        <img src={`${user.userImageUrl}`} alt="" className="avatar" />
        <span>{`${user.userName}`}</span>
      </header>
      <img src={`${imageUrl}`} alt={`${imageUrl}`} className="main-content" />
      <p className="desc">{`${postText}`}</p>
      <footer className='reacts'>
        <div className="likes">
          <button>🤍
            {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
          </button>
          <span className="nb-likes">
            {/* {nbLikes} */}
          </span>
        </div>
        <div className="comments">
          <span className="nb-comments"> 5 commentaires</span>
        </div>
      </footer>


      {/* <h3>{`${postTitle}`}</h3>
        <p>{`${_id}`}</p>
        <p>{`${user.userName}`}</p>
        <img src={`${user.userImageUrl}`} alt="" />
        <p>{`${createdDate}`}</p>
        <img src={`${imageUrl}`} alt="" />
        <p>{`${postText}`}</p>
        <p>{`${likes}`}🤍</p>
        <p>{`${userLiked}`}</p> */}
    </article>
  )
}

export default Post