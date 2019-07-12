import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCvComponent } from './training-cv.component';

describe('TrainingCvComponent', () => {
  let component: TrainingCvComponent;
  let fixture: ComponentFixture<TrainingCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
