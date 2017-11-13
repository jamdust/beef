import { TestBed, inject } from '@angular/core/testing';

import { ZeroService } from './zero.service';

describe('ZeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZeroService]
    });
  });

  it('should be created', inject([ZeroService], (service: ZeroService) => {
    expect(service).toBeTruthy();
  }));
});
