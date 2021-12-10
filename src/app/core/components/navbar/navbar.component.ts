import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from '../sidenav/sidebar.service';

@Component({
  selector: 'alk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toogleShow: boolean = false;
  public routes: ILinks[] = [];
  public isInDashboard$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private sidebar:SidebarService) {
    this.loadLinks();

    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        (/(backoffice)/).test(e.url) && this.isInDashboard$.next(true)
        !(/(backoffice)/).test(e.url) && this.isInDashboard$.next(false)
        // e.url === '/backoffice' && this.isInDashboard$.next(true)
        // e.url !== '/backoffice' && this.isInDashboard$.next(false)
      }
    });
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
      { text: 'Contribuye', route: 'donaciones' },
    ];
  }

  viewSidebar(){
    this.sidebar.toogleDisplay()
  }
}

interface ILinks {
  text: string;
  route: string;
}
