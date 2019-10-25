import React, { Component } from 'react';
import Layout from '../component/Layout/Layout';
import Info from '../component/Info/Info';
import Post from '../component/Post/Post';

class SocialCard extends Component {
 render() {
  return (
   <Layout>
    <div class="social__card">
     <Info />
     <Post />
    </div>
   </Layout>
  )
 }
}

export default SocialCard;