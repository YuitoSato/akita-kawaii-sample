import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoContainerComponent } from './todo/todo-container.component';
import { TodoDetailComponent } from './todo/detail/todo-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
