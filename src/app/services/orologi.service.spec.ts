import { TestBed } from '@angular/core/testing';

import { OrologiService } from './orologi.service';

describe('OrologiService', () => {
  let service: OrologiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrologiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
