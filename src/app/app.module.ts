import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { OneComponent } from './one_practice/one/one.component';
import { TwoComponent } from './two_practice/two/two.component';
import { ThreeComponent } from './three_practice/three/three.component';
import { FourComponent } from './four_practice/four/four.component';
import { FiveComponent } from './five_practice/five/five.component';
import { SixComponent } from './six_practice/six/six.component';
import { ReusableComponent } from './six_practice/reusable/reusable.component';
import { SevenComponent } from './seven_practice/seven/seven.component';
import { EightPracticeComponent } from './eight-practice/eight-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    ReusableComponent,
    SevenComponent,
    EightPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
