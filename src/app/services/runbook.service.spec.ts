import { TestBed } from '@angular/core/testing';

import { RunbookService } from './runbook.service';

describe('RunbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RunbookService = TestBed.get(RunbookService);
    expect(service).toBeTruthy();
  });
});
