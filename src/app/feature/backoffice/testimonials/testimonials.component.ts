import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { ITestimonial } from '@core/models/testimonial';

@Component({
  selector: 'alk-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  public testimonials: ITestimonial[] = [];

  constructor(public spinner$: SpinnerService, private route: Router) {}

  ngOnInit(): void {
    this.testimonials = mockTestimonials;
  }

  deleteTestimonial(id: number) {
    const item = document.getElementById(id.toString());
    item?.classList.add('animate__animated', 'animate__backOutRight');
    setTimeout(() => {
      this.testimonials = this.testimonials.filter((news) => news.id != id);
    }, 600);
  }

  createTestimonial() {
    this.route.navigate(['backoffice/testimonios/crear']);
  }

  editTestimonial(id: number) {
    this.route.navigate(['backoffice/testimonios/editar', id]);
  }
}

const mockTestimonials: ITestimonial[] = [
  {
    id: 78,
    name: 'Marita Gomez',
    image: 'http://ongapi.alkemy.org/storage/Mb7qJKMAWA.jpeg',
    description:
      'Acompañamos el proceso de transformación de las comunidades promoviendo la participación activa de todos sus integrantes como sujetos.',
    created_at: '2021-05-28T15:14:35.000000Z',
    updated_at: '2021-11-25T02:50:24.000000Z',
  },
  {
    id: 79,
    name: 'Josefa Prospero',
    image: 'http://ongapi.alkemy.org/storage/vpXetNTugz.jpeg',
    description:
      'Una mención especial por el excelente trabajo académico realizado por mi tutor, el Dr. Walter Castro Aponte, agradeciéndole igualmente a él.',
    created_at: '2021-05-28T15:15:35.000000Z',
    updated_at: '2021-11-25T02:52:21.000000Z',
  },
  {
    id: 100,
    name: 'Marco Fernandez',
    image: 'http://ongapi.alkemy.org/storage/rtH8F7QYR1.png',
    description:
      '<p>Buscamos incrementar la capacidad intelectual, moral y adsadasdectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad.</p>',
    created_at: '2021-06-22T15:29:39.000000Z',
    updated_at: '2021-12-10T03:42:22.000000Z',
  },
  {
    id: 101,
    name: 'Miriam Rodriguez',
    image: 'http://ongapi.alkemy.org/storage/8rP8O0xvcY.jpeg',
    description:
      '<p>Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos,la institución y la gente.</p>',
    created_at: '2021-06-22T15:38:31.000000Z',
    updated_at: '2021-11-25T02:54:39.000000Z',
  },
  {
    id: 104,
    name: 'Roberto Gomez',
    image: 'http://ongapi.alkemy.org/storage/kQwAAWFmK5.jpeg',
    description:
      '<p>Somos Más intenta brindar herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.</p>',
    created_at: '2021-06-26T15:41:24.000000Z',
    updated_at: '2021-06-28T19:29:27.000000Z',
  },
  {
    id: 282,
    name: 'Nahuel De Fazio',
    image: 'http://ongapi.alkemy.org/storage/QEB2r7carh.jpeg',
    description: '<p>HOlaa a todos</p>',
    created_at: '2021-12-07T18:23:36.000000Z',
    updated_at: '2021-12-07T18:23:36.000000Z',
  },
  {
    id: 283,
    name: 'dsadsa',
    image: 'http://ongapi.alkemy.org/storage/mIMTI5ZMvX.png',
    description: '<p>dsada</p>',
    created_at: '2021-12-08T21:45:33.000000Z',
    updated_at: '2021-12-08T21:45:33.000000Z',
  },
  {
    id: 284,
    name: 'dsadsa',
    image: 'http://ongapi.alkemy.org/storage/ZBaCxwk11D.png',
    description: '<p>dsadas</p>',
    created_at: '2021-12-09T21:41:42.000000Z',
    updated_at: '2021-12-09T21:41:42.000000Z',
  },
  {
    id: 285,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/8127wLnvGy.png',
    description: '<p>asdad</p>',
    created_at: '2021-12-09T21:43:54.000000Z',
    updated_at: '2021-12-09T21:43:54.000000Z',
  },
  {
    id: 286,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/pw4fB6dYyA.png',
    description: '<p>asdad</p>',
    created_at: '2021-12-09T21:49:41.000000Z',
    updated_at: '2021-12-09T21:49:41.000000Z',
  },
  {
    id: 287,
    name: 'dsadasdas',
    image: 'http://ongapi.alkemy.org/storage/1x0jQqCUG7.png',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:44:36.000000Z',
    updated_at: '2021-12-10T03:44:36.000000Z',
  },
  {
    id: 288,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/nBYCVdARIK.png',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:52:09.000000Z',
    updated_at: '2021-12-10T03:52:09.000000Z',
  },
  {
    id: 289,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/RP4kXQ351x.png',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:53:22.000000Z',
    updated_at: '2021-12-10T03:53:22.000000Z',
  },
  {
    id: 290,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/ZiNxOxszEU.jpeg',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:53:46.000000Z',
    updated_at: '2021-12-10T03:53:46.000000Z',
  },
  {
    id: 291,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/CEzG0vPDQO.jpeg',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:54:41.000000Z',
    updated_at: '2021-12-10T03:54:41.000000Z',
  },
  {
    id: 292,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/uomNdA1XP4.jpeg',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:54:52.000000Z',
    updated_at: '2021-12-10T03:54:52.000000Z',
  },
  {
    id: 293,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/0ReBjGFBf8.jpeg',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:55:10.000000Z',
    updated_at: '2021-12-10T03:55:10.000000Z',
  },
  {
    id: 294,
    name: 'dsadas',
    image: 'http://ongapi.alkemy.org/storage/SanBqgSOhN.jpeg',
    description: '<p>dsadasd</p>',
    created_at: '2021-12-10T03:55:16.000000Z',
    updated_at: '2021-12-10T03:55:16.000000Z',
  },
  {
    id: 295,
    name: 'Nahuel De Faziodsa',
    image: 'http://ongapi.alkemy.org/storage/2uCyyEpATV.png',
    description: '<p>dsadas</p>',
    created_at: '2021-12-10T04:41:10.000000Z',
    updated_at: '2021-12-10T04:41:10.000000Z',
  },
  {
    id: 296,
    name: 'Nahuel De Fazio',
    image: 'http://ongapi.alkemy.org/storage/7TZjrj4kJW.jpeg',
    description: '<p>po</p>',
    created_at: '2021-12-10T04:49:14.000000Z',
    updated_at: '2021-12-10T04:49:14.000000Z',
  },
];
