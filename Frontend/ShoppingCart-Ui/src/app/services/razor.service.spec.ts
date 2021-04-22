import { TestBed } from '@angular/core/testing';

import { RazorService } from './razor.service';

describe('RazorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazorService = TestBed.get(RazorService);
    expect(service).toBeTruthy();
  });
});
