import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendouploadComponent } from './kendoupload.component';

describe('KendouploadComponent', () => {
  let component: KendouploadComponent;
  let fixture: ComponentFixture<KendouploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendouploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
