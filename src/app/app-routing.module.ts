import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one_practice/one/one.component';
import { TwoComponent } from './two_practice/two/two.component';

const routes: Routes = [
  {
    path: '',
    component: TwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
