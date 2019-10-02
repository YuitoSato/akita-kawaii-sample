import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoCommand } from './add/todo-add.service';
import { mapTo } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class TodoMockServer {
  todos = [
    {
      todoId: 1,
      text: '歯を磨く',
      detail: '奥歯→前歯→奥歯の順で磨く',
    },
    {
      todoId: 2,
      text: 'スマブラをする',
      detail: 'ネスでオンライン対戦をする',
    },
    {
      todoId: 3,
      text: 'コンタクトを買いに行く',
      detail: 'アイシティ宮益坂店に行く',
    },
  ];

  find(todoId: number): Observable<TodoDetail | undefined> {
    return of(this.todos.find(todo => todo.todoId === todoId));
  }

  list(): Observable<TodoDetail[]> {
    console.log(this.todos);
    return of(this.todos);
  }

  add(todo: TodoCommand): Observable<void> {
    return of(this.todos.push({
      ...todo,
      todoId: Math.ceil( Math.random() * 100)
    })).pipe(
      mapTo(undefined)
    );
  }
}
