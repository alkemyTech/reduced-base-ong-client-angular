import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { IActivity } from '@core/models/activity';
import { HttpClientService } from '@core/services/http-client.service';

@Component({
  selector: 'alk-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities!: IActivity[];

  constructor(public spinner$: SpinnerService, private route: Router) {}

  ngOnInit(): void {
    this.activities = mockActivities;
  }

  deleteActivity(id: number) {
    const item = document.getElementById(id.toString());
    item?.classList.add('animate__animated', 'animate__backOutRight');
    setTimeout(() => {
      this.activities = this.activities.filter((news) => news.id != id);
    }, 600);
  }

  createActivity() {
    this.route.navigate(['backoffice/actividades/crear']);
  }

  editActivity(id: number) {
    this.route.navigate(['backoffice/actividades/editar', id]);
  }
}

const mockActivities: IActivity[] = [
  {
    id: 929,
    name: 'Taller Arte y Cuentos',
    slug: 'string',
    description:
      'Taller literario y de manualidades que se realiza semanalmente',
    image: 'http://ongapi.alkemy.org/storage/FLQLzI8KqU.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:16:02.000000Z',
    updated_at: '2021-11-30T19:16:02.000000Z',
  },
  {
    id: 930,
    name: 'Paseos recreativos y educativos',
    slug: 'string',
    description:
      'Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y adolescentes al área educativa.',
    image: 'http://ongapi.alkemy.org/storage/MnPEAjnOdz.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:18:11.000000Z',
    updated_at: '2021-11-30T19:18:11.000000Z',
  },
  {
    id: 931,
    name: 'Programas Educativos',
    slug: 'string',
    description:
      'Mediante nuestros programas educativos, buscamos incrementar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen.',
    image: 'http://ongapi.alkemy.org/storage/8oEMBibR51.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:31:07.000000Z',
    updated_at: '2021-11-30T19:31:07.000000Z',
  },
  {
    id: 932,
    name: 'Apoyo Escolar para el nivel Primario',
    slug: 'string',
    description:
      'El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.',
    image: 'http://ongapi.alkemy.org/storage/QrL9bAS2Yu.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:35:04.000000Z',
    updated_at: '2021-11-30T19:35:04.000000Z',
  },
  {
    id: 933,
    name: 'Campañas',
    slug: 'string',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa orci, tempus nec lectus pulvinar, ornare dictum turpis. Morbi sollicitudin elit vel turpis venenatis consectetur. Nullam mattis lacus eget imperdiet venenatis. Vivamus sed feugiat arcu, sit amet ultricies felis. Curabitur pellentesque risus nec ullamcorper viverra. Nam tempus tellus et ex euismod, quis iaculis velit vehicula. Vestibulum bibendum commodo lobortis. Donec hendrerit, lorem ut lobortis luctus, odio quam pellentesque nisi, efficitur eleifend mi odio nec elit. Aenean vulputate orci sed condimentum semper.',
    image: 'http://ongapi.alkemy.org/storage/ZNBGWQppLc.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:43:20.000000Z',
    updated_at: '2021-11-30T19:43:20.000000Z',
  },
  {
    id: 934,
    name: 'Lorem ipsum dolor sit amet',
    slug: 'string',
    description:
      'Phasellus leo magna, mollis eu dolor nec, dapibus interdum augue. Mauris ornare nibh sed neque convallis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu finibus odio. Nullam interdum vulputate magna ornare laoreet. Etiam sodales, tellus sed luctus ornare, ipsum dui molestie sem, eu fringilla eros lorem eleifend nibh. Morbi eu risus finibus, mattis tellus vel, vehicula turpis. Aliquam convallis dolor a libero egestas, sed cursus neque scelerisque. Donec est diam, pulvinar at aliquam vitae, fermentum mattis ipsum.',
    image: 'http://ongapi.alkemy.org/storage/0lPWDCfWf5.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:45:33.000000Z',
    updated_at: '2021-11-30T19:45:33.000000Z',
  },
  {
    id: 935,
    name: 'Morbi sed erat laoreet, dictum nisl eu, vehicula purus.',
    slug: 'string',
    description:
      'Vestibulum maximus luctus magna quis blandit. Donec vulputate molestie diam in porttitor. Pellentesque molestie urna bibendum neque dapibus porttitor. In efficitur risus orci, et tristique nibh semper vel.',
    image: 'http://ongapi.alkemy.org/storage/GwbYo3khRr.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-11-30T19:47:04.000000Z',
    updated_at: '2021-11-30T19:47:04.000000Z',
  },
  {
    id: 937,
    name: 'string',
    slug: 'string',
    description: 'string',
    image: 'http://ongapi.alkemy.org/storage/y03RZ2wGqX.jpeg',
    user_id: 0,
    category_id: 0,
    created_at: '2021-12-01T01:15:42.000000Z',
    updated_at: '2021-12-01T01:15:42.000000Z',
  },
];
