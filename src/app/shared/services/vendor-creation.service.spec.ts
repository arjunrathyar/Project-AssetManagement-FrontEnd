import { TestBed } from '@angular/core/testing';

import { VendorCreationService } from './vendor-creation.service';

describe('VendorCreationService', () => {
  let service: VendorCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
