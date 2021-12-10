import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { INew } from '@core/models/new';

@Component({
  selector: 'alk-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public news: INew[] = [];

  constructor(public spinner$: SpinnerService, private route: Router) {}

  ngOnInit(): void {
    this.spinner$.toogleDisplay();
    setTimeout(() => {
      this.news = mockNews;
      this.spinner$.toogleDisplay();
    }, 1500);
  }

  deleteNew(id: number) {
    const item = document.getElementById(id.toString());
    item?.classList.add('animate__animated', 'animate__backOutRight');
    setTimeout(() => {
      this.news = this.news.filter((news) => news.id != id);
    }, 600);
  }

  createNew() {
    this.route.navigate(['backoffice/novedades/crear']);
  }

  editNew(id: number) {
    this.route.navigate(['backoffice/novedades/editar', id]);
  }
}

const mockNews: INew[] = [
  {
    id: 1169,
    name: 'ahora',
    content: '<p>ahora</p>',
    image: 'http://ongapi.alkemy.org/storage/uAsApoihO4.png',
    category_id: 1190,
    created_at: '2021-12-04T02:15:49.000000Z',
    updated_at: '2021-12-04T02:22:06.000000Z',
  },
  {
    id: 1170,
    name: 'dfg',
    content: '<p>dfg</p>',
    image: 'http://ongapi.alkemy.org/storage/5OhlCHNBs0.webp',
    category_id: 1185,
    created_at: '2021-12-04T02:23:34.000000Z',
    updated_at: '2021-12-04T02:23:34.000000Z',
  },
  {
    id: 1177,
    name: 'fefwefddddddddddddddddddddddddddddddddddd',
    content: '<p>fewfew</p>',
    image: 'http://ongapi.alkemy.org/storage/cpv0UMwwBx.jpeg',
    category_id: 1181,
    created_at: '2021-12-08T21:40:37.000000Z',
    updated_at: '2021-12-08T21:40:37.000000Z',
  },
  {
    id: 1179,
    name: 'fefwefddddddddddddddddddddddddddddddddddda21',
    content: '<p>fewfewdsdsd</p>',
    image: 'http://ongapi.alkemy.org/storage/e8SR2LEbN2.jpeg',
    category_id: 1190,
    created_at: '2021-12-08T21:41:14.000000Z',
    updated_at: '2021-12-08T21:41:14.000000Z',
  },
  {
    id: 1180,
    name: 'fefwefddddddddddddddddddddddddddddddddddda21',
    content: '<p>fewfewdsdsd</p>',
    image: 'http://ongapi.alkemy.org/storage/ivBfUYBB90.jpeg',
    category_id: 1190,
    created_at: '2021-12-08T21:43:28.000000Z',
    updated_at: '2021-12-08T21:43:28.000000Z',
  },
  {
    id: 1181,
    name: 'ramiro',
    content: '<p>qweqwe</p>',
    image: 'http://ongapi.alkemy.org/storage/SOqPsXOi9s.png',
    category_id: 1186,
    created_at: '2021-12-08T22:32:10.000000Z',
    updated_at: '2021-12-08T22:32:10.000000Z',
  },
  {
    id: 1182,
    name: 'qweqw',
    content: '<p>eqweqwe</p>',
    image: 'http://ongapi.alkemy.org/storage/uG4ugmkJgK.png',
    category_id: 1187,
    created_at: '2021-12-09T19:00:05.000000Z',
    updated_at: '2021-12-09T19:00:05.000000Z',
  },
  {
    id: 1183,
    name: 'dasd',
    content: '<p>asdasd</p>',
    image: 'http://ongapi.alkemy.org/storage/6DlieYw8oo.png',
    category_id: 1191,
    created_at: '2021-12-09T19:00:53.000000Z',
    updated_at: '2021-12-09T19:00:53.000000Z',
  },
  {
    id: 1184,
    name: 'asdas',
    content: '<p>dasdas</p>',
    image: 'http://ongapi.alkemy.org/storage/Jm3i0HUdlz.png',
    category_id: 1186,
    created_at: '2021-12-09T19:02:00.000000Z',
    updated_at: '2021-12-09T19:02:00.000000Z',
  },
];
