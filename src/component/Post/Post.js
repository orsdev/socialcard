import React from 'react';
import User from '../../img/user.jpg';

const Posts = (props) => {
 return (
  <div class="container posts p-0">
   <div class="posts__bg">
   <span class="posts__picture"> &nbsp; <strong>@Doe</strong></span>
    <h2 class="posts__heading text-light text-center"> Learning React? Start Small.</h2>
    <div class="user">
     <span class="user__name">John Doe</span>
     <span class="user__pic">
      <img src={User} alt="john doe"/>
     </span>
    </div>
   </div>
   <div class="posts__preview p-2">
    <h4 class="posts__title">Learning React? Start Small.</h4>
    <p>Can't pry yourself away from the tutorials> The cure is to make tiny little experiment apps.</p>
    <p class="link">dev.to</p>
   </div>
  </div>

 )
}

export default Posts;