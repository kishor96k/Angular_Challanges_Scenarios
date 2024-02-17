import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

  @Input() tableData: any;
  @Input() coloumnKeys: any;
  @Input() showActionButton:boolean=false;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() {

  }
  ngOnInit() { }
  onEditUser(item: any) {
    this.onEdit.emit(item);
  }
  onDeleteUser(item: any) {
    this.onDelete.emit(item);
  }

}
