import { TestBed } from '@angular/core/testing';

import { AdivinasoloService } from './adivinasolo.service';

describe('AdivinasoloService', () => {
  let service: AdivinasoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdivinasoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
