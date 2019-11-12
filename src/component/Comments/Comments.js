import React, { Fragment } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import ShowComments from '../ShowComments/ShowComments';

const storeComment = (props) => {

 let commentbox = null;
//show commentbox if true
 if (props.toggleCommentBox) {
  commentbox = <CommentBox
   saveComment={props.saveComment}
   update={props.update}
   updateComment={props.updateComment} />
 }

 return (
  <Fragment>
   {commentbox}
   <ShowComments
   edit={props.edit}
   delete={props.delete}
   comments={props.comments} />
  </Fragment>
 )
};

export default storeComment;