import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TodoDetailStore } from './todo-detail-store';

@Injectable({ providedIn: 'root' })
export class TodoDetailQuery extends Query<TodoDetail> {
  constructor(protected store: TodoDetailStore) {
    super(store);
  }
}
