import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecomponentsComponent } from './primecomponents.component';

describe('PrimecomponentsComponent', () => {
  let component: PrimecomponentsComponent;
  let fixture: ComponentFixture<PrimecomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimecomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
