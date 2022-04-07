import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendodropdownComponent } from './kendodropdown.component';

describe('KendodropdownComponent', () => {
  let component: KendodropdownComponent;
  let fixture: ComponentFixture<KendodropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendodropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendodropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
