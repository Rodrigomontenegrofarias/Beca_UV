import { TestBed } from '@angular/core/testing';

import { CasinosService } from './casinos.service';

describe('CasinosService', () => {
  let service: CasinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
