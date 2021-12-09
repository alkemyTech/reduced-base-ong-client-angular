import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alk-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public desc!: string;
  public members: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.desc =
      '<p>Desde 1997 en <strong>Somos Más</strong> trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. ﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.&nbsp;</p>';

    this.members = [{
        id: 314,
        name: 'Prueba',
        image: 'http://ongapi.alkemy.org/storage/VEjEHy0NC2.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T19:58:50.000000Z',
        updated_at: '2021-12-07T19:58:50.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 315,
        name: 'Prueba',
        image: 'http://ongapi.alkemy.org/storage/ioDDmYuyWp.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T19:59:01.000000Z',
        updated_at: '2021-12-07T19:59:01.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 317,
        name: 'Prueba',
        image: 'http://ongapi.alkemy.org/storage/QqDVSbvDNI.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T19:59:26.000000Z',
        updated_at: '2021-12-07T19:59:26.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 318,
        name: 'Prueba',
        image: 'http://ongapi.alkemy.org/storage/nUUNqltJA0.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T20:02:10.000000Z',
        updated_at: '2021-12-07T20:02:10.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 319,
        name: 'Prueba',
        image: 'http://ongapi.alkemy.org/storage/1QWLm1b50p.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T20:02:13.000000Z',
        updated_at: '2021-12-07T20:02:13.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 320,
        name: 'sample member',
        image: 'http://ongapi.alkemy.org/storage/R4X8vS6PES.gif',
        description: 'lorem ipsu dolor sit amet',
        facebookUrl: 'string',
        linkedinUrl: 'string',
        created_at: '2021-12-07T20:32:49.000000Z',
        updated_at: '2021-12-07T20:32:49.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 321,
        name: 'Manu',
        image: 'http://ongapi.alkemy.org/storage/d7bb2C8vMp.jpeg',
        description: '<p>dfgdf</p>',
        facebookUrl: 'https://www.instagram.com/bcubeagency',
        linkedinUrl: 'https://www.instagram.com/bcubeagency',
        created_at: '2021-12-08T15:05:24.000000Z',
        updated_at: '2021-12-08T15:05:24.000000Z',
        deleted_at: null,
        group_id: null,
      }
    ];
  }
}
