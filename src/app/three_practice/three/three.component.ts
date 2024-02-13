import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  templateForm: any = {
    firstname: '',
    middlename: '',
    lastname: '',
    dob: '',
    ahge: '',
    licence: '',
    education: '',
    twelthper: '',
    twelthpasssyr: '',
    degree1styrper: '',
    degree2ndyrper: '',
    degree3rdyrper: '',
    degreepassyr: '',
    othereducation: '',
    othereducationper: '',
    othereducationyr: '',
    startdate: '',
    enddate: '',
  }

  fillName: any;
  showLicence:boolean=false;
  createFullName() {
    this.fillName = this.templateForm.firstname + ' ' + this.templateForm.middlename + ' ' + this.templateForm.lastname;
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month: string | number = currentDate.getMonth() + 1;
    let day: string | number = currentDate.getDate();

    // Add leading zero if month or day is a single digit
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

  onDOBChange() {
    const SelectedDate = new Date(this.templateForm.dob);
    const selectedDateyear = SelectedDate.getFullYear();
    const currentYear = new Date().getFullYear();
    console.log(selectedDateyear);
    console.log(currentYear);
    this.templateForm.age = currentYear - selectedDateyear;
    if(this.templateForm.age >=18){
      this.showLicence=true
    }



  }
}
