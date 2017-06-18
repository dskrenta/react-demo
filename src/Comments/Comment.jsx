import React from 'react';

import Avatar from 'material-ui/Avatar';

import './index.css';

const Comment = ({ comment }) => (
  <div className="Media">
    <Avatar className="Media-figure" src={comment.image} />
    <p className="Media-body">
      {comment.name} <br />
      {comment.comment} <br />
      Some more text... and some more.
    </p>
    <Avatar className="Media-figure" src={comment.image} />
  </div>
);

export default Comment;
