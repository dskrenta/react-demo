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
      </div>
    );
  }
}
