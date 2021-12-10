import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private URL_BASE = 'assets/images/';
  public backoffice = [
    {
      title: 'Novedades',
      img: this.URL_BASE + 'news.png',
      path: '/backoffice/novedades',
    },
    {
      title: 'Actividades',
      img: this.URL_BASE + 'activities.png',
      path: '/backoffice/actividades',
    },
    {
      title: 'Categorías',
      img: this.URL_BASE + 'categories.png',
      path: '/backoffice/categorias',
    },
    {
      title: 'Testimonios',
      img: this.URL_BASE + 'testimonials.png',
      path: '/backoffice/testimonios',
    },
    {
      title: 'Organización',
      img: this.URL_BASE + 'organization.png',
      path: '/backoffice/organizacion',
    },
    {
      title: 'Slides',
      img: this.URL_BASE + 'slides.png',
      path: '/backoffice/slides',
    },
    {
      title: 'Usuarios',
      img: this.URL_BASE + 'users.png',
      path: '/backoffice/usuarios',
    },
    {
      title: 'Miembros',
      img: this.URL_BASE + 'members.png',
      path: '/backoffice/miembros',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}


