import { Injectable } from '@angular/core';
import { TodoDetailStore } from './todo-detail-store';
import { TodoMockServer } from '../../todo-mock-server';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoDetailService {
  constructor(
    private todoDetailStore: TodoDetailStore,
    private todoMockServer: TodoMockServer
  ) {}

  fetch(todoId: number) {
    return this.todoMockServer.find(todoId).pipe(
      tap(response => this.todoDetailStore.update(response)),
    ).toPromise();
  }
}
