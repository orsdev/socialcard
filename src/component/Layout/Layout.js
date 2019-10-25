import React from 'react';

const Layout = (props) => {
 return (
  <div className='container-layout'>
   {props.children}
  </div>
 )
}

export default Layout;