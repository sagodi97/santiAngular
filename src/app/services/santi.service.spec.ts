import { TestBed } from '@angular/core/testing';

import { SantiService } from './santi.service';

describe('SantiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SantiService = TestBed.get(SantiService);
    expect(service).toBeTruthy();
  });
});
