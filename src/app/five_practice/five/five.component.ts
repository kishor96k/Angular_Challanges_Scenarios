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
  userurl: any = 'http://localhost:3000/users';

  ngOnInit(): void {
    this.loadDepartmentData();
    this.loadusersList();
  }

  departmantList: any;
  usersList: any;
  isView: boolean = true;
  usersObj: any = {
    "id": 0,
    "deptId": '',
    "firstname": "",
    "lastname": "",
    "email": "",
    "contact": 0
  }

  loadDepartmentData() {
    this.http.get(this.depturl).subscribe((res: any) => {
      this.departmantList = res;
    });
  }

  loadusersList() {
    this.http.get(this.userurl).subscribe((res: any) => {
      this.usersList = res;
    })
  }

  postUsersList() {
    this.http.post(this.userurl, this.usersObj).subscribe((res: any) => {
      this.loadusersList(); // 
      alert('data added');
      this.isView = false;
      console.log(res);
    });
  }
}
