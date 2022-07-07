import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendomultiselectComponent } from './kendomultiselect.component';

describe('KendomultiselectComponent', () => {
  let component: KendomultiselectComponent;
  let fixture: ComponentFixture<KendomultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendomultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendomultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
