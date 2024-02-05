import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two_practice/two/two.component';
import { OneComponent } from './one_practice/one/one.component';
import { ThreeComponent } from './three_practice/three/three.component';
import { FourComponent } from './four_practice/four/four.component';
import { FiveComponent } from './five_practice/five/five.component';


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
  },
  {
    path: 'three',
    component: ThreeComponent,
    title: 'crud with local storage'
  },
  {
    path: 'four',
    component: FourComponent,
    title: 'crud with local storage'
  },
  {
    path: 'five',
    component: FiveComponent,
    title: 'crud with local storage'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
