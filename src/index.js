import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';
import TodoStore from './TodoStore';
import './index.css';

const todoStore = new TodoStore();

ReactDOM.render(
  <TodoApp todoStore={todoStore} />,
  document.getElementById('root')
);
