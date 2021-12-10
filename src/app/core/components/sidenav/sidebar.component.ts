import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'alk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  URL_BASE = 'assets/images/'

  backoffice = [
    {
      title: 'Home',
      img: this.URL_BASE + 'home.png',
      path: '/backoffice'
    },
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
      path: '/backoffice/organization',
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

  constructor( private navigate: Router, public sidebar$:SidebarService ) { }

  ngOnInit(): void {
   
  }

  goto( path: string ) {
    this.navigate.navigate( [path] );
  }

}
