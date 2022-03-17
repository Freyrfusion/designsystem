import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavigationsComponent } from './navigations.component';

describe('NavigationsComponent', () => {
  let component: NavigationsComponent;
  let fixture: ComponentFixture<NavigationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
