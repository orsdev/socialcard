import React, { Component, Fragment } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import ShowComments from '../ShowComments/ShowComments';

const storeComment = (props) => {

 let commentbox = null;
//show commentbox if true
 if (props.toggleCommentBox) {
  commentbox = <CommentBox
   saveComment={props.saveComment} />
 }

 return (
  <Fragment>
   {commentbox}
   <ShowComments
    comments={props.comments} />
  </Fragment>
 )
};

export default storeComment;