import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetencesComponent } from './edit-competences.component';

describe('EditCompetencesComponent', () => {
  let component: EditCompetencesComponent;
  let fixture: ComponentFixture<EditCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
