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
  count: 0
 };

 /*
  call immediately after render function
  is called, assign new value from
  local storage to comments state
  */
 componentDidMount() {
  if(this.state.count == 0){

   //call function
   this.initialCount();

   //re-assign new value to comments state
   this.setState({
    comments: this.getFromStorage()
   })

  }
 }

 //function increment count state
 initialCount = () => {
  this.setState(prevState => {
   return { count: prevState.count + 1};
  });
 }

 likeToggle = () => {
  let toggle = !this.state.toggleLike;
  this.setState({
   toggleLike: toggle
  })
 }


 retweetToggle = () => {
  let toggle = !this.state.toggleRetweet;
  this.setState({
   toggleRetweet: toggle
  })
 }

 CommentBox = () => {
  let toggle = !this.state.toggleCommentBox;
  this.setState({
   toggleCommentBox: toggle
  })
 }

//retrieve date from localstorage
 getFromStorage = () => {
  //get data from local storage
  let retrieve = localStorage.getItem('comment');
  //declare variable
  let array;
 
  //if localstorage is empty, run code
  if(!retrieve){
   array = [];
  }else {
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
   localStorage.setItem('comment' , toString);
 
   return retrieve;
 }
 

 saveComment = () => {
  let textarea = document.querySelector('#commentbox');
 
  if(textarea.value){
  
   //save comment to localstorage
  this.saveToStorage(textarea.value);

  let toggle = !this.state.toggleCommentBox;

  //assign comment state an update localstorage data
  this.setState({
   comments: this.getFromStorage(),
   toggleCommentBox: toggle
  });
  }
 
 }
 
 render() {
//declare variables
let like_count;
let retweet_count;

//it true, assign variable a value
if(this.state.toggleLike){
 like_count = 1;
}

//it true, assign variable a value
if(this.state.toggleRetweet){
 retweet_count = 1;
}

  return (
   <Layout>
    <div className="social__card">
     <Info />
     <Post />
     <Engagement
      like={this.state.toggleLike}
      likeCount= {like_count}
      retweetCount= {retweet_count}
      retweet={this.state.toggleRetweet}
      liked={this.likeToggle}
      retweeted={this.retweetToggle} 
      showTextarea={this.CommentBox}/> 
    </div>
    <div className="comment_section mx-auto">
    <Comments
    saveToStorage={this.saveToStorage}
    getFromStorage={this.getFromStorage}
    comments={this.state.comments} 
    saveComment={this.saveComment} 
    toggleCommentBox={this.state.toggleCommentBox}/>
    </div>
   </Layout>
  )
 }
}

export default SocialCard;