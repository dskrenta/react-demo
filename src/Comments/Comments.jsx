import React from 'react';

import List from 'material-ui/List/List';

import Comment from './Comment';

const Comments = ({ comments }) => (
  <div>
    {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
  </div>
);

export default Comments;
