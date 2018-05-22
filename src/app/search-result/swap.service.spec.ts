import { TestBed, inject } from '@angular/core/testing';

import { SwapService } from './swap.service';

describe('SwapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapService]
    });
  });

  it('should be created', inject([SwapService], (service: SwapService) => {
    expect(service).toBeTruthy();
  }));
});
