import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const localData = localStorage.getItem('ComplaintAppData');
    if (localData != null) {
      this.complaintArray = JSON.parse(localData);
      console.log(this.complaintArray);      
    }
  }

  complaintObj: any = {
    id: 0,
    complaintAgainst: '',
    firstname: '',
    lastname: '',
    addressone: '',
    city: '',
    region: '',
    pincode: 0,
    phone: 0,
    email: '',
    complaint: '',
  }

  complaintArray: any[] = [];



  onRegister() {
    const localData = localStorage.getItem('ComplaintAppData');
    if (localData == null) {
      this.complaintObj.id = 1;
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem('ComplaintAppData', JSON.stringify(this.complaintArray));
    } else {
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1;
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem('ComplaintAppData', JSON.stringify(this.complaintArray));
    }
  }
}
