import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronImageComponent } from './jumbotron-image.component';

describe('JumbotronImageComponent', () => {
  let component: JumbotronImageComponent;
  let fixture: ComponentFixture<JumbotronImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbotronImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
