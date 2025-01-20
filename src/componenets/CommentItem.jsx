import React from 'react';

const CommentItem = () => {
  return (
    <div className="itemList" key={comment.id}>
      <p>{comment.content}</p>
      <p>{comment.createdAt}</p>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default CommentItem;