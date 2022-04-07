import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoinputsComponent } from './kendoinputs.component';

describe('KendoinputsComponent', () => {
  let component: KendoinputsComponent;
  let fixture: ComponentFixture<KendoinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
