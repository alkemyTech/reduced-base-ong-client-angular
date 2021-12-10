import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alk-sticky-action',
  templateUrl: './sticky-action.component.html',
  styleUrls: ['./sticky-action.component.scss']
})
export class StickyActionComponent  {

  @Input() text:string = 'Action';
  @Input() icon:string|null = null;
  @Output() actionEvent:EventEmitter<void> = new EventEmitter();

  constructor() { }

  action(){
    this.actionEvent.emit();
  }
}
