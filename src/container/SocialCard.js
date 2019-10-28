import React, { Component } from 'react';
import Layout from '../component/Layout/Layout';
import Info from '../component/Info/Info';
import Post from '../component/Post/Post';
import Engagement from '../component/Engagement/Engagement';

class SocialCard extends Component {

 state = {
  toggleLike: false,
  toggleRetweet: false,
 };

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
      retweeted={this.retweetToggle} />
    </div>
   </Layout>
  )
 }
}

export default SocialCard;