/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBindingServiceService } from './data-binding-service.service';

describe('DataBindingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBindingServiceService]
    });
  });

  it('should ...', inject([DataBindingServiceService], (service: DataBindingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
