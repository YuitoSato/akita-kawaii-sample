import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo-detail' })
export class TodoDetailStore extends Store<TodoDetail> {
  constructor() {
    super({
      text: '',
      detail: ''
    });
  }
}
