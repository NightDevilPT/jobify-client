import { TestBed } from '@angular/core/testing';

import { TailwindHelperService } from './tailwind-helper.service';

describe('TailwindHelperService', () => {
  let service: TailwindHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailwindHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
