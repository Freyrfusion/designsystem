import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcomponentsComponent } from './angularcomponents.component';

describe('AngularcomponentsComponent', () => {
  let component: AngularcomponentsComponent;
  let fixture: ComponentFixture<AngularcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
