import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alk-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() text:string = "Blank subtitle component";
  @Input() align:"start"|"center"|"end" = "center";
  @Input() size:"small"|"medium"|"big" = "medium"
  
  constructor() { }

  ngOnInit(): void {
  }

}
