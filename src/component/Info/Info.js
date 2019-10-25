import React from 'react';

const Info = (props) => {
 let info = (
  <div class="container info__container">
    <span class="picture text-light"> &nbsp; <strong>@Doe</strong></span>
    <div class="header__title">
     <h5>The Practical Dev</h5>
     <p> Learning React? Start Small</p>
     <span class="small"> author: <code class="text-primary">@dceddia</code></span>
    </div>
  </div>
 );

 return info;
}

export default Info;