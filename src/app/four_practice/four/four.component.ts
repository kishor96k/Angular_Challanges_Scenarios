import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {
  }
  onFileUpload(event: any) {
    const file = event.currentTarget.files[0]
    // console.log(file);
    const formObj = new FormData();
    formObj.append('file', file);

    this.http.post('https://storeapi.gerasim.in/api/Customer/Upload', formObj).subscribe((res: any) => {
      console.log(res);
      
    })


  }


}
