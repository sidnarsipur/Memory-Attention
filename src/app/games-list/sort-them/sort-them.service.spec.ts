import { TestBed } from '@angular/core/testing';

import { SortThemService } from './sort-them.service';

describe('SortThemService', () => {
  let service: SortThemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortThemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
