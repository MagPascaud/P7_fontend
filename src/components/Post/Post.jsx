import React from 'react';
// import PostStyle from '../../utils/style/PostStyle';



function Post({ _id, postText, postTitle, likes, userLiked, user, imageUrl, createdDate, updatedDate, userImageUrl }) {
  console.log(_id, postText, postTitle, likes, userLiked, user);
  return (
    <div>
      <h3>{`${postTitle}`}</h3>
      <p>{`${_id}`}</p>
      <p>{`${user.userName}`}</p>
      <img src={`${user.userImageUrl}`} alt="" />
      <p>{`${createdDate}`}</p>
      <img src={`${imageUrl}`} alt="" />
      <p>{`${postText}`}</p>
      <p>{`${likes}`}🤍</p>
      <p>{`${userLiked}`}</p>
    </div>
  )
}

export default Post