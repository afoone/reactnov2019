import React from 'react';

const Comment = (props) => {

    const comment = props.comment;

    return (
        <div className="comment">
        <a className="avatar">
          <img src={comment.img}></img>
        </a>
        <div className="content">
        <a className="author"> {comment.name} </a>
          <div className="metadata">
            <span className="date">{comment.time}</span>
          </div>
          <div className="text">
            {comment.comment}
    
              </div>
         
        </div>
      </div>
    )
}

export default Comment;