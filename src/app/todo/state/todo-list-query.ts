import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoListState, TodoListStore } from './todo-list-store';
import { TodoListItem } from './todo-list-item';

@Injectable({ providedIn: 'root' })
export class TodoListQuery extends QueryEntity<TodoListState, TodoListItem> {
  constructor(protected store: TodoListStore) {
    super(store);
  }
}
