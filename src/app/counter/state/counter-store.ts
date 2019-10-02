import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Counter } from './counter';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<Counter> {
  constructor() {
    super({
      count: 0
    });
  }
}
