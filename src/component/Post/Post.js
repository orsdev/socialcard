import React from 'react';
import User from '../../img/ogundare.jpg';

const Posts = (props) => {
 return (
  <div className="container posts p-0">
   <div className="posts__bg">
   <span className="posts__picture"> &nbsp; <strong>@Sam</strong></span>
    <h2 className="posts__heading text-light text-center"> Learning React? Start Small.</h2>
    <div className="user">
     <span className="user__name">Samuel</span>
     <span className="user__pic">
      <img src={User} alt="john doe"/>
     </span>
    </div>
   </div>
   <div className="posts__preview p-2">
    <h4 className="posts__title">Learning React? Start Small.</h4>
    <p>Can't pry yourself away from the tutorials. The cure is to make tiny little experiment apps.</p>
    <p className="link">
     <code class="badge badge-danger p-1">
      <a class="text-light" target="_blank" href="https://github.com/orsdev">github</a>
      </code>
      </p>
   </div>
  </div>
 )
}

export default Posts;