import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'alk-news-group',
  templateUrl: './news-group.component.html',
  styleUrls: ['./news-group.component.sass'],
})
export class NewsGroupComponent implements OnInit {
  @Input() newsList: any[] = [];

  public numberNews: number = 6;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewInDetail(inewId: number) {
    this.router.navigate(['/novedades', inewId]);
  }

  formatContent(item: any): string {
    const classname = `align-self-end d-flex flex-column justify-content-end text-muted font-italic flex-grow-1`;
    console.log()
    return (
      (item &&
        `${
          item.content.length > 15 ? item.content : 
          'Quae mollitia harum veniam consectetur sunt consequatur sint. Et quis nam. Quo quidem nulla esse autem. Similique qui consequatur placeat natus. Qui maxime rerum. Beatae architecto eveniet quibusdam vitae facere voluptatem.'
        } <small class="${classname}" >${moment(item.updated_at).format(
          'L'
        )}</small>`) ||
      null
    );
  }
}
