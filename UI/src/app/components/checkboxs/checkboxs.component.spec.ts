import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckboxsComponent } from './checkboxs.component';

describe('CheckboxsComponent', () => {
  let component: CheckboxsComponent;
  let fixture: ComponentFixture<CheckboxsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
