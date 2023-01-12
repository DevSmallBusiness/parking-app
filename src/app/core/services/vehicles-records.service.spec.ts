import { TestBed } from '@angular/core/testing';

import { VehiclesRecordsService } from './vehicles-records.service';

describe('VehiclesRecordsService', () => {
  let service: VehiclesRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
