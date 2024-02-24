import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two_practice/two/two.component';
import { OneComponent } from './one_practice/one/one.component';
import { ThreeComponent } from './three_practice/three/three.component';
import { FourComponent } from './four_practice/four/four.component';
import { FiveComponent } from './five_practice/five/five.component';
import { SixComponent } from './six_practice/six/six.component';
import { SevenComponent } from './seven_practice/seven/seven.component';


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
    title: 'template driven form'
  },
  {
    path: 'four',
    component: FourComponent,
    title: 'file upload with validation'
  },
  {
    path: 'five',
    component: FiveComponent,
    title: 'crud with Json File'
  },
  {
    path:'six',
    component:SixComponent,
    title:'input or reusbale component'
  },
  {
    path:'seven',
    component:SevenComponent,
    title:'login app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
