import { Component, OnInit } from '@angular/core';
import { CounterService } from './state/counter-service';
import { Observable } from 'rxjs';
import { Counter } from './state/counter';
import { CounterQuery } from './state/counter-query';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<Counter>;

  constructor(
    private counterService: CounterService,
    private counterQuery: CounterQuery
  ) { }

  ngOnInit() {
    this.counter$ = this.counterQuery.select();
  }

  increment(current: number) {
    this.counterService.set(current + 1);
  }
}
