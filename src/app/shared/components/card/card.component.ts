import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alk-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() img!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() linkedin!: string;
  @Input() facebook!: string;

  constructor() {}

  ngOnInit(): void {}
}
