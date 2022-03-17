import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotableComponent } from './kendotable.component';

describe('KendotableComponent', () => {
  let component: KendotableComponent;
  let fixture: ComponentFixture<KendotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
