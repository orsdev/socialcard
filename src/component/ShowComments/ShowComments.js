import React from 'react';

const ShowComments = (props) => {

let show_comments = null;

if(props.comments !== null){
 show_comments = props.comments.map((cmt, index) => {
  return (
   <div key={index}
    className="mx-auto w-75 px-2 mt-3 text-center commentText">
     <p> {cmt} </p>
     <div className="modify">
    <i onClick={() => {props.edit(index)}} className="fa fa-pencil" aria-hidden="true"></i>
    <i onClick={()=>{props.delete(index)}} className="fa fa-trash-o" aria-hidden="true"></i>
    </div>
   </div>
  )
 });
}
 return show_comments;
}

export default ShowComments;