import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public testimonials:any[] = []
  constructor() { }

  ngOnInit(): void {
    this.testimonials = testimonialsdata
  }

}

const testimonialsdata = [
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