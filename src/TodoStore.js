import {observable, computed} from 'mobx';
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

  }

  addTodo(title, description) {
    this.todos.push(new TodoModel(title, description));
  }

  @computed get getTodosCount() {
    return this.todos.length;
  }
}
