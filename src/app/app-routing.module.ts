import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two_practice/two/two.component';
import { OneComponent } from './one_practice/one/one.component';


const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
    title:'inline editing'
  },
  {
    path: 'two',
    component: TwoComponent,
    title: 'crud with local storage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
