import { TestBed } from '@angular/core/testing';

import { CopyserviceService } from './copyservice.service';

describe('CopyserviceService', () => {
  let service: CopyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
