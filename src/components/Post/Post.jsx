import React from 'react';


function Post({ _id, postText, postTitle, likes, userLiked, user }) {
  console.log(_id, postText, postTitle, likes, userLiked, user);
  return (
    <div>
      {/* <p>{`${posts._id}`}</p> */}
      <h3>{`${postTitle}`}</h3>
      <p>{`${postText}`}</p>
      <p>{`${likes}`}🤍</p>
      <p>{`${userLiked}`}</p>
      <p>{`${user.userName}`}</p>
      <div>--------------------------</div>
    </div>
  )
}

export default Post