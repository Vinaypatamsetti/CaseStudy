import { TestBed, async, inject } from '@angular/core/testing';

import { MerchantGuardGuard } from './merchant-guard.guard';

describe('MerchantGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchantGuardGuard]
    });
  });

  it('should ...', inject([MerchantGuardGuard], (guard: MerchantGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
