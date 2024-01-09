import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getAll();
  }
  constructor(private Service: CommonService) { }
  getAll() {
    this.Service.getAllAngularChallanges().subscribe((res) => {
      console.log(res);
    })
  }
}
