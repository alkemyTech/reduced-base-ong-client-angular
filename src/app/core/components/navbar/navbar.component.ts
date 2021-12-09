import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toogleShow: boolean = false;
  public routes: ILinks[] = [];

  constructor() {
    this.loadLinks();
  }

  ngOnInit(): void {}

  toogle() {
    this.toogleShow = !this.toogleShow;
  }

  private loadLinks() {
    this.routes = [
      { text: 'Inicio', route: 'inicio' },
      { text: 'Nosotros', route: 'nosotros' },
      { text: 'Actividades', route: 'actividades' },
      { text: 'Novedades', route: 'novedades' },
      { text: 'Testimonios', route: 'testimonios' },
      { text: 'Contacto', route: 'contacto' },
      { text: 'Contribuye', route: 'donaciones' }
    ];
  }
}

interface ILinks {
  text: string;
  route: string;
}
