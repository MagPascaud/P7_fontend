import React from 'react';
// import PostStyle from '../../utils/style/PostStyle';



function PostComment({ _id, user, userId, postId, comment, createdDate, updatedDate }) {
    console.log(_id, userId, postId, comment, createdDate, updatedDate);
    return (
        <div>
            {/* <p>{`${_id}`}</p>
            <p>{`${user.userId}`}</p>
            <p>{`${postId}`}</p> */}
            <h3>{`${comment}`}</h3>
            {/* <p>{`${createdDate}`}</p> */}
        </div>
    )
}

export default PostComment