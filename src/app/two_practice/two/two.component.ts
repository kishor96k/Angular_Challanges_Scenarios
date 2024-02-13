import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

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
  };

  complaintArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadLocalData();
  }

  private loadLocalData(): void {
    const localData = localStorage.getItem('ComplaintAppData');
    if (localData) {
      this.complaintArray = JSON.parse(localData);
      console.log(this.complaintArray);
    }
  }

  onRegister(): void {
    const localData = localStorage.getItem('ComplaintAppData');
    const newData = localData ? JSON.parse(localData) : [];

    this.complaintObj.id = newData.length + 1;
    newData.push({ ...this.complaintObj });

    localStorage.setItem('ComplaintAppData', JSON.stringify(newData));
    this.loadLocalData(); // Refresh the data after adding a new complaint
  }

  onEdit(index: number): void {
    this.complaintObj = { ...this.complaintArray[index] };
    $('#editModal').modal('show');
  }

  onUpdate(): void {
    const index = this.complaintArray.findIndex(item => item.id === this.complaintObj.id);
    if (index !== -1) {
      this.complaintArray[index] = { ...this.complaintObj };
      localStorage.setItem('ComplaintAppData', JSON.stringify(this.complaintArray));
      $('#editModal').modal('hide');
    }
  }
}
