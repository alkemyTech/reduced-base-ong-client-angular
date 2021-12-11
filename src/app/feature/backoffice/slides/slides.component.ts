import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { ISlide } from '@core/models/slides';

@Component({
  selector: 'alk-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  public slides: ISlide[] = [];

  constructor(public spinner$: SpinnerService, private route: Router) {}

  ngOnInit(): void {
    this.slides = mockSlides;
  }

  deleteSlide(id: number) {
    const item = document.getElementById(id.toString());
    item?.classList.add('animate__animated', 'animate__backOutRight');
    setTimeout(() => {
      this.slides = this.slides.filter((news) => news.id != id);
    }, 600);
  }

  createSlide() {
    this.route.navigate(['backoffice/slides/crear']);
  }

  editSlide(id: number) {
    this.route.navigate(['backoffice/slides/editar', id]);
  }
}

const mockSlides: ISlide[] = [
  {
    id: 653,
    name: 'Primer Slide',
    description: '<p>el primero</p>',
    image: 'http://ongapi.alkemy.org/storage/Hxqbd9hMAb.png',
    order: 1,
    user_id: null,
    created_at: '2021-12-03T15:19:54.000000Z',
    updated_at: '2021-12-08T02:03:50.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 654,
    name: 'Segundo',
    description: '<p>SEgundo</p>',
    image: 'http://ongapi.alkemy.org/storage/fvdAUJRdUz.png',
    order: 2,
    user_id: null,
    created_at: '2021-12-03T15:22:11.000000Z',
    updated_at: '2021-12-08T02:07:12.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 655,
    name: 'Tercero',
    description: '<p>Tercero</p>',
    image: 'http://ongapi.alkemy.org/storage/TKCADpPjQq.png',
    order: null,
    user_id: null,
    created_at: '2021-12-03T15:22:41.000000Z',
    updated_at: '2021-12-03T15:22:41.000000Z',
    deleted_at: null,
    group_id: null,
  },
  {
    id: 657,
    name: 'sdsd',
    description: '<ul><li>sdsadsad</li></ul>',
    image: 'http://ongapi.alkemy.org/storage/Y7P0ydMc6p.png',
    order: 2,
    user_id: null,
    created_at: '2021-12-09T18:32:14.000000Z',
    updated_at: '2021-12-09T18:32:14.000000Z',
    deleted_at: null,
    group_id: null,
  },
];
