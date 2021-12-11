import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@core/components/spinner/spinner.service';
import { IMember } from '@core/models/member';

@Component({
  selector: 'alk-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  public members: IMember[] = [];

  constructor(public spinner$: SpinnerService, private route: Router) {}

  ngOnInit(): void {
    this.members = mockMembers;
  }

  deleteMember(id: number) {
    const item = document.getElementById(id.toString());
    item?.classList.add('animate__animated', 'animate__backOutRight');
    setTimeout(() => {
      this.members = this.members.filter((news) => news.id != id);
    }, 600);
  }

  createMember() {
    this.route.navigate(['backoffice/miembros/crear']);
  }

  editMember(id: number) {
    this.route.navigate(['backoffice/miembros/editar', id]);
  }
}

const mockMembers: IMember[] = [
  {
    id: 314,
    name: 'Prueba',
    image: 'http://ongapi.alkemy.org/storage/QRSfhgYnYl.png',
    description: '<p>vcvcb</p>',
    facebookUrl: 'string.com',
    linkedinUrl: 'https://www.linkedin.com/in/gonzalopozzo/',
    created_at: '2021-12-07T19:58:50.000000Z',
    updated_at: '2021-12-09T05:14:24.000000Z',
    deleted_at: null,
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
  },
];
