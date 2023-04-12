import { TestBed } from '@angular/core/testing';

import { DigitSpanService } from './digit-span.service';

describe('DigitSpanService', () => {
  let service: DigitSpanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitSpanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
