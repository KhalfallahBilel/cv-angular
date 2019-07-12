import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaguagesCvComponent } from './laguages-cv.component';

describe('LaguagesCvComponent', () => {
  let component: LaguagesCvComponent;
  let fixture: ComponentFixture<LaguagesCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaguagesCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaguagesCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
