import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private Http: HttpClient
  ) { }
  ngOnInit() { }

  Loginob: any = {
    "EmailId": '',
    "Password": ''
  }
  onLogin() {
    this.Http.post('https://freeapi.miniprojectideas.com/api/user/login', this.Loginob).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('loginToken', res.data.token)
      }
    })
  }


}
