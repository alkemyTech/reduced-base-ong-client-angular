import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alk-jumbotron-image',
  templateUrl: './jumbotron-image.component.html',
  styleUrls: ['./jumbotron-image.component.scss']
})
export class JumbotronImageComponent implements OnInit {
  @Input() image:string = '../../assets/images/placeholder-image.png' 
  constructor() { }

  ngOnInit(): void {
  }

}
