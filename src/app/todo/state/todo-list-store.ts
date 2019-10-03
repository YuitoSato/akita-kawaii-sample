import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TodoListItem } from './todo-list-item';

export interface TodoListState extends EntityState<TodoListItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo-list', idKey: 'todoId' })
export class TodoListStore extends EntityStore<TodoListState, TodoListItem> {
  constructor() {
    super();
  }
}
