import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FoundationsComponent } from './foundations.component';

describe('FoundationsComponent', () => {
  let component: FoundationsComponent;
  let fixture: ComponentFixture<FoundationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
