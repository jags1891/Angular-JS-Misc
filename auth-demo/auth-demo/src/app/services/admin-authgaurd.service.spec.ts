import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthgaurdService } from './admin-authgaurd.service';

describe('AdminAuthgaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthgaurdService]
    });
  });

  it('should be created', inject([AdminAuthgaurdService], (service: AdminAuthgaurdService) => {
    expect(service).toBeTruthy();
  }));
});
