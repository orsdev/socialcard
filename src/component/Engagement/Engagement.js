import React from 'react';

const Engagement = (props) => {

 let classNameLike;
 let classNameRetweet;

 if(props.like) {
  classNameLike = "fa fa-heart text-danger";
 }else {
  classNameLike = "fa fa-heart-o";
 }

 if(props.retweet) {
  classNameRetweet = "fa fa-retweet text-success";
 }else {
  classNameRetweet = "fa fa-retweet";
 }

 let engage = (
  <div className="engage container p-3">
   <span className="comment">
    <i className="fa fa-comment" aria-hidden="true" onClick={props.showTextarea}></i>
    <small className="count">{props.commentCount}</small>
   </span>
   <span className="like">
    <i className= {classNameLike} onClick={props.liked} aria-hidden="true"></i>
    <small className="count">{props.likeCount}</small>
   </span>
   <span className="retweet">
    <i className={classNameRetweet} onClick={props.retweeted} aria-hidden="true"></i>
    <small className="count">{props.retweetCount}</small>
   </span>
  </div>
 );

 return engage;
};

export default Engagement;