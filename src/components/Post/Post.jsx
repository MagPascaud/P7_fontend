import React from 'react';
import './Post.css';
import '../../assets/heartIcon.png'
// import PostStyle from '../../utils/style/PostStyle';



function Post({ _id, postText, postTitle, likes, userLiked, user, imageUrl, createdDate, updatedDate, userImageUrl }) {
  console.log(_id, postText, postTitle, likes, userLiked, user);
  return (
    <article className='post'>
      <header className='user'>
        <img src={`${user.userImageUrl}`} alt="" className="avatar" />
        <span>{`${user.userName}`}</span>
      </header>
      <img src={`${imageUrl}`} alt="" className="main-content" />
      <p className="desc">{`${postText}`}</p>
      <footer>
        <div className="likes">
          <button>

            <i class="fa-solid fa-heart"></i>

          </button>
          <span className="nb-likes">
            {/* {nbLikes} */}
          </span>
        </div>
        <div className="comments">
          {/* <span className="nb-comments">{nbComments} commentaires</span> */}
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