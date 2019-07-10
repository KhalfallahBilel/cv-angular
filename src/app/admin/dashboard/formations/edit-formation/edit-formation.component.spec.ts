import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormationComponent } from './edit-formation.component';

describe('EditFormationComponent', () => {
  let component: EditFormationComponent;
  let fixture: ComponentFixture<EditFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
