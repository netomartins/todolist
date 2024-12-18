import Dexie from 'dexie';
import { Todo } from '../types/todo';

class TodoDatabase extends Dexie {
  todos: Dexie.Table<Todo, number>;

  constructor() {
    super('TodoDatabase');
    this.version(1).stores({
      todos: '++id, title, completed',
    });
    this.todos = this.table('todos');
  }
}

export const db = new TodoDatabase();
