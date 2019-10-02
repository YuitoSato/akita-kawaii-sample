import { Injectable } from '@angular/core';
import { TodoListStore } from './todo-list-store';
import { TodoMockServer } from '../../todo-mock-server';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoListService {
  constructor(
    private todoListStore: TodoListStore,
    private todoMockServer: TodoMockServer
  ) {}

  fetch() {
    return this.todoMockServer.list().pipe(
      tap(response => this.todoListStore.set(response))
    ).toPromise();
  }
}
