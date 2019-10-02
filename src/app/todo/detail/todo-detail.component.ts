import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDetailService } from './state/todo-detail-service';
import { Observable } from 'rxjs';
import { TodoDetailQuery } from './state/todo-detail-query';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<TodoDetail>;

  constructor(
    private route: ActivatedRoute,
    private service: TodoDetailService,
    private query: TodoDetailQuery
  ) {}

  ngOnInit(
  ) {
    this.route.paramMap.subscribe(param => {
      const todoId = param.get('todoId');
      if (!todoId) { return; }
      this.service.fetch(parseInt(todoId, undefined));
      this.todo$ = this.query.select();
    });
  }

}
