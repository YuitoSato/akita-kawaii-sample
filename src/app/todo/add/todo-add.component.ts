import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from './todo-add.service';
import { TodoListService } from '../state/todo-list-service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TodoService,
    private listService: TodoListService
  ) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        text: '',
        detail: ''
      }
    );
  }

  async submit() {
    console.log(12312)
    await this.service.add({
      text: this.form.controls.text.value,
      detail: this.form.controls.detail.value
    });
    await this.listService.fetch();
  }
}
