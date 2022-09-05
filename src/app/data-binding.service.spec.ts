/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBindingService } from './data-binding/data-binding.service';

describe('DataBindingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBindingService]
    });
  });

  it('should ...', inject([DataBindingService], (service: DataBindingService) => {
    expect(service).toBeTruthy();
  }));
});
