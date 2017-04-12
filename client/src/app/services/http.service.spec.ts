import { TestBed, inject } from '@angular/core/testing';

import { HTTPService } from './http.service';

describe('HTTPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPService]
    });
  });

  it('should ...', inject([HTTPService], (service: HTTPService) => {
    expect(service).toBeTruthy();
  }));
});
