import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news!:any[];
  constructor() { }

  ngOnInit(): void {
    this.news = news
  }

}

const news = [
  {
    "id": 1153,
    "name": "sdfsdf",
    "slug": null,
    "content": "<p>sdfsdf</p>",
    "image": "http://ongapi.alkemy.org/storage/oH4myLd39b.webp",
    "user_id": null,
    "category_id": 1174,
    "created_at": "2021-12-02T20:43:24.000000Z",
    "updated_at": "2021-12-02T20:43:24.000000Z",
    "deleted_at": null
  },
  {
    "id": 1169,
    "name": "ahora",
    "slug": null,
    "content": "<p>ahora</p>",
    "image": "http://ongapi.alkemy.org/storage/uAsApoihO4.png",
    "user_id": null,
    "category_id": 1190,
    "created_at": "2021-12-04T02:15:49.000000Z",
    "updated_at": "2021-12-04T02:22:06.000000Z",
    "deleted_at": null
  },
  {
    "id": 1170,
    "name": "dfg",
    "slug": null,
    "content": "<p>dfg</p>",
    "image": "http://ongapi.alkemy.org/storage/5OhlCHNBs0.webp",
    "user_id": null,
    "category_id": 1185,
    "created_at": "2021-12-04T02:23:34.000000Z",
    "updated_at": "2021-12-04T02:23:34.000000Z",
    "deleted_at": null
  },
  {
    "id": 1176,
    "name": "fefwef",
    "slug": null,
    "content": "<p>fewfew</p>",
    "image": "http://ongapi.alkemy.org/storage/8aQaxZrOpN.jpeg",
    "user_id": null,
    "category_id": 1181,
    "created_at": "2021-12-08T21:40:31.000000Z",
    "updated_at": "2021-12-08T21:40:31.000000Z",
    "deleted_at": null
  },
  {
    "id": 1177,
    "name": "fefwefddddddddddddddddddddddddddddddddddd",
    "slug": null,
    "content": "<p>fewfew</p>",
    "image": "http://ongapi.alkemy.org/storage/cpv0UMwwBx.jpeg",
    "user_id": null,
    "category_id": 1181,
    "created_at": "2021-12-08T21:40:37.000000Z",
    "updated_at": "2021-12-08T21:40:37.000000Z",
    "deleted_at": null
  },
  {
    "id": 1178,
    "name": "fefwefddddddddddddddddddddddddddddddddddda21",
    "slug": null,
    "content": "<p>fewfewdsdsd</p>",
    "image": "http://ongapi.alkemy.org/storage/fllhDNQ8Dy.jpeg",
    "user_id": null,
    "category_id": 1181,
    "created_at": "2021-12-08T21:40:43.000000Z",
    "updated_at": "2021-12-08T21:40:43.000000Z",
    "deleted_at": null
  },
  {
    "id": 1179,
    "name": "fefwefddddddddddddddddddddddddddddddddddda21",
    "slug": null,
    "content": "<p>fewfewdsdsd</p>",
    "image": "http://ongapi.alkemy.org/storage/e8SR2LEbN2.jpeg",
    "user_id": null,
    "category_id": 1190,
    "created_at": "2021-12-08T21:41:14.000000Z",
    "updated_at": "2021-12-08T21:41:14.000000Z",
    "deleted_at": null
  },
  {
    "id": 1180,
    "name": "fefwefddddddddddddddddddddddddddddddddddda21",
    "slug": null,
    "content": "<p>fewfewdsdsd</p>",
    "image": "http://ongapi.alkemy.org/storage/ivBfUYBB90.jpeg",
    "user_id": null,
    "category_id": 1190,
    "created_at": "2021-12-08T21:43:28.000000Z",
    "updated_at": "2021-12-08T21:43:28.000000Z",
    "deleted_at": null
  },
  {
    "id": 1181,
    "name": "ramiro",
    "slug": null,
    "content": "<p>qweqwe</p>",
    "image": "http://ongapi.alkemy.org/storage/SOqPsXOi9s.png",
    "user_id": null,
    "category_id": 1186,
    "created_at": "2021-12-08T22:32:10.000000Z",
    "updated_at": "2021-12-08T22:32:10.000000Z",
    "deleted_at": null
  }
]