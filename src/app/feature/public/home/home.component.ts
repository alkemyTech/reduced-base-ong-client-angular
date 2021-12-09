import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '@core/services/http-client.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'alk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides$:BehaviorSubject<[]> = new BehaviorSubject([]);
  
  constructor( private http: HttpClientService ) {
    this.slides$.next([])
   }

  ngOnInit(): void {
  }

}
