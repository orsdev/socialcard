import React from 'react';

const Info = (props) => {
 let info = (
  <div className="container info__container">
    <span className="picture text-light"> &nbsp; <strong>@Sam</strong></span>
    <div className="header__title">
     <h5>The Practical Guide</h5>
     <p> A Programmer's Journey</p>
     <span className="small"> author: <code className="text-primary">Samuel</code></span>
    </div>
  </div>
 );

 return info;
}

export default Info;