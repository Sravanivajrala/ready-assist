import { TestBed } from '@angular/core/testing';

import { SamplePageService } from './sample-page.service';

describe('SamplePageService', () => {
  let service: SamplePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
