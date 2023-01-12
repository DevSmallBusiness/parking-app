import { TestBed } from '@angular/core/testing';

import { ChangesHistoryService } from './changes-history.service';

describe('ChangesHistoryService', () => {
  let service: ChangesHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangesHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
