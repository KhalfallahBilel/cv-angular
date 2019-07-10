import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetencesComponent } from './add-competences.component';

describe('AddCompetencesComponent', () => {
  let component: AddCompetencesComponent;
  let fixture: ComponentFixture<AddCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
