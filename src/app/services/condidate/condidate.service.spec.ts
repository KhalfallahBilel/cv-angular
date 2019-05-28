import { TestBed } from '@angular/core/testing';

import { CondidateService } from './condidate.service';

describe('CondidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CondidateService = TestBed.get(CondidateService);
    expect(service).toBeTruthy();
  });
});
