import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../state/todo-list-service';
import { TodoListQuery } from '../state/todo-list-query';
import { TodoListItem } from '../state/todo-list-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<TodoListItem[]>;

  constructor(
    private service: TodoListService,
    private query: TodoListQuery
  ) { }

  ngOnInit() {
    this.todoList$ = this.query.selectAll();
    this.service.fetch();
  }
}
