import {observable, computed, action} from 'mobx';
import crypto from 'crypto';

class TodoModel {
  static generateTimestamp() {
    return new Date();
  }

  static generateID() {
    return crypto.randomBytes(10).toString('hex');
  }

  constructor(title, description) {
    this.id = TodoModel.generateID();
    this.timestamp = TodoModel.generateTimestamp();
    this.title = title;
    this.description = description;
  }
}

export default class TodoStore {
  @observable todos = [];

  constructor() {
    this.addTodo('first item', 'take out the trash');
  }

  @action addTodo(title, description) {
    this.todos.push(new TodoModel(title, description));
  }

  @computed get getTodos() {
    return this.todos;
  }

  @computed get getTodosCount() {
    return this.todos.length;
  }
}
