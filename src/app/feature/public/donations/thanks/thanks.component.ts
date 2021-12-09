import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  public text= "Gracias por aportar un granito de arena para que este sea un mundo mejor. <strong>Gracias por tu contribución</strong>"
  constructor() { }

  ngOnInit(): void {
  }

}
