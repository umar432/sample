/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SahredService } from './sahred.service';

describe('SahredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SahredService]
    });
  });

  it('should ...', inject([SahredService], (service: SahredService) => {
    expect(service).toBeTruthy();
  }));
});
