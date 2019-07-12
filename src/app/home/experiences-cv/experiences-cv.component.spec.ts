import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesCvComponent } from './experiences-cv.component';

describe('ExperiencesCvComponent', () => {
  let component: ExperiencesCvComponent;
  let fixture: ComponentFixture<ExperiencesCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
