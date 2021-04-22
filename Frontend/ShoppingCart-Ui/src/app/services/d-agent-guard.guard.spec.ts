import { TestBed, async, inject } from '@angular/core/testing';

import { DAgentGuardGuard } from './d-agent-guard.guard';

describe('DAgentGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DAgentGuardGuard]
    });
  });

  it('should ...', inject([DAgentGuardGuard], (guard: DAgentGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
