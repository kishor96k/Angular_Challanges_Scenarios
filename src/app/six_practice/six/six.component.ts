import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  usersList: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.usersList = res;
    })
  }
  editUser(ev: any) {
    this.getUsers();
    alert("edited");
   }
  deleteUser(ev: any) {
    this.getUsers();
    alert("deleted");
   }


}
