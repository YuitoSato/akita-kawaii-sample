import { Injectable } from '@angular/core';
import { Counter } from './counter';
import { Query } from '@datorama/akita';
import { CounterStore } from './counter-store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<Counter> {
  constructor(protected store: CounterStore) {
    super(store);
  }
}
