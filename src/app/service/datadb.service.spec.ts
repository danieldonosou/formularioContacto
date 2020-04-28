import { TestBed } from '@angular/core/testing';

import { DatadbService } from './datadb.service';

describe('DatadbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatadbService = TestBed.get(DatadbService);
    expect(service).toBeTruthy();
  });
});
