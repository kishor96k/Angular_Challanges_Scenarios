import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getAllAngularChallanges(){
    return this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages");
  }
}
