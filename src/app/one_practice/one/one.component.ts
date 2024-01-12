import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  allUsers: any;
  oldUserObj: any;

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      console.log(response);
      this.allUsers = response;
    })
  }

  onEdit(itemObj: any) {
    this.oldUserObj = JSON.stringify(itemObj);
    this.allUsers.forEach((element: any) => {
      element.isEdit = false;
    });
    itemObj.isEdit = true;
  }

  on() {
    alert("akbdsj")
  }
  onAdd() {
    const addObj =
    {
      "id": 1,
      "name": "",
      "username": "",
      "email": '',
      "phone": "",
      "isEdit": true
    }
    this.allUsers.unshift(addObj);
  }

  onUpdate(itemObj: any) {
    this.http.put('https://jsonplaceholder.typicode.com/users' , itemObj).subscribe((res:any)=>{
      console.log(res);
    })

  }
  onCancel(itemObj: any) {
    const oldObj = JSON.parse(this.oldUserObj);
    itemObj.name = oldObj.name;
    itemObj.username = oldObj.username;
    itemObj.email = oldObj.email;
    itemObj.phone = oldObj.phone;
    itemObj.isEdit = false;

  }

}
