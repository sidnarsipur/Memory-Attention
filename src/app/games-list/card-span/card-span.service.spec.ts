import { TestBed } from '@angular/core/testing';

import { CardSpanService } from './card-span.service';

describe('CardSpanService', () => {
  let service: CardSpanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSpanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
