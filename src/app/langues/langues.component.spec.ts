import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguesComponent } from './langues.component';

describe('LanguesComponent', () => {
  let component: LanguesComponent;
  let fixture: ComponentFixture<LanguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
