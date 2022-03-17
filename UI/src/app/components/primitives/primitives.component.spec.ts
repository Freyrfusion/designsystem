import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimitivesComponent } from './primitives.component';

describe('PrimitivesComponent', () => {
  let component: PrimitivesComponent;
  let fixture: ComponentFixture<PrimitivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
