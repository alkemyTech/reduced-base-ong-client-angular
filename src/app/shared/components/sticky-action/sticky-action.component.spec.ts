import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyActionComponent } from './sticky-action.component';

describe('StickyActionComponent', () => {
  let component: StickyActionComponent;
  let fixture: ComponentFixture<StickyActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
