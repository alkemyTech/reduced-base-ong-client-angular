import {
  Component,
  Input,
  OnInit, ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'alk-slides',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() routePrefix: string = '';
  @Input() carouselName: string = 'carousel';

  constructor() {}

  ngOnInit(): void {}
}
