import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoStore = this.props.todoStore;
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>{todoStore.getTodosCount}</h2>
        <TodoList todos={todoStore.getTodos}></TodoList>
        <button onClick={this.buttonClick}>Add Todo</button>
      </div>
    );
  }

  buttonClick = () => {
    this.props.todoStore.addTodo('Sample todo title', 'Sample description');
  }
}

const TodoList = ({todos}) => (
  <div>
  {todos.map(todo => (
    <TodoItem key={todo.id} todo={todo}></TodoItem>
  ))}
  </div>
);

const TodoItem = ({todo}) => (
  <p>{todo.description}, {todo.title}, {todo.timestamp.toString()}</p>
);
