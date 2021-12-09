import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public organization!:any
  constructor() { }

  ngOnInit(): void {
    this.organization = {
      facebook_url:"",
      linkedin_url:"",
      instagram_url:"",
      twitter_url:"",
      cellphone: "0800 111 1234"
    }
  }

}
