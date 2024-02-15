import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  depturl: any = 'http://localhost:3000/departments';

  ngOnInit(): void {
    this.loadDepartmentData();
  }
  departmantList: any;
  loadDepartmentData() {
    this.http.get(this.depturl).subscribe((res: any) => {
      this.departmantList = res;
    });
  }
}
