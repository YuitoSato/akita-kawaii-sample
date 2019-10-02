import { Injectable } from '@angular/core';
import { TodoMockServer } from '../todo-mock-server';

export interface TodoCommand {
  text: string;
  detail: string;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(
    private todoMockServer: TodoMockServer
  ) {}

  add(todo: TodoCommand) {
    return this.todoMockServer.add(todo).toPromise();
  }
}
