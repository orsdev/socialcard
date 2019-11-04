import React from 'react';

const CommentBox = (props) => {
 return (
  <div className='comment_box'>
   <textarea
    name="commentbox"
    id="commentbox"
    className="w-100 commentbox"
    rows="5"></textarea>
   <button
    className="btn btn-danger d-block mx-auto mt-3"
    onClick={props.saveComment}>
    Comment
    </button>
  </div>
 );
};

export default CommentBox;