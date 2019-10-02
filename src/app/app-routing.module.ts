import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoContainerComponent } from './todo/todo-container.component';
import { TodoDetailComponent } from './todo/detail/todo-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'todos',
    component: TodoContainerComponent,
    children: [
      {
        path: ':todoId',
        component: TodoDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
