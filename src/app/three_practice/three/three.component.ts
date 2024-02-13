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
  createFullName() {
    this.fillName = this.templateForm.firstname + ' ' + this.templateForm.middlename + ' ' + this.templateForm.lastname;
  }
}
