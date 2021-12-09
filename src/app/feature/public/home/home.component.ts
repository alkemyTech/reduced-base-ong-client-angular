import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '@core/services/http-client.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'alk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public news$: BehaviorSubject<Array<any>> = new BehaviorSubject(new Array());
  public testimonials$: BehaviorSubject<Array<any>> = new BehaviorSubject(new Array());

  constructor(private http: HttpClientService) {
    this.testimonials$.next(testimonials);
    this.news$.next(news);
  }

  ngOnInit(): void {}
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

const testimonials = [
  {
    id: 78,
    name: 'Marita Gomez',
    image: 'http://ongapi.alkemy.org/storage/Mb7qJKMAWA.jpeg',
    description:
      'Acompañamos el proceso de transformación de las comunidades promoviendo la participación activa de todos sus integrantes como sujetos.',
    created_at: '2021-05-28T15:14:35.000000Z',
    updated_at: '2021-11-25T02:50:24.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 79,
    name: 'Josefa Prospero',
    image: 'http://ongapi.alkemy.org/storage/vpXetNTugz.jpeg',
    description:
      'Una mención especial por el excelente trabajo académico realizado por mi tutor, el Dr. Walter Castro Aponte, agradeciéndole igualmente a él.',
    created_at: '2021-05-28T15:15:35.000000Z',
    updated_at: '2021-11-25T02:52:21.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 100,
    name: 'Marco Fernandez',
    image: 'http://ongapi.alkemy.org/storage/HBJxn4BdHg.jpeg',
    description:
      '<p>Buscamos incrementar la capacidad intelectual, moral y adsadasdectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad.</p>',
    created_at: '2021-06-22T15:29:39.000000Z',
    updated_at: '2021-12-07T18:55:02.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 101,
    name: 'Miriam Rodriguez',
    image: 'http://ongapi.alkemy.org/storage/8rP8O0xvcY.jpeg',
    description:
      '<p>Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos,la institución y la gente.</p>',
    created_at: '2021-06-22T15:38:31.000000Z',
    updated_at: '2021-11-25T02:54:39.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 104,
    name: 'Roberto Gomez',
    image: 'http://ongapi.alkemy.org/storage/kQwAAWFmK5.jpeg',
    description:
      '<p>Somos Más intenta brindar herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.</p>',
    created_at: '2021-06-26T15:41:24.000000Z',
    updated_at: '2021-06-28T19:29:27.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 282,
    name: 'Nahuel De Fazio',
    image: 'http://ongapi.alkemy.org/storage/QEB2r7carh.jpeg',
    description: '<p>HOlaa a todos</p>',
    created_at: '2021-12-07T18:23:36.000000Z',
    updated_at: '2021-12-07T18:23:36.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 283,
    name: 'dsadsa',
    image: 'http://ongapi.alkemy.org/storage/mIMTI5ZMvX.png',
    description: '<p>dsada</p>',
    created_at: '2021-12-08T21:45:33.000000Z',
    updated_at: '2021-12-08T21:45:33.000000Z',
    deleted_at: null,
    group_id: null,
  },
];
