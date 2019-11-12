import React, { Component } from 'react';
import Layout from '../component/Layout/Layout';
import Info from '../component/Info/Info';
import Post from '../component/Post/Post';
import Engagement from '../component/Engagement/Engagement';
import Comments from '../component/Comments/Comments';

class SocialCard extends Component {
 //state
 state = {
  toggleLike: false,
  toggleRetweet: false,
  toggleCommentBox: false,
  comments: null,
  commentCount: null,
  update: false,
  commentIndex: null
 };

 /*
  call once immediately after render function
  is called, assign new value from
  local storage to states
  */
 componentDidMount() {

  this.setState({
   comments: this.getFromStorage(),
   commentCount: this.getFromStorage().length
  })

 }

 //like and unlike post
 likeToggle = () => {
  let toggle = !this.state.toggleLike;
  this.setState({
   toggleLike: toggle
  })
 }

 //retweet and retweet post
 retweetToggle = () => {
  let toggle = !this.state.toggleRetweet;
  this.setState({
   toggleRetweet: toggle
  })
 }

 //show and hide comment field
 CommentBox = () => {
  let toggle = !this.state.toggleCommentBox;
  this.setState({
   toggleCommentBox: toggle,
   update: false
  })
 }

 //retrieve date from localstorage
 getFromStorage = () => {
  //get data from local storage
  let retrieve = localStorage.getItem('comment');
  //declare variable
  let array;

  //if localstorage is empty, run code
  if (!retrieve) {
   array = [];
  } else {
   //convert array to object
   array = JSON.parse(retrieve);
  }
  return array;
 }

 //function for saving to localstorage
 saveToStorage = (val) => {
  let retrieve = this.getFromStorage();

  retrieve.push(val);
  //convert to string
  let toString = JSON.stringify(retrieve);
  //save to localStorage
  localStorage.setItem('comment', toString);

  return retrieve;
 }


 saveComment = () => {
  let textarea = document.querySelector('#commentbox');

  if (textarea.value) {

   //save comment to localstorage
   this.saveToStorage(textarea.value);

   let toggle = !this.state.toggleCommentBox;

   //assign comment state an update localstorage data
   this.setState({
    comments: this.getFromStorage(),
    commentCount: this.getFromStorage().length,
    toggleCommentBox: toggle
   });
  }

 }

 //delete comments from localStorage
 delete = (index) => {
  //get data from local storage
  let retrieve = localStorage.getItem('comment');
  //convert to array object
  retrieve = JSON.parse(retrieve);
  //remove element from array
  retrieve.splice(index, 1);

  /* 
   convert to strings and save to localStorage
   */
  localStorage.setItem('comment', JSON.stringify(retrieve));
  //set states
  this.setState({
   comments: this.getFromStorage(),
   commentCount: this.getFromStorage().length
  })

 }

 //edit comment
 edit = (index) => {

  //set state
  this.setState({
   toggleCommentBox: true,
   update: true,
   commentIndex: index
  });

  /*
   getting textarea from dom, returns null
   since it has not yet been rendered to the dom.
   setTimeout was used here to wait toggleCommentBox
   state to update before executing this code
   */
  setTimeout(() => {
   //get element from dom
   const textarea = document.querySelector('#commentbox');
   //copy state
   const comments = { ...this.state.comments };
   //assign value to textarea
   textarea.value = comments[index];
   textarea.focus();

  }, 10);

 }

 //update comment and save to localStorage
 updateComment = () => {
  //get element from dom
  const textarea = document.querySelector('#commentbox');
  //copy state
  const copyState = { ...this.state };
  //copy comments
  const comment = [...this.state.comments];
  //replace comment with new comment
  comment[this.state.commentIndex] = textarea.value;
  //save to localStorage
  localStorage.setItem('comment', JSON.stringify(comment));

  //set state
  this.setState({
   comments: this.getFromStorage(),
   toggleCommentBox: false
  });

 }

 render() {
  //declare variables
  let like_count;
  let retweet_count;

  //it true, assign variable a value
  if (this.state.toggleLike) {
   like_count = 1;
  }

  //it true, assign variable a value
  if (this.state.toggleRetweet) {
   retweet_count = 1;
  }

  return (
   <Layout>
    <div className="social__card">
     <Info />
     <Post />
     <Engagement
      like={this.state.toggleLike}
      likeCount={like_count}
      retweetCount={retweet_count}
      commentCount={this.state.commentCount}
      retweet={this.state.toggleRetweet}
      liked={this.likeToggle}
      retweeted={this.retweetToggle}
      showTextarea={this.CommentBox} />
    </div>
    <div className="comment_section mx-auto">
     <Comments
      edit={this.edit}
      delete={this.delete}
      saveToStorage={this.saveToStorage}
      getFromStorage={this.getFromStorage}
      comments={this.state.comments}
      update={this.state.update}
      saveComment={this.saveComment}
      updateComment={this.updateComment}
      toggleCommentBox={this.state.toggleCommentBox} />
    </div>
   </Layout>
  )
 }
}

export default SocialCard;  