import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendodatepickerComponent } from './kendodatepicker.component';

describe('KendodatepickerComponent', () => {
  let component: KendodatepickerComponent;
  let fixture: ComponentFixture<KendodatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendodatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendodatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
