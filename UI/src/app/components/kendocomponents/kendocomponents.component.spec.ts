import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendocomponentsComponent } from './kendocomponents.component';

describe('KendocomponentsComponent', () => {
  let component: KendocomponentsComponent;
  let fixture: ComponentFixture<KendocomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendocomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendocomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
