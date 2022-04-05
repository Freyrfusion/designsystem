import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulartabsComponent } from './angulartabs.component';

describe('AngulartabsComponent', () => {
  let component: AngulartabsComponent;
  let fixture: ComponentFixture<AngulartabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulartabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulartabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
