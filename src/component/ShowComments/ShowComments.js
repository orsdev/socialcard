import React from 'react';

const ShowComments = (props) => {

let show_comments = null;

if(props.comments !== null){
 show_comments = props.comments.map((cmt, index) => {
  return (
   <div key={index} 
    className="mx-auto w-75 mt-3 text-center commentText">
     <p> {cmt} </p>
   </div>
  )
 });
}
 return show_comments;
}

export default ShowComments;