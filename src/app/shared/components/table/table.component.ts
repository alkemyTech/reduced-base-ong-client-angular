import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alk-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {
  @Input() items: any[] = [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() editEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem(id: number) {
    this.deleteEvent.emit(id);
  }

  editItem(id: number) {
    this.editEvent.emit(id);
  }
}

interface IItems {
  id: number;
  name: string | null;
  image: string | null;
  created_at: Date | string | null;
}
