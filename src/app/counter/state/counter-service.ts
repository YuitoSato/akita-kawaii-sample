import { Injectable } from '@angular/core';
import { CounterStore } from './counter-store';

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(
    private counterStore: CounterStore
  ) {}

  set(countValue: number) {
    return this.counterStore.update({ count: countValue });
  }
}
